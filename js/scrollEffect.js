
const intro = document.querySelector("main .intro");
html_section = document.querySelector("main .section_html");
css_section = document.querySelector("main .section_css");
bootstrap_section = document.querySelector("main .section_bootstrap");
javascript_section = document.querySelector("main .section_javascript");
php_section = document.querySelector("main .section_php");
sql_section = document.querySelector("main .section_sql");
let scrollTimeout;

document.addEventListener("scroll", () => {

  // set a new timeout to log the scroll position after 100ms
   scrollTimeout = setTimeout(() => {
    let scroll_value = (window.pageYOffset);

    intro_opacity(scroll_value);

    html_opacity(scroll_value);

    css_opacity(scroll_value);

    bootstrap_opacity(scroll_value);

    javascript_opacity(scroll_value);

    php_opacity(scroll_value);

    sql_opacity(scroll_value);


  }, 100);
});


function intro_opacity(scroll){
  if (scroll >= 300) {
    intro.style.opacity = "1";
  }
  else{
    intro.style.opacity = "0";
  }
}
function html_opacity(scroll){
  if (scroll >= 600) {
    html_section.style.opacity = "1";
  }
  else{
    html_section.style.opacity = "0";
  }
}
function css_opacity(scroll){
  if (scroll >= 1000) {
    css_section.style.opacity = "1";
  }
  else{
    css_section.style.opacity = "0";
  }
}
function bootstrap_opacity(scroll){
  if (scroll >= 1600) {
    bootstrap_section.style.opacity = "1";
  }
  else{
    bootstrap_section.style.opacity = "0";
  }
}

function javascript_opacity(scroll){
  if(scroll>=2200){
    javascript_section.style.opacity = "1";
  }
  else{
    javascript_section.style.opacity = "0";
  }
}
function php_opacity(scroll){
  if(scroll>=2800){
    php_section.style.opacity = "1";
  }
  else{
    php_section.style.opacity = "0";
  }
}

function sql_opacity(scroll){
  if(scroll>=3400){
    sql_section.style.opacity = "1";
  }
  else{
    sql_section.style.opacity = "0";
  }
}