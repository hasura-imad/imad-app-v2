var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article1':{

    title   :   'Article 1|Yogesh Singla',
    heading :   'Article 1',
    date    :   'February 11,2017',
    content :   `
        <div>
            <p>
                This is the first artilce. Content comes here. Adding more content to check viewability in mobile and laptops. This content will be changed later. Default content comes here. Content1. That's it.
            </p>
        </div>
       
    `
        
    },
     'article2':{

    title   :   'Article 2|Yogesh Singla',
    heading :   'Article 2',
    date    :   'February 11,2017',
    content :   `
        <div>
            <p>
                This is the SECOND artilce. Content comes here. Adding more content to check viewability in mobile and laptops. This content will be changed later. Default content comes here. Content1. That's it.
            </p>
        </div>
       
    `
        
    }
};


function createTemplate(data){
    title   =   data.title;
    date    =   data.date;
    heading =   data.heading;
    content =   data.content;
var  htmlTemplate =   `
<html>
    <head>
        <title>
           ${title}
        </title>
        <meta name="viewport"   content="width=device-width,   initial-scale=1"/>
        <link href="/ui/style.css"   rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        
        <div>
        <a href="/">Home</a>    
        </div>
        
        <hr/>
        
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        
        <div>
            ${content}  
        </div>
        
        </div>
    </body>
</html>
`;

return htmlTemplate;
}
app.get('/article-three',function(req,res) {
    res.send('Article 3 requested and will be served here');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/article-one',function(req,res) {
    res.send('Article one requested and will be served here');
});


app.get('/:articleName', function (req, res) {
  articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
//app.get('/ui/article2.html', function (req, res) {
 // res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
//});
app.get('/ui/article3.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
});

//app.get('/article-two',function(req,res) {
//    res.send('Article 2 requested and will be served here');
//});


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
