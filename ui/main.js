console.log('Loaded!');

//Change the text of the main-text element
var element = document.getElementById('main-text');
element.innerHTML= "New Value";

//Change the text of the main-text element
var element = document.getElementById('main-text');
element.innerHTML= "New Value";

//Move the image
var img=document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft=marginLeft + 3;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function() {
  var interval = setInterval(moveRight, '50px'); 
};