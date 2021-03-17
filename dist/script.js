const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  spaceBetween: 10,
  slidesPerView: 2,
  slidesPerView: "auto",
});

let mobileMenu = document.getElementById("mobileMenu");
let menu = document.getElementById("menu");
let hamMenuLine1 = document.getElementById("ham-menu-line-1");
let hamMenuLine2 = document.getElementById("ham-menu-line-2");
let hamMenuLine3 = document.getElementById("ham-menu-line-3");
mobileMenu.addEventListener("click", function () {
  hamMenuLine2.classList.toggle("hidden");
  hamMenuLine3.classList.toggle("w-3/5");
  hamMenuLine3.classList.toggle("mt-1");
  hamMenuLine1.classList.toggle("rotate-45");
  hamMenuLine3.classList.toggle("-rotate-45");
  menu.classList.toggle("-translate-y-full");
});
