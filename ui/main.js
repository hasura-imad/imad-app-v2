console.log('Loaded!');
var imgs = document.getElementsByClassName('img-medium');

imgs[0].onclick = function(){
        imgs[1].style.display = 'none';
};

imgs[1].onclick = function(){
        imgs[2].style.display = 'none';
};

imgs[2].onclick = function(){
        imgs[3].style.display = 'none';
};

imgs[3].onclick = function(){
        imgs[0].style.display = 'none';
};