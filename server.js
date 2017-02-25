var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var objs = {
    'article1.html': {
    title: "This is Article Number one",
    heading: "Hello, Welcome to Article Number One",
    body: `This article deals with the sad state of MMORPGs in 2017 and how we can make MMORPGs great again!
            Why does the game genre that once ruled the entire video game industry, now lie in a trashcan with other dead genres like Spy Thrillers and Side Scrollers?
            What happened man...`,
    linkstuff: `<a href='/'>Home</a>
            <a href='/post1.html'>Post</a>
            <a href='/file1.html'>File</a>`
},
   'post1.html': {
       title: "Post One | What happened la",
    heading: "Hello, Welcome to Article Number One",
    body: `This article deals with the sad state of MMORPGs in 2017 and how we can make MMORPGs great again!
            Why does the game genre that once ruled the entire video game industry, now lie in a trashcan with other dead genres like Spy Thrillers and Side Scrollers?
            What happened man...`,
    linkstuff: `<a href='/'>Home</a>
           <a href='/article1.html'>Article</a>
           <a href='/file1.html'>File</a>`
       
   },
   'file1.html': {
       title: "File One | MMORPG History",
    heading: "This file contains a brief note of the important MMORPGs that have helped shape the history of video gaming industry forever.",
    body: `<ol>
             <li>World of Warcraft</li>   
               <li>Runescape</li> 
               <li> Maplestory</li>
                </ol>`,
    linkstuff: `<a href='/'>Home</a>
            <a href='/article1.html'>Article</a>
            <a href='/post1.html'>Post</a>`
       
   }

};

function createTemplate(data){

var title= data.title;
var heading= data.heading;
var body= data.body;
var linkstuff= data.linkstuff;
    
var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
            <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="cont">
        <div>
            ${linkstuff}
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <hr/>
        <p>
            ${body}
        </p>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}
    var counter=0;
app.get('/counter',function (req, res){
    counter=counter+1;
    res.send(counter.toString());
}
);
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/button.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'button.png'));
});

app.get('/:post', function (req, res) {
    var post = req.params.post;
  res.send(createTemplate(objs[post]));
});

/*app.get('/file1.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'content', 'file1.html'));
});

app.get('/post1.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'content', 'post1.html'));
});

*/

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
