
var butt = document.getElementById('counter');

butt.onclick = function () {
    
    var request= new XMLHttprequest();
    request.onreadystatechange = function(){
        if(request.readyState==XMLHttpRequest.DONE)
        {
            if(request.status==200){
              var counter =  request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
            }
        }
        
        
    };
    
    request.open('GET','http://bhargav-vasist.imad.hasura-app.io/counter',true);
    request.send(null);
};