console.log('Loaded!');
var imgs = document.getElementsByClassName('img-medium');

imgs.onclick = function(){
    for(var i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none';
    }
};