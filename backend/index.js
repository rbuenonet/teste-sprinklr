var restify = require('restify');
var cors = require('cors');

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
}

var server = restify.createServer();
restify.CORS.ALLOW_HEADERS.push('authorization');
server.use(restify.CORS());
server.use(restify.bodyParser({ mapParams: true }));


server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});


/**------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Cidade
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var cidadeController = require('./controller/cidade');

server.get('/cidade', function(req, res, next){ cidadeController.list(req, res, next) });


/**------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Plano
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var planoController = require('./controller/plano');

server.get('/plano', function(req, res, next){ planoController.list(req, res, next) });
server.post('/plano/calc', function(req, res, next){ planoController.calc(req, res, next) });


/**------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Tarifa
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var tarifaController = require('./controller/tarifa');

server.get('/tarifa', function(req, res, next){ tarifaController.list(req, res, next) });
