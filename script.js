// ================= MENU BURGER =================
const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

if (burger && navbar) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navbar.classList.toggle("active");
  });

  // Fermer le menu au clic sur un lien (mobile UX)
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      navbar.classList.remove("active");
    });
  });
}

// ================= ANIMATION SCROLL =================
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

hiddenElements.forEach(el => observer.observe(el));

// ================= SLIDER AUTO (10 IMAGES) =================
let counter = 1;
const totalSlides = 10; // 🔥 adapte automatiquement

let sliderInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  const radio = document.getElementById("radio" + counter);
  if (radio) radio.checked = true;

  counter++;
  if (counter > totalSlides) counter = 1;
}

// ================= PAUSE AU HOVER =================
const slider = document.querySelector(".slider");

if (slider) {
  slider.addEventListener("mouseenter", () => {
    clearInterval(sliderInterval);
  });

  slider.addEventListener("mouseleave", () => {
    sliderInterval = setInterval(nextSlide, 5000);
  });
}