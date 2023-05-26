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
    
    paras[0].innerHTML = "J'ai une base solide en HTML et je suis compétent dans la création et la structuration de pages web en utilisant HTML5. J'ai de l'expérience dans la création de balisage HTML sémantique, qui est essentiel pour améliorer l'accessibilité du site web, l'optimisation pour les moteurs de recherche et la maintenabilité. <br><br>Je suis compétent dans l'utilisation des balises et des attributs HTML pour créer des en-têtes, des paragraphes, des listes, des tableaux, des formulaires et des éléments multimédias tels que des images et des vidéos correctement formatés. Je comprends l'importance d'écrire un code HTML propre et lisible qui est facile à comprendre et à maintenir.";
    paras[1].innerHTML = "J'ai une base solide en CSS et je suis compétent dans la création de designs web attrayants et réactifs en utilisant CSS3. J'ai une expertise dans l'utilisation de CSS pour styliser et disposer des éléments HTML, la création de classes et d'identifiants CSS personnalisés, et l'utilisation de techniques de conception réactive pour assurer que les pages web s'affichent correctement sur une variété de dispositifs.<br><br>Je suis compétent dans l'utilisation de CSS pour créer des designs attrayants visuellement, tels que l'utilisation de dégradés, d'ombres et d'autres effets pour améliorer l'apparence visuelle d'une page web. Je suis également compétent dans la création de mises en page complexes en utilisant CSS Grid ou Flexbox, ce qui me permet de créer des designs web dynamiques et réactifs qui s'adaptent à la taille de l'écran de l'utilisateur.";
    paras[2].innerHTML = "J'ai une vaste expérience de l'utilisation de Bootstrap pour créer des designs web réactifs et attrayants visuellement. J'ai une bonne compréhension du système de grille de Bootstrap et des différents composants qu'il offre, tels que les barres de navigation, les formulaires et les modales. <br><br>Je suis compétent dans l'utilisation des classes CSS pré-construites de Bootstrap et dans la personnalisation de celles-ci pour atteindre le design et la fonctionnalité souhaités. Je peux également créer des thèmes personnalisés Bootstrap en utilisant Sass ou Less, ce qui me permet de créer des designs uniques et personnalisés qui correspondent à la marque et au style du client.";
    paras[3].innerHTML = "J'ai une base solide en JavaScript et je suis compétent dans la création d'applications web dynamiques et interactives en utilisant du JavaScript natif. Je suis compétent dans la manipulation du Document Object Model (DOM) d'une page web en utilisant JavaScript, la création de programmation orientée événements, et l'utilisation d'AJAX pour interagir avec des API externes.<br><br>Je suis compétent dans l'utilisation des fonctionnalités modernes de JavaScript telles que la syntaxe ES6, les fonctions fléchées et les littéraux de template pour écrire un code propre, concis et maintenable. J'ai également de l'expérience dans l'utilisation de bibliothèques JavaScript telles que jQuery, Lodash ou Moment.js pour simplifier les tâches complexes et accélérer le développement, si nécessaire.";
    paras[4].innerHTML = "J'ai une base solide en PHP et je suis compétent dans la création d'applications web dynamiques et interactives en utilisant du PHP, sans dépendre d'aucun framework.Je suis compétent dans l'utilisation de PHP pour interagir avec des bases de données, gérer les entrées utilisateur et créer des pages web dynamiques en utilisant les fonctionnalités de templating de PHP.<br><br> Je suis compétent dans l'utilisation des fonctionnalités modernes de PHP telles que les espaces de noms, les fermetures, et les fonctions anonymes pour écrire un code propre, concis et maintenable. J'ai également de l'expérience dans l'utilisation de bibliothèques PHP telles que Swift Mailer ou PHPMailer pour envoyer des emails, ou PHPExcel pour manipuler des fichiers Excel.";
    paras[5].innerHTML = "J'ai une solide base en MySQL et je suis compétent dans la création et la gestion de bases de données relationnelles en utilisant cette technologie. MySQL est un système de gestion de bases de données largement utilisé connu pour sa rapidité, sa fiabilité et sa scalabilité.<br>Je suis compétent dans la conception et la création de schémas de base de données, de tables et d'index en utilisant MySQL. Je suis également expérimenté dans l'utilisation de SQL, le langage utilisé pour interagir avec MySQL, pour effectuer diverses opérations telles que récupérer des données, insérer de nouvelles données, mettre à jour des données existantes et supprimer des données.En plus de la conception et de la gestion de bases de données, je suis familiarisé avec l'utilisation de MySQL avec des langages de programmation populaires tels que PHP et Python . Je peux créer des applications web et des API basées sur desbases de données, gérer les connexions à la base de données et utiliser des middlewares pour améliorer la fonctionnalité des applications web.";
    langues_list.style.display = "none";
}
function changeToEnglish(){
    introduction.innerHTML = "Hi,my name is";
    info.innerHTML = "I am web developement student currently in my first year of OFPPT living in Morocco city Casablanca i'm open to any ides of projects or anything that may give me a experience or improve my skills .";
    abbr.innerHTML = "En";
    document.querySelector("main .important").textContent = "Skills";

    paras[0].innerHTML = "I have a strong foundation in HTML and am skilled in creating and structuring web pages using HTML5. I have experience in creating semantic HTML markup, which is essential for improving website accessibility, search engine optimization, and maintainability.<br><br>I am proficient in using HTML tags and attributes to create properly formatted headings, paragraphs, lists, tables, forms, and multimedia elements such as images and videos. I understand the importance of writing clean and readable HTML code that is easy to understand and maintain.     ";
    paras[1].innerHTML = "I have a strong foundation in CSS and am skilled in creating visually appealing and responsive web designs using CSS3. I have expertise in using CSS to style and layout HTML elements, creating custom CSS classes and IDs, and using responsive design techniques to ensure web pages display correctly on a variety of devices.<br><br> I am proficient in using CSS to create visually engaging designs, such as using gradients, shadows, and other effects to enhance the visual appeal of a webpage. I am also skilled in creating complex layouts using CSS Grid or Flexbox, which allows me to create dynamic and responsive web designs that adapt to the size of the user's screen.";
    paras[2].innerHTML = "I have experience in using Bootstrap to create responsive and visually appealing web designs. I have a strong understanding of Bootstrap's grid system and the various components it offers, such as navigation bars, forms, and modals.<br><br>I am skilled in using Bootstrap's pre-built CSS classes and customizing them as needed to achieve the desired design and functionality. I can also create custom Bootstrap themes using Sass or Less, allowing me to create unique and personalized designs that match the client's brand and style.";
    paras[3].innerHTML = "I have a strong foundation in JavaScript and am skilled in creating dynamic and interactive web applications using vanilla JavaScript. I am proficient in using JavaScript to manipulate the Document Object Model (DOM) of a webpage, creating event-driven programming, and using AJAX to interact with external<br><br>I am skilled in using modern JavaScript features such as ES6 syntax, arrow functions, and template literals to write clean, concise, and maintainable code. I am also experienced in using JavaScript libraries such as jQuery, Lodash, or Moment.js to simplify complex tasks and speed up development, if needed.";
    paras[4].innerHTML = "I have a strong foundation in PHP and am skilled in creating dynamic and interactive web applications using pure PHP, without relying on any frameworks. I am proficient in using PHP to interact with databases, handle user input, and create dynamic web pages using PHP's templating features.<br><br>I am skilled in using modern PHP features such as namespaces, closures, and anonymous functions to write clean, concise, and maintainable code. I am also experienced in using PHP libraries such as Swift Mailer or PHPMailer to send emails, or PHPExcel to manipulate Excel files.";
    paras[5].innerHTML = "                        I have a strong foundation in MySQL and am skilled in creating and managing relational databases using this technology. MySQL is a widely used database management system that is known for its speed, reliability, and scalability.<br>I am proficient in using MySQL to design and create database schema, tables, and indexes. I am also experienced in using SQL, the language used to interact with MySQL, to perform various operations such as retrieving data, inserting new data, updating existing data, and deleting data.In addition to database design and management, I am familiar with using MySQL with popular programming languages such as PHP and Python. I can create database-driven web applications and APIs, handle database connections, and use middleware to enhance the functionality of web applications.";

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