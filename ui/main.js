var counter=0;
var butt = document.getElementById('counter');

butt.onclick = function () {
    
    
    
    counter=counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};