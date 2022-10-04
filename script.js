const btnOpenSideNav = document.querySelector("#side-nav-opener");
const navbar = document.querySelector("#side-nav");
const btnCloseSideNav = document.querySelector("#btnCloseSideNav");

btnOpenSideNav.addEventListener('click', () => {
   navbar.style.left = "0px";
});

btnCloseSideNav.addEventListener('click', () => {
    navbar.style.left = "-300px";
 });