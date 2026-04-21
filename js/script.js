// Slider

const slides = document.querySelectorAll(".slide");
const navItems = document.querySelectorAll(".nav-item");

const titles = [
  "Advanced Surface Coating Technology",
  "Powerful Sand Blasting Services",
  "Reliable Tank Treatment Process",
];

const descs = [
  "High-performance powder coating for superior corrosion resistance and flawless finishes.",
  "estoring surfaces by eliminating corrosion and preparing them for long-lasting coatings.",
  "Deep cleaning and surface preparation using structured immersion techniques for long-lasting results",
];

let index = 0;

function changeSlide(i) {
  slides.forEach((s) => s.classList.remove("active"));
  navItems.forEach((n) => n.classList.remove("active"));

  slides[i].classList.add("active");
  navItems[i].classList.add("active");

  document.getElementById("hero-title").innerText = titles[i];
  document.getElementById("hero-desc").innerText = descs[i];

  index = i;
}

/* Auto Slide */
setInterval(() => {
  index = (index + 1) % slides.length;
  changeSlide(index);
}, 4000);

/* Click Navigation */
navItems.forEach((item, i) => {
  item.addEventListener("click", () => changeSlide(i));
});

/* Navbar Scroll */
window.addEventListener("scroll", () => {
  document
    .querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// ==========================================================================

function scrollLeft() {
  document.getElementById("slider").scrollBy({
    left: -350,
    behavior: "smooth",
  });
}

function scrollRight() {
  document.getElementById("slider").scrollBy({
    left: 350,
    behavior: "smooth",
  });
}

// ===========================================================

// let index = 0;
// const track = document.getElementById("testimonialTrack");

// setInterval(() => {
//   index++;

//   if (index > 1) {
//     index = 0;
//   }

//   track.style.transform = `translateX(-${index * 100}%)`;
// }, 4000); // change every 4 sec

// ===========================================================
const track = document.getElementById("testimonialTrack");
const groups = document.querySelectorAll(".testimonial-group");
const dots = document.querySelectorAll(".dot"); // 👈 ADD THIS

let testimonialIndex = 0; // ✅ changed name

function slideTestimonials() {
  testimonialIndex++;

  if (testimonialIndex >= groups.length) {
    testimonialIndex = 0;
  }

  track.style.transform = `translateX(-${testimonialIndex * 100}%)`;
  updateDots(); // 👈 ADD THIS
}

/* 👇 FUNCTION TO UPDATE DOT */
function updateDots() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[testimonialIndex].classList.add("active");
}

/* Auto Slide every 5 sec */
setInterval(slideTestimonials, 3000);
