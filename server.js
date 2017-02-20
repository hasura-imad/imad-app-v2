var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var content = {
        
        title : 'Article one Anu Tony',
        heading : 'Article one',
        date : 'Sep 5,2016',
        content : 
                    `<p> This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..		
                         		
                     </p>		
                     <p>		
                         This is article 2..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..		
                        		
                     </p>		
                     <p>		
                         This is article three .is is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..This is article one..
                         </p>`
                    
    };
    
    function CreateTemplate (data) { 
    var title = data.title;
    var date = data.date;
    var heading =  data.heading;
    var content = data.content;
    var htmltemplate = 
        `<html>		
         <head>		
            <title>		
                ${title}		
            </title>
        <meta name="viewport" content="width=device-width">
        <link href="/ui/style.css" rel="stylesheet" />     
        </head>		
             <body>	
             <div class = "container">
                 <div>		
                    <a href="/">Home</a>		
                 </div>		
                 		
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
     </html>`;
     
    return htmltemplate
    }
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(CreateTemplate(articleOne.html));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
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