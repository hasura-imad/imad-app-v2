var counterBtn = document.getElementById('counter');
var counter = 0;
counterBtn.onclick = function(){
    //Make a request to the counter endpoint
    //Capture the response and store it in a variable
    //Render the variable in the correct span
    counter = counter + 1;
    var countSpan = document.getElementById('count');
    countSpan.innerHTML = counter.toString();
};

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
