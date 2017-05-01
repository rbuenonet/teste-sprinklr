class TarifaController{
    constructor(){
        this.tarifaModel = require('../model/tarifa');
    }

    /**
    *   @description: Controller responsavel pela listagem
    *   @param: req, res, next (parametros padrões do restify)
    *   @return: Object retorno padrão {message : string, erro : object, retorno : object}
    */
    list(req, res, next){
        var that = this;
        
        that.tarifaModel.list().then((data) => {
            if(data.length == 0){
                res.json({ message: 'Tarifas não encontradas', erro: [{message: 'Tarifas não encontradas'}], retorno: [] });    
            }else{
                res.json({ message: 'Tarifas encontrados', erro: [], retorno: data });
            }

            next();
            return;
        }).catch((data) => {
            res.json({ message: 'Ocorreu um erro ao recuperar as informações dos tarifas', erro: data, retorno: [] });
            next();
            return;
        })
    }

    /**
    *   @description: Controller responsavel pela validação
    *   @param: campos
    *   @return: false or error
    */
    validation(fields, action){
        var erro = [];

        if(!fields.name){
            erro.push('Nome inválido')
        }

        if((!fields.id || /[^0-9\.]/.test(fields.id)) && action != 'I'){
            erro.push('Código inválido')
        }

        if(erro.length > 0){
            return erro;
        }

        return false;
    }
}
module.exports = new TarifaController();
