console.log('Loaded!');


//move the img
var img = document.getElementById('madi');
function moveRight() {
marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 100)
};