var express = require('express');
var nunjucks = require('nunjucks');

var app = express();
app.use(express.static('/public'));

var env = nunjucks.configure(['views/'], {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    res.render('index.html', { title: 'Fusion Auth NodeJS' }); 
});

app.get('/oauth-redirect', function(req, res) {
    console.log('MAHO');
});

app.listen(3000, function() {
    console.log('Fusion Auth NodeJS listening on port 3000');
});