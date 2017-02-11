var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/ui/article-two', function (req, res) {
  res.send('article-two.html shall be served here, in the future');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/images/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'madi.png'));
});

app.get('/images/chaplin.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'chaplin.png'));
});

app.get('/images/xkcd52.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'xkcd52.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
