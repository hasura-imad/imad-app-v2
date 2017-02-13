//Name list input
var nameInput = document.getElementById("nameInput");
var nameBtn = document.getElementById("nameBtn");
var nameList = document.getElementById("nameList");

function initPage(){
	nameInput.focus();
};

function indent() {document.execCommand("indent");}

function outdent() {document.execCommand("outdent");}

var addName = function(){
	var name = nameInput.value;
	nameList.innerHTML += '<li>' + name + '</li>';
	nameInput.value = "";
	nameList.scrollIntoView(true);
};

nameBtn.onclick = function(){
	addName();
};

nameInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        addName();
	}
	if(e.which==9){
        e.preventDefault();
        if(e.shiftKey==true){
            outdent();
        }
        else{
            indent();
        }
    }
});

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