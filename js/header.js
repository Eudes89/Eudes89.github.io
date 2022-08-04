
//MENU HAMBURGUER
const hamburguer = document.querySelector(".iconHambuger");
const menuList = document.querySelector(".menuHamburguer");
const closeMenu = document.querySelector(".closeNavegacao");
const closeIcon = document.querySelector(".closeIcon");

hamburguer.addEventListener("click", function(){
    menuList.hidden = false;
    hamburguer.hidden = true;
    closeIcon.hidden = false;
})

closeIcon.addEventListener("click", function(){
    menuList.hidden = true;
    hamburguer.hidden = false;
    closeIcon.hidden = true;
})


//ICONE WHATSAPP
const whatsAppIcon = document.querySelector(".iconWhatsApp__img");
const celWhatsApp = document.querySelector(".iconWhatsApp__numero");
