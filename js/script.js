const bar = document.querySelector("#bar");
const menu = document.querySelector("#nav_links");

const mobileMenu = () => {
    menu.classList.toggle("active");
}

bar.addEventListener("click", mobileMenu);

const hideMobileMenu = () => {
    const bar = document.querySelector(".active");

    if(window.innerWidth <= 768 && menu){
        menu.classList.remove("active");
    
    }
}

menu.addEventListener("click", hideMobileMenu)