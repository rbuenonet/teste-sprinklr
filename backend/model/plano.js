class PlanoModel{   

    /**
     *   @description: Model responsavel pela listagem
     *   @param: param: object formado no controller
     *   @return: Retorna o resultado do banco para a promisse
     */
    list(param){
        return new Promise(function(resolve, reject){
            var mysql = require('../api/mysql');

            mysql.exec('SELECT *, name as list, time as button FROM planos').then((data) => {
                resolve(data)
            }).catch((data) => {
                reject(data)
            })
        })
    }
}
module.exports = new PlanoModel();
