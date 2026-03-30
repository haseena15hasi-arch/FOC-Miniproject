let a=document.getElementById("heading")
a.innerHTML="Cat";
a.classList.add("change");
a.addEventListener("mouseover",function(){
    a.innerHTML="Event:Zairu";
});
a.addEventListener("mouedown",function(){
    a.innerHTML="Event:Cat"
});
