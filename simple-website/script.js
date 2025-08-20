const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("visible", entry.isIntersecting);
    });
  },
  { threshold: 0.1 }
);

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});
