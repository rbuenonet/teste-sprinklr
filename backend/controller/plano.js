class PlanoController{
    constructor(){
        this.cidadeModel = require('../model/cidade');
        this.planoModel = require('../model/plano');
        this.tarifaModel = require('../model/tarifa');
        
    }

    /**
    *   @description: Controller responsavel pela listagem
    *   @param: req, res, next (parametros padrões do restify)
    *   @return: Object retorno padrão {message : string, erro : object, retorno : object}
    */
    list(req, res, next){
        var that = this;
        
        that.planoModel.list().then((data) => {
            if(data.length == 0){
                res.json({ message: 'Planos não encontrados', erro: [{message: 'Planos não encontrados'}], retorno: [] });    
            }else{
                res.json({ message: 'Planos encontrados', erro: [], retorno: data });
            }

            next();
            return;
        }).catch((data) => {
            res.json({ message: 'Ocorreu um erro ao recuperar as informações dos planos', erro: data, retorno: [] });
            next();
            return;
        })
    }

    /**
    *   @description: Controller responsavel pelo calculo
    *   @param: req, res, next (parametros padrões do restify)
    *   @return: Object retorno padrão {message : string, erro : object, retorno : object}
    */
    calc(req, res, next){
        var that = this;
        var param = req.params.body;

        var erro = this._validation(param)        

        if(erro){
            res.json({ message: 'Ocorreu um erro na realizar o calculo da tarifa', erro: erro, retorno: [] });
            next();
            return;
        }

        that._realizaCalculo(param).then((data) => {
            if(data.length > 0){
                res.json({message: 'Calculo realizado com sucesso', erro: [], retorno: data })  
            }else{
                res.json({message: 'Nenhuma tarifa cadastrada para essa ligação', erro: [{message: 'Nenhuma tarifa cadastrada para essa ligação'}], retorno: [] })  
            }
            next();
            return;
        });
        
        
    }

    _realizaCalculo(param){
        var that = this;
        return new Promise(function(resolve, reject){
            
            that.tarifaModel.consult(param.origem, param.destino).then((tarifa) => {
                if(tarifa.length == 0){
                    resolve([])
                    return;
                }
                that.planoModel.list().then((planos) => {

                    var retorno = [];
                    var valor = tarifa[0].value;

                    planos.forEach(function(plano) {

                        if(param.plano != 0 && param.plano != plano.id){
                            retorno.push({
                                name: plano.name,
                                value : ' - '
                            })
                        }else{

                            var value = 0

                            if(plano.time < param.tempo){
                                value = (valor + (valor / 10)) * (param.tempo - plano.time);
                            }

                            retorno.push({
                                name: plano.name,
                                value : value
                            })
                        }
                    });

                    retorno.push({
                        name: 'Normal',
                        value: ( valor * param.tempo )
                    })

                    resolve(retorno);
                })
            })
        })
    }

    /**
    *   @description: Controller responsavel pela validação
    *   @param: campos
    *   @return: false or error
    */
    _validation(fields, action){
        var erro = [];

        if(!fields.origem){
            erro.push('Origem inválido')
        }

        if(!fields.destino){
            erro.push('Destino inválido')
        }

        if(!fields.tempo || /[^0-9\.]/.test(fields.tempo)){
            erro.push('Tempo inválido')
        }

        if(erro.length > 0){
            return erro;
        }

        return false;
    }
}
module.exports = new PlanoController();
