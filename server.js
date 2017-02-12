var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article One is here!',
    heading: 'Article One',
    date: '12 Feb, 2017',
    content: `
            <p>Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. </p>
            <p>Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. </p>
            <p>Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. </p>
            `
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <a href="/">Home</a>
                    <hr/>
                    <h1>${heading}</h1>
                    <div>Date: ${date}</div>
                    <div>${content}</div>
                </div>
            </body>
        </html>
    `;
    
    return htmlTemplate;    
    }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
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
