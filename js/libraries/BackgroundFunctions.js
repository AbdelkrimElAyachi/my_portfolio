import {cubes} from "../GenerateBackground.js";


// function to control the background  

export function changeBG(i=0,color="L"){
    if(color==="L"){
        cubes[i].rotateToLimoni();
    }
    else if(color==="R"){
        cubes[i].rotateToRed();
    } 
    else if(color==="B"){
        cubes[i].rotateToBlue();
    }
    else if(color==="Y"){
        cubes[i].rotateToYellow();
    }
    console.log(i,cubes.length);
    if(i<cubes.length-1){
        setTimeout(() => {
            changeBG(++i);
        }, 5);
    }
}

export function CraeteLimoniCube(x,y,width=3,height=3){
    const max_x = 19;
    const max_y  = 10;

    if(width>max_x){
        alert("you set a width bigger than the screen")
        width = max_x;
    }
    if(height>max_y){
        alert("you set a height bigger than the screen")
        height = max_y;
    }

    
    for(let i=y;i<(height+y);i++){
        console.log(i);
        for(let j=x;j<(width+x);j++){
            cubes[j+i*max_x].rotateToBlue();

        }
    }
}