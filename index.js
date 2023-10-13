import Router from "./js/libraries/Router.js";
import { changeBG,CraeteLimoniCube,CraeteBlueCube,CraeteBlackCube,CraeteYellowCube,CraeteGreenCube } from "./js/libraries/BackgroundFunctions.js";
import GETRequest from "./js/libraries/request.js";
import Typing from "./js/classes/Typing.js";


Router.start();

Router.get("/","public/start.html",()=>{

    let word = document.querySelector(".work");

    changeBG(0,"B")
    setTimeout(() => {
        changeBG(0,"b");
    }, 1000);

    GETRequest("./api/getRepositories.php")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })


    let mytype = new Typing(["full stack developer","web developer","UI/UX designer"],200,word);

    let links = document.getElementById("links")
    let menu_btn = document.getElementById("btn_menu");
    let container = document.querySelector(".container");
    menu_btn.onclick =()=>{
        links.classList.toggle("appear");
        container.classList.toggle("blur");
        menu_btn.classList.toggle("btn_menu_animation");
    }
}) 


Router.get(404,"public/404.html",()=>{

    changeBG(0,"L")
})




Router.handleLocation();    
Router.CreateSPALinks() ;



