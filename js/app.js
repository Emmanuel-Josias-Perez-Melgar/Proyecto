// Validación del formulario en contacto.html
const form = document.getElementById("form-contacto");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ Gracias por contactarnos. Te responderemos pronto.");
    form.reset();
  });
}

// Animación de aparición al hacer scroll
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  observer.observe(card);
});



  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

