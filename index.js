import Router from "./js/libraries/Router.js";
import { changeBG,CraeteLimoniCube,CraeteBlueCube,CraeteBlackCube,CraeteYellowCube,CraeteGreenCube } from "./js/libraries/BackgroundFunctions.js";
import GETRequest from "./js/libraries/request.js";

Router.start();

Router.get("/","public/start.html",()=>{
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
    
}) 
Router.get(404,"public/404.html",()=>{


})




Router.handleLocation();    
Router.CreateSPALinks() ;