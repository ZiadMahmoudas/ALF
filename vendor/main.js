import  translations  from '../vendor/translate.js';
/* Lang translate */
let btnlang = document.querySelector("#open");
let openPopup= document.querySelector(".popup");
let logo = document.querySelector(".navbar-brand img");
let logo1 = document.querySelector(".pic3 img");
let logo2 = document.querySelector(".pic4 img");
function updateLogoBasedOnMode() {
    let currentMode = localStorage.getItem("mode");
    if (currentMode === "dark") {
        logo.src = "img/secondlogo.svg"; 
        logo1.src = "img/mainlogo.svg";
        logo2.src = "img/mainlogo.svg";
    }
    else {
        logo1.src = "img/secondlogo.svg"; 
        logo2.src = "img/secondlogo.svg"; 
        logo.src = "img/mainlogo.svg"; 
        }
}
btnlang.addEventListener("click",()=>{
 openPopup.classList.toggle("show-popup");
});
let langSelector = document.querySelector(".lang li");
langSelector.addEventListener("change",function(event){
    let selectedLang = this.getAttribute("value");
    setLanguage(selectedLang);
    localStorage.setItem("lang",selectedLang);
    openPopup.classList.remove("show-popup");
})
document.addEventListener("DOMContentLoaded",function(){
        setLanguage(localStorage.getItem("lang") || "en");
}
)
let langSelectorItems = document.querySelectorAll(".lang li");
const mediaQuery = window.matchMedia("(max-width: 768px)");
langSelectorItems.forEach(item => {
   item.addEventListener("click", function() {
      let selectedLang = this.getAttribute("value");
      setLanguage(selectedLang);
      localStorage.setItem("lang", selectedLang);
      openPopup.classList.remove("show-popup");
   });
});
let principle = document.querySelector(".our h3");
let principleParagraph = document.querySelector(".our p");
let arrowchange = document.querySelectorAll(".app a i");
const setLanguage = (lang) => {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach((element) => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
       
    });

    if(lang === 'ar') {
        document.dir = 'rtl';
        openPopup.style.left = "-80%";
        principle.style.textAlign  = "right";
        principleParagraph.style.textAlign  = "right";
        arrowchange.forEach((item) => {
            item.classList.remove("bi-arrow-right");
            item.classList.add("bi-arrow-left");
        });
        handleMediaQuery(mediaQuery);
    }
    else{
        document.dir = 'ltr';
        openPopup.style.left = "80%"
        principle.style.textAlign  = "left";
        principleParagraph.style.textAlign  = "left";
        arrowchange.forEach((item) => {
            item.classList.remove("bi-arrow-left");
            item.classList.add("bi-arrow-right");
        });
        handleMediaQuery(mediaQuery);
    }
}
function handleMediaQuery(e) {
    if (e.matches) {
     openPopup.style.left = "-0%";
     openPopup.style.top = "27%";
    } 
  }

  mediaQuery.addEventListener("change", handleMediaQuery);
let awesome = document.querySelector(".fa-dark")
let btn = document.querySelector("#change-mode")
 /* dark Mode */
 window.addEventListener("load",function(){
 var saveMode = localStorage.getItem("mode")
 if(saveMode === "dark"){
 awesome.classList.remove("bi-sun-fill")
 awesome.classList.add("fa-moon")
 awesome.style.cssText = "color:#fff"
 document.body.classList.remove("light-mode")
 document.body.classList.add("dark-mode");
 }
 else{
        /* light Mode */
 document.body.classList.add("light-mode");  
 document.body.classList.remove("dark-mode");
 awesome.classList.add("bi-sun-fill")
 awesome.classList.remove("fa-moon")
 awesome.style.cssText = "color:#000"
 }
 updateLogoBasedOnMode();
 })
 btn.addEventListener("click",function(){
    if(document.body.classList.contains("light-mode")){
            /*save dark Mode */
            savelocalStorage("dark")
    awesome.classList.remove("bi-sun-fill")
    awesome.classList.add("fa-moon")
    awesome.style.cssText = "color:#fff"
    document.body.classList.remove("light-mode")
    document.body.classList.add("dark-mode");
    }
    else{
               /*save light Mode */
               savelocalStorage("light")
        document.body.classList.add("light-mode");  
        document.body.classList.remove("dark-mode");
        awesome.classList.add("bi-sun-fill")
        awesome.classList.remove("fa-moon")
        awesome.style.cssText = "color:#000"
    }
    updateLogoBasedOnMode();
    });
    function savelocalStorage(mode){
        localStorage.setItem("mode",mode);
    }
    /* popup To Close And Open */

   let myBtnIcon = document.querySelector(".navbar-toggler i");
   
   myBtnIcon.addEventListener("click",()=>{
       myBtnIcon.classList.toggle("open")
    const isOpen = myBtnIcon.classList.contains("open");
    if (isOpen) {
         myBtnIcon.classList.replace("fa-bars", "bi-x");
       } else {
         myBtnIcon.classList.replace("bi-x", "fa-bars");
       }
   })