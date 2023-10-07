export default function GETRequest(url){
    return fetch(url,{
        method: "GET",
        headers:{
            'Content-Type': '*/*',
        }
    })
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else{
            throw new Error("failed request ");
        }
    })

}