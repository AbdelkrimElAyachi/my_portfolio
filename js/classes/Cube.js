
export default class Cube{
    constructor(parent,top,left,word=""){


        this.parent = parent;

        this.cube = document.createElement("div");
        this.cube.className = "cube";
        this.cube.innerHTML =`
            <div class="side back"></div>
            <div class="side right"></div>
            <div class="side left"></div>
            <div class="side front">${word}</div>
            <div class="side bottom"></div>
            <div class="side top"></div>`;
            
            this.cube.style.top = `${top}px`;
        this.cube.style.left = `${left}px`;
        

        this.render();
    }
    rotateToLimoni(){
        this.cube.style.transform = "rotateX(90deg) rotateY(0deg) rotateZ(0deg)";

    }
    rotateToYellow(){
        this.cube.style.transform = "rotateX(0deg) rotateY(-90deg) rotateZ(0deg)";
    }
    rotateToBlue(){
        this.cube.style.transform = "rotateX(0deg) rotateY(90deg) rotateZ(0deg)";
    }
    rotateToGreen(){
        this.cube.style.transform = "rotateX(180deg) rotateY(0deg) rotateZ(0deg)";
    }
    rotateToRed(){
        this.cube.style.transform = "rotateX(-90deg) rotateY(0deg) rotateZ(0deg)";
    }
    render(){
        this.parent.appendChild(this.cube);
    }
}