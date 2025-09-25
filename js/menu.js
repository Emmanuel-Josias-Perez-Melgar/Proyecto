const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});


// js/menu.js
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav ul");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});