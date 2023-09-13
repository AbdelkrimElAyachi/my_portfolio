import Router from "./js/libraries/Router.js";
import { changeBG,CraeteLimoniCube,CraeteBlueCube,CraeteYellowCube,CraeteGreenCube } from "./js/libraries/BackgroundFunctions.js";




Router.start();

Router.get("/","public/start.html",()=>{

}) 
Router.get(404,"public/404.html",()=>{


})










Router.CreateSPALinks() ;
Router.handleLocation();