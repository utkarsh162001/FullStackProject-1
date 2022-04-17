var container1 = document.getElementById("container-1");

var btn = document.getElementById("sign-in");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function()
{
    container1.style.display = "block";
}
span.onclick = function(){
    container1.style.display = "none";
} 
window.onclick = function(event){
    if(event.target == container1){
         container1.style.display = "none";
    }
}

var container2 = document.getElementById("container-2");

var btn1 = document.getElementById("sign-up");

var span1 = document.getElementsByClassName("close1")[0];

btn1.onclick = function(){
    container2.style.display = "block";
}

span1.onclick = function(){
    container2.style.display = "none";
}

window.onclick = function(event){
    if(event.target == container2){
        container2.style.display = "none";
    }
}

var sp = document.getElementById("code");
sp.onclick = function()
{
    container1.style.display = "none";
    container2.style.display = "block";
}

var container3 = document.getElementById("container-3");

var btn2 = document.getElementById("createp");


var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function(){
    container3.style.display = "block";
}

span2.onclick = function(){
    container3.style.display = "none";
}