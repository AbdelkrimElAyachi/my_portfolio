introduction = document.querySelector(".introduction p");
info = document.querySelector("#info");
abbr = document.querySelector(".nav .langue span");
html_paragraph = document.querySelector("main .section_html p");
css_pragraph= document.querySelector("main .section_css p");
bootstrap_pragraph= document.querySelector("main .section_bootstra p");
javascript_pragraph= document.querySelector("main .section_javascript p");
php_pragraph= document.querySelector("main .section_php p");
sql_pragraph= document.querySelector("main .section_sql p");

langues_list = document.querySelector(".langues");

let paras = document.querySelectorAll("main section p");
function changeToFrench(){
    introduction.innerHTML = "Bonjour, je m'appelle";
    info.innerHTML = "Je suis étudiant en développement web en première année à l'OFPPT vivant au Maroc , Casablanca je suis ouvert à toutes idées de projets ou tout ce qui peut me donner une expérience ou améliorer mes compétences";
    abbr.innerHTML = "Fr";
    document.querySelector("main .important").textContent = "Mes Compétences";
    
    paras[0].textContent = "Bien sûr, je connais html, tous ceux qui programment sur le Web devraient le savoir car c'est essentiellement la structure du Web. Je pense que je ne suis pas très compétent, mais je connais les bases et je n'aime pas rencontrer des problèmes que je ne peux pas me contenter de ça";
    paras[1].textContent = "Je sais comment utiliser CSS, je ne peux pas dire que je suis professionnel, mais je ne suis pas non plus débutant, je peux faire du cool et vraiment animations et effets créatifs avec, je préfère utiliser le css natif parce que je pense que cela donne plus de liberté pour la créativité dans mon site Web pour créer de meilleurs effets et faire en sorte que mon site Web se démarque des autres";
    paras[2].textContent = "C'est vrai que je préfère utiliser le CSS natif mais je ne suis pas stupide de ne pas apprendre bootstrap et d'autres frameworks qui vont aider ma productivité au travail je peux dire que je suis débutant en bootstrap car je ne l'utilise pas beaucoup mais je suis sûr que je peux le maîtriser si j'en ai vraiment besoin en moins de deux semaines sans problèmes";
    paras[3].textContent = "Tant de gens détestent javascript mais je ne déteste pas vraiment en fait j'aime ça tiens bon ne me juge pas Javascript natif c'est la base je peux dire que je suis capable de gérer des projets avec javascript je ne suis pas expert mais je' je ne suis pas aussi débutant je suis intermédiaire et je connais aussi jquery";
    paras[4].textContent = "Php est le premier langage à démarrer en tant que langage backend et je peux dire que ce n'était pas mal du tout c'était une bonne expérience j'aime vraiment ça me donne trop";
    paras[5].textContent = "Comme php Mon niveau en sql n'est pas mauvais je peux gérer la plupart des petits projets et même moyen";
    langues_list.style.display = "none";
}
function changeToEnglish(){
    introduction.innerHTML = "Hi,my name is";
    info.innerHTML = "I am web developement student currently in my first year of OFPPT living in Morocco city Casablanca i'm open to any ides of projects or anything that may give me a experience or improve my skills .";
    abbr.innerHTML = "En";
    document.querySelector("main .important").textContent = "Skills";

    paras[0].textContent = "Of course i know html everyone who proramme in web should know it because it's basically the structure of the web i believe that i'm intermidiate not so much skilled in it but i know the basics and i don't like i will face any problems that i can't sole with it";
    paras[1].textContent = "I know how to use css i can't say i'm professionnel at it but i'm also not beginner i can make some cool and really creative animations and effects with it i'm prefer using native css because i feel that it gives more freedom for creativity in my website to create a better effects and make my website stands from the others ";
    paras[2].textContent = "It's true that i prefer using native CSS but i'm not stupid to not learn bootstrap and others frameworks that will help my productivity at work i can say that i'm beginner at bootstrap since i don't use it much but i'm sure that i can master it if i really need to in less than two weeks witout problems";
    paras[3].textContent = "So many people hate javascript but i don't really hate in fact i like it hold on don't judge me Native Javascript it's the basic i can say that i'm capable of handling projects with javascript i'm not expert but i'm not also a beginner i'm intermidiate and i also know jquery";
    paras[4].textContent = "Php is the first language to start as backend language and i can say it was not bad at all it was good experience i really like it feels like it gives me too much";
    paras[5].textContent = "Like php My level in sql is not bad i can handle most small projects and even meduim";

    langues_list.style.display = "none";
}



function change_langue(){
    let dis = document.querySelector(".langues").style.display;

    if(dis === "none" || dis === "" ){

        document.querySelector(".langues").style.display = "block";
    }
    else{
        
        document.querySelector(".langues").style.display = "none";
    }
}