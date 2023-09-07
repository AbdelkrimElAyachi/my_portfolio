import Cube from "./cube.js";
let x_position = 0;
let y_position = 0;
export let cubes = [];
let bg_element = document.getElementById("bg"); 


for (let j=0;j<10;j++){
    for(let i=0;i<19;i++){
        cubes.push(new Cube(bg_element,x_position,y_position));
        y_position += 100;
    }
    y_position = 0;
    x_position += 100;
}

const stalker = document.getElementById("stalker")

document.addEventListener("mousemove",function(event){
    stalker.animate(
        {
            top:(event.clientY-150)+"px",
            left:(event.clientX-100)+"px",
        }
    ,{duration:1000,fill:"forwards"})

})