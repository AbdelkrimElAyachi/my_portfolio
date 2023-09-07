
export default class Cube{
    constructor(parent,x_position,y_position,word=""){

        this.isrotated = false;
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
            
            this.cube.style.top = `${x_position}px`;
        this.cube.style.left = `${y_position}px`;
        

        this.render();
    }
    rotateToRed(){
        if(this.isrotated){
            this.cube.style.transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
            this.isrotated = false;
        }else{
            this.cube.style.transform = "rotateX(90deg) rotateY(0deg) rotateZ(0deg)";
            this.isrotated = true;
        }
    }
    rotateToYellow(){
        if(this.isrotated){
            this.cube.style.transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
            this.isrotated = false;
        }else{
            this.cube.style.transform = "rotateX(0deg) rotateY(270deg) rotateZ(0deg)";
            this.isrotated = true;
        }
    }
    rotateToGreen(){
        if(this.isrotated){
            this.cube.style.transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
            this.isrotated = false;
        }else{
            this.cube.style.transform = "rotateX(180deg) rotateY(0deg) rotateZ(0deg)";
            this.isrotated = true;
        }
    }
    render(){
        this.parent.appendChild(this.cube);
    }
}