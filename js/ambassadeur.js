// js/ambassadeur.js
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hidden");
  const onScroll = () => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("show");
      }
    });
  };
  window.addEventListener("scroll", onScroll);
  onScroll();
});
