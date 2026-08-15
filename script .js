function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}


// Close mobile menu after clicking a link

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("active");
  });
});


// Current year

document.getElementById("year").textContent =
  new Date().getFullYear();