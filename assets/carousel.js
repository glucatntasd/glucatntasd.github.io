document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".photo-carousel").forEach(carousel => {
    const track = carousel.querySelector(".carousel-track");
    const slides = [...carousel.querySelectorAll(".carousel-slide")];
    const dots = carousel.querySelector(".carousel-dots");

    if (slides.length < 2) return;

    let current = 0;

    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.setAttribute("aria-label", `Vai alla foto ${i + 1}`);
      dot.addEventListener("click", () => show(i));
      dots.appendChild(dot);
    });

    function show(index) {
      current = (index + slides.length) % slides.length;
      track.scrollTo({
        left: slides[current].offsetLeft - slides[0].offsetLeft,
        behavior: "smooth"
      });
      [...dots.children].forEach((dot, i) => {
        dot.classList.toggle("active", i === current);
      });
    }

    carousel.querySelector(".prev")
      .addEventListener("click", () => show(current - 1));

    carousel.querySelector(".next")
      .addEventListener("click", () => show(current + 1));
  });
});