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

var btn31 = document.getElementsByClassName("photo");

var span3 = document.getElementById("no");

btn31[0].onclick=function(){
    container3.style.display = "block";
}
btn31[1].onclick=function(){
    container3.style.display = "block";
}
btn31[2].onclick=function(){
    container3.style.display = "block";
}
btn31[3].onclick=function(){
    container3.style.display = "block";
}
btn31[4].onclick=function(){
    container3.style.display = "block";
}

span3.onclick = function(){
    container3.style.display = "none";
}

var btn32 = document.getElementsByClassName("button");
btn32[0].onclick=function(){
    window.location.href = 'post.html';
}

btn32[1].onclick=function(){
    window.location.href = 'post.html';
}

btn32[2].onclick=function(){
    window.location.href = 'post.html';
}

btn32[3].onclick=function(){
    window.location.href = 'post.html';
}
btn32[4].onclick=function(){
    window.location.href = 'post.html';
}
// var container4 = document.getElementById("container4");

function navigateToPost_Detail(){
    window.location.href = "../html/post.html";
}