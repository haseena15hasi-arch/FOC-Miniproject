let a=document.getElementById("java")
a.innerHTML="welcome to cse";
a.classList.add("change");
setTimeout(function() {
    a.innerHTML="rrrrr";
}, 4000);

a.addEventListener("mouseover",function(){
    a.innerHTML="Event:Mouseover";
});
a.addEventListener("mouedown",function(){
    a.innerHTML="event:mouse down"
});