class CidadeModel{   

    /**
     *   @description: Model responsavel pela listagem
     *   @param: param: object formado no controller
     *   @return: Retorna o resultado do banco para a promisse
     */
    list(){
        return new Promise(function(resolve, reject){
            var mysql = require('../api/mysql');

            mysql.exec('SELECT *, concat(ddd, " - ", name) as list, ddd as button FROM cidades').then((data) => {
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
    consult(param){
        return new Promise(function(resolve, reject){
            var mysql = require('../api/mysql');

            mysql.exec('SELECT * FROM cidades WHERE id = ?', param).then((data) => {
                resolve(data)
            }).catch((data) => {
                reject(data)
            })
        })
    }
}
module.exports = new CidadeModel();
