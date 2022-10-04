const btnOpenSideNav = document.querySelector("#side-nav-opener");
const navbar = document.querySelector("#side-nav");

btnOpenSideNav.addEventListener('click', () => {
   navbar.style.left = "0px";
})