// function of each page

export default class Router{

    static start(){
        this.routes = {
            // "/":{"file_path":"index.html","callback":null}
        }

    }

    static CreateSPALinks(){
        let links = document.getElementsByTagName("a");
        for(let i=0;i<links.length;i++){
            links[i].addEventListener("click",(event)=>{
                this.route(event)
            })
        }

    }

    static route(event){
        event = event || window.event;
        event.preventDefault();
        window.history.pushState({},"",event.target.href);
    }
    
    static handleLocation = async()=>{
        const path = (window.location.pathname);

        const route = this.routes[path] || this.routes[404];
        const html = await fetch(route.file_path).then(data => data.text());
    
        document.getElementById("root").innerHTML = html;
    
        route.callback();

    }

    static get(url,file_path,callback){
        this.routes[url] = {"file_path":file_path,"callback":callback};
    }
}




