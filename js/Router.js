const routes = {
    404:"public/404.html",
    "/about":"public/about.html",
    "/contact":"public/contact.html",
    "/":"index.html"
}




const route = (event)=>{
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({},"",event.target.href);
}

//transfer all the links in the page to spa links
let links = document.getElementsByTagName("a");
for(let i=0;i<links.length;i++){
    links[i].addEventListener("click",(event)=>{
        route(event)
    })
}

const handleLocation = async()=>{
    const path = (window.location.pathname);
    const route = routes[path] || routes[404];
    const html = await fetch(route).then(data => data.text());
    document.getElementById("root").innerHTML = html;
}
handleLocation();
window.route = route;
