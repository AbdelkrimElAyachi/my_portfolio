import Router from "./libraries/Router.js";




Router.start();

Router.get("/","public/start.html",()=>{
    console.log("we made it");
}) 











Router.CreateSPALinks() ;
Router.handleLocation();