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


const searchContainer = document.querySelector("[data-search-container]")
const searchBtn = document.querySelector("[data-search-btn]")
const searchSubmission = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

var incDec = document.getElementsByClassName("inc-dec");
console.log(incDec)
let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");

console.log(addBtn ," + ", subBtn )


const searchBoxElem = [searchContainer,searchBtn,searchSubmission,searchCloseBtn];

for (let i = 0; i < searchBoxElem.length; i++) {
  searchBoxElem[i].addEventListener("click",function(){
    console.log(searchBoxElem[i]);
    searchContainer.classList.toggle("active");
   
    document.body.classList.toggle("active");
  });
  
}
var count = 0;


const deliveryBoyImage = document.querySelector("[delivery-boy-cycle]");
let deliveryBoyMove = 0;
let lastScrollPos = 0;
window.addEventListener("scroll", function(){
  let deliveryBoyTopPos = deliveryBoyImage.getBoundingClientRect().top;
  if(deliveryBoyTopPos<500 && deliveryBoyTopPos>-250){
    let activeScrollPos = window.scrollY;
    if(lastScrollPos<activeScrollPos){
      deliveryBoyMove +=2;
    }else{
      deliveryBoyMove -=2;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoyImage.style.transform = `translateX(${deliveryBoyMove}px)`;
  }
})