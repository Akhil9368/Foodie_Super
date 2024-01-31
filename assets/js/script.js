const navbar = document.querySelector("[data-navbar]")
const navbarLinks = document.querySelectorAll("[data-nav-links]");
const menuToggleItem = document.querySelector("[data-nav-toggle-btn]");



menuToggleItem.addEventListener("click",function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click",function(){
        navbar.classList.toggle('active');
        menuToggleItem.classList.toggle("active");
    })
    
}


const header = document.querySelector("[data-header]");
window.addEventListener("scroll",function(){
  if(this.window.scrollY>=100){
    header.classList.add("active");
  }
  else{
    header.classList.remove("active");
  }
} )