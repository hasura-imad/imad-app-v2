console.log('Loaded!');
var imgs = document.getElementsByClassName('img-medium');
var imgsBtn = document.getElementById('imgsBtn');
var imgCount = document.getElementById('imgCount');
document.onload.imgCount.innerHTML = "4";

imgs[0].onclick = function(){
        imgs[0].style.display = 'none';
        imgsBtn.style.display = "inline";
};

imgs[1].onclick = function(){
        imgs[1].style.display = 'none';
        imgsBtn.style.display = "inline";
};

imgs[2].onclick = function(){
        imgs[2].style.display = 'none';
        imgsBtn.style.display = "inline";
};

imgs[3].onclick = function(){
        imgs[3].style.display = 'none';
        imgsBtn.style.display = "inline";
};

function show(){
    for(var i = 0; i < imgs.length; i++){
        imgs[i].style.display = "inline";
    }
    imgsBtn.style.display = "none";
}
