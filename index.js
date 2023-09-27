import Router from "./js/libraries/Router.js";
import { changeBG,CraeteLimoniCube,CraeteBlueCube,CraeteBlackCube,CraeteYellowCube,CraeteGreenCube } from "./js/libraries/BackgroundFunctions.js";


Router.start();

Router.get("/","public/start.html",()=>{
    changeBG()
    setTimeout(() => {
        changeBG(0,"b");
    }, 1000);

  

}) 
Router.get(404,"public/404.html",()=>{


})




Router.handleLocation();    
Router.CreateSPALinks() ;