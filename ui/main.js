console.log('Loaded!');
var imgs = document.getElementsByClassName('img-medium');
var imgsBtn = document.getElementById('imgsBtn');
var imgCount = document.getElementById('imgCount');
var imgShown = 4;
imgCount.innerHTML = "Images Visible: " + imgShown + "//4";

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
