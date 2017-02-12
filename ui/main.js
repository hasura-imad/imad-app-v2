console.log('Loaded!');
var imgs = document.getElementsByClassName('img-medium');

for(var i = 0; i < imgs.length; i++){
    imgs[i].onclick = function(){
        imgs[i].style.display = 'none';
    };
}