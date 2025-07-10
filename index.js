// hamburger menu
const btnHamburger = document.getElementById("btnHamburger");
const dropDown = document.getElementById("dropDown");

btnHamburger.addEventListener("click", () => {
  dropDown.classList.toggle("hidden");
});

// filters

function scrollFilterRight() {
  document
    .querySelector(".div-filters-scrollable")
    .scrollBy({ left: 150, behavior: "smooth" });
}
function scrollFilterLeft() {
//   console.log("works");
  document
    .querySelector(".div-filters-scrollable")
    .scrollBy({ left: -150, behavior: "smooth" });
}

function toggleFilterClass(element) {
  const allFilters = document.querySelectorAll(
    ".div-map-filter-inside, .div-map-filter-inside-selected"
  );
  allFilters.forEach((el) => (el.className = "div-map-filter-inside"));
  element.className = "div-map-filter-inside-selected";
}

// Map Index
const track = document.querySelector('.div-frames-track')
const frames = document.querySelectorAll('.div-frame')
const pagination = document.getElementById('indexAnnotation')

let currentIndex = 0

function updateCarousel() {
    const slideWidth = frames[0].getBoundingClientRect().width
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`
    pagination.textContent = `${currentIndex + 1} of ${frames.length}`
}

function scrollIndexRight(){
if(currentIndex < frames.length -1){
currentIndex++
updateCarousel()}
}

function scrollIndexLeft(){
if(currentIndex > 0){
currentIndex--
updateCarousel()}}

updateCarousel()