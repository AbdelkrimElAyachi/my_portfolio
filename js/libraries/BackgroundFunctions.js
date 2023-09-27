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
    else if(color==="G"){
        cubes[i].rotateToGreen();
    }
    else if(color==="b"){
        cubes[i].rotateToBlack();
    }
    if(i<cubes.length-1){
        setTimeout(() => {
            changeBG(++i,color);
        }, 4);
    }
}

export function CraeteLimoniCube(x,y,width=3,height=3){
    const max_x = 20;
    const max_y  = 11;

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
            cubes[j+i*max_x].rotateToLimoni();

        }
    }
}



export function CraeteBlueCube(x,y,width=3,height=3){
    const max_x = 20;
    const max_y  = 11;

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


export function CraeteGreenCube(x,y,width=3,height=3){
    const max_x = 20;
    const max_y  = 11;

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
            cubes[j+i*max_x].rotateToGreen();

        }
    }
}


export function CraeteYellowCube(x,y,width=3,height=3){
    const max_x = 20;
    const max_y  = 11;

    if(width>max_x){
        alert("you set a width bigger than the screen")
        width = max_x;
    }
    if(height>max_y){
        alert("you set a height bigger than the screen")
        height = max_y;
    }

    
    for(let i=y;i<(height+y);i++){
        for(let j=x;j<(width+x);j++){
            console.log(i,j);
            cubes[j+(i*max_x)].rotateToYellow();

        }
    }
}

export function CraeteBlackCube(x,y,width=3,height=3){
    const max_x = 20;
    const max_y  = 11;

    if(width>max_x){
        alert("you set a width bigger than the screen")
        width = max_x;
    }
    if(height>max_y){
        alert("you set a height bigger than the screen")
        height = max_y;
    }

    
    for(let i=y;i<(height+y);i++){
        for(let j=x;j<(width+x);j++){
            console.log(i,j);
            cubes[j+(i*max_x)].rotateToBlack();

        }
    }
}