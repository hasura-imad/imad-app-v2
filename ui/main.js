//Counter endpoint code is connected to the button click event, using XMLHttpRequest
var counterBtn = document.getElementById('counter');

counterBtn.onclick = function(){
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                
                //Render the variable in the correct span
                var countSpan = document.getElementById('count');
                countSpan.innerHTML = counter.toString();
            }
        }
    };
    
    
    //Make the request to /counter endpoint
    request.open('GET', 'http://selfdirectedlearner.imad.hasura-app.io/counter', true);
    request.send(null);
};


//client side javascript code for index.html
console.log('Loaded!');
var imgs = document.getElementsByClassName('img-medium');
var imgsBtn = document.getElementById('imgsBtn');
var imgCount = document.getElementById('imgCount');
var imgShown = 4;
imgCount.innerHTML = "Images Visible: " + imgShown + "/4";

imgs[0].onclick = function(){
        imgs[0].style.display = 'none';
        imgsBtn.style.display = "inline";
        
        imgShown--;
        imgCount.innerHTML = "Images Visible: " + imgShown + "/4";
};

imgs[1].onclick = function(){
        imgs[1].style.display = 'none';
        imgsBtn.style.display = "inline";
        
        imgShown--;
        imgCount.innerHTML = "Images Visible: " + imgShown + "/4";
};

imgs[2].onclick = function(){
        imgs[2].style.display = 'none';
        imgsBtn.style.display = "inline";
        
        imgShown--;
        imgCount.innerHTML = "Images Visible: " + imgShown + "/4";
};

imgs[3].onclick = function(){
        imgs[3].style.display = 'none';
        imgsBtn.style.display = "inline";
        
        imgShown--;
        imgCount.innerHTML = "Images Visible: " + imgShown + "/4";
};

function show(){
    for(var i = 0; i < imgs.length; i++){
        imgs[i].style.display = "inline";
    }
    imgsBtn.style.display = "none";
    
    imgShown = 4;
    imgCount.innerHTML = "Images Visible: " + imgShown + "/4";
}
