const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible"); // si tu veux l’effet inverse en scroll up
    }
  });
}, {
  threshold: 0.2
});

sections.forEach((section, index) => {
  // une section sur deux part de la gauche
  if (index % 2 === 0) {
    section.classList.add("from-left");
  }
  observer.observe(section);
});
