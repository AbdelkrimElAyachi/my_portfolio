import Cube from "./classes/Cube.js";
const bg_element = document.getElementById("bg"); 


let xPosition = 0;
let yPosition = 0;
export const cubes = [];


for (let j=0;j<10;j++){
    for(let i=0;i<19;i++){
        cubes.push(new Cube(bg_element,xPosition,yPosition));
        yPosition += 100;
    }
    yPosition = 0;
    xPosition += 100;
}


