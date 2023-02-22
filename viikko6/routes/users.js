var express = require('express');
app = express();
var router = express.Router();
var port = 3000;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.use(
  function(req,res,next){
      console.log('The common middleware called');
      next();
  }
);

app.use('/example',
    function(req,res,next){
        console.log('The example middleware called');
        next();
    }
);

app.get('/example',
    function(request,response){
        response.send('I am example');
        console.log('I am example');
    }
);

app.get('/example/:name',
    function(request,response){
        response.send('Hello '+request.params.name);
    }
);

app.get('/example2/:firstName/:lastName',
    function(request, response){
        response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);

app.post('/',
    function(request,response){
        response.send(request.body.firstName+' '+request.body.lastName);
        console.log(request.body.firstNname+' '+request.body.lastName);
    }
);

module.exports = app;
