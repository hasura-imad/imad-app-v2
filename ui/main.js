
var button=document.getElementById('counter');
var counter=0;

button.onclick=function() {
    var request=new XMLHttpRequest();
    request.onreadytstatechange=function() {
        if(request.readyState==XMLHttpRequest.Done) {
            if(request.status==2000) {
                var counter=request.responseText;
                 var span=document.getElementById('count');  
                span.innerHTML=counter.toString();
            }
        }

   
 
};
request.open('GET',"http://jinesh220.imad.hasura-app.io/counter",true);
request.send(null);

};
