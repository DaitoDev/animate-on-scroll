const invisibleElements = document.querySelectorAll(".invisible");
const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".nav-menu");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

invisibleElements.forEach((el) => observer.observe(el));

hamburger.addEventListener("click", () => {
  ul.classList.toggle("show-menu");
});
