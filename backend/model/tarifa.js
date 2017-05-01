class TarifaModel{   

    /**
     *   @description: Model responsavel pela listagem
     *   @param: param: object formado no controller
     *   @return: Retorna o resultado do banco para a promisse
     */
    list(param){
        return new Promise(function(resolve, reject){
            var mysql = require('../api/mysql');

            mysql.exec('SELECT * FROM tarifas').then((data) => {
                resolve(data)
            }).catch((data) => {
                reject(data)
            })
        })
    }

    /**
     *   @description: Model responsavel pela consulta
     *   @param: param: object formado no controller
     *   @return: Retorna o resultado do banco para a promisse
     */
    consult(origem, destino){
        return new Promise(function(resolve, reject){
            var mysql = require('../api/mysql');

            mysql.exec('SELECT * FROM tarifas WHERE origem = ? AND destino = ?', [origem, destino]).then((data) => {
                resolve(data)
            }).catch((data) => {
                reject(data)
            })
        })
    }
}
module.exports = new TarifaModel();
