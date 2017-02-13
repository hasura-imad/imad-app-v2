//Counter endpoint code is connected to the button click event, using XMLHttpRequest
var counterBtn = document.getElementById('counter');

counterBtn.onclick = function(){
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                
                //Render the variable in the correct span
                var countSpan = document.getElementById('count');
                countSpan.innerHTML = counter.toString();
            }
        }
    };
    
    
    //Make the request to /counter endpoint
    request.open('GET', '/counter', true);
    request.send(null);
};