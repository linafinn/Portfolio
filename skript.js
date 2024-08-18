console.log("hej")

// dom hämter dom här klassernan som har de här namanen. 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
// den lyssna på när någon klickar, på hamburgaren. och då körs funktionen.
hamburger.addEventListener("click", mobileMenu);
// här kommer funktionen, alltså att här togglas de alltså som en strömbrytare, när det trycks på ska den synsas eller döljas.
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// hämtar tagarna
const navLink = document.querySelectorAll(".nav-link");
// när jag kickar på den öppn menyn kommer den att stängas 
navLink.forEach(n => n.addEventListener("click", closeMenu));
// alltså att det kommer försvinas tars bort. 
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}




