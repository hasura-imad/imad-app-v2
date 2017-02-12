//imported software packages
var express = require('express');//library used to create the web server
var morgan = require('morgan');//library used to output logs of our server
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));//when url path '/' is requested , then picks up ui/index.html and sends it contents ..these are called url handlers
});

app.get('/article-one', function (req, res) {
  res.send('Article one requested and will be served here')));
});


app.get('/article-two', function (req, res) {
  res.send('Article two requested and will be served here')));
});


app.get('/article-three', function (req, res) {
  res.send('Article three requested and will be served here')));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
