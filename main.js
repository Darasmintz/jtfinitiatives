
function showSidebar(){
  document.querySelector('.sidebar').style.display = 'flex';
}
function hideSidebar(){
  document.querySelector('.sidebar').style.display = 'none';
}

let slideIndex = 0;
let slides = document.querySelectorAll(".slider img");
let intervalId;

function showSlide(index) {
  slides.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

function startSlider() {
  document.querySelector(".play-button").style.display = "none";
  showSlide(slideIndex);
  intervalId = setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 5000);
}
