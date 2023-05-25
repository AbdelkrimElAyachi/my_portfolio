
function change_theme(){
    document.body.classList.toggle("dark_theme");
    if(document.querySelector(".mode i").className == "bi bi-brightness-low"){
        document.querySelector(".mode i").className = "bi bi-moon";
    }
    else{
        document.querySelector(".mode i").className = "bi bi-brightness-low";
    }
}





let cv = document.querySelector(".cv");
cv.addEventListener("mouseover",appearCV);
cv.addEventListener("mouseout",disappearCV);

function appearCV(){
    cv.style.width = "14rem";
}
function disappearCV(){
    cv.style.width = "4rem";
}


mouse_track = document.querySelector(".tracker");

document.querySelector(".introduction").addEventListener("mouseover",()=>{
    mouse_track.style.height = "100px";
    mouse_track.style.width = "100px";
});
document.querySelector(".introduction").addEventListener("mouseout",()=>{
    mouse_track.style.height = "50px";
    mouse_track.style.width = "50px";
});
document.addEventListener("mousedown",()=>{
    mouse_track.style.height = "100px";
    mouse_track.style.width = "100px";
})
document.addEventListener("mouseup",()=>{
    mouse_track.style.height = "50px";
    mouse_track.style.width = "50px";
})



document.addEventListener("mousemove",(e)=>{

    mouse_track.style.transform = `translate(${e.clientX-30}px,${e.clientY-160}px)`;
})