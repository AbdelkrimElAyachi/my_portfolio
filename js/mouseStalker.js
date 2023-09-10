const stalker = document.getElementById("stalker")

document.addEventListener("mousemove",function(event){
    stalker.animate(
        {
            top:(event.clientY-150)+"px",
            left:(event.clientX-100)+"px",
        }
    ,{duration:1000,fill:"forwards"})

})