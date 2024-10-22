const currentPage = window.location.href;
const links = document.querySelectorAll(".nav-links li");

links.forEach((link) => {
  const linkHref = link.querySelector("a").href;

  if (currentPage === linkHref) {
    link.classList.add("active");
  }
});
