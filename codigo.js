// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // 1) Menú hamburguesa

  const hamburgerBtn = document.getElementById('hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active'); // .mobile-menu.active { right: 0; }
    });
  }

  // 2) FAQ acordeón
  const faqContainer = document.querySelector('.faq-content');
  if (faqContainer) {
    faqContainer.addEventListener('click', (e) => {
      const header = e.target.closest('.faq-group-header');
      if (!header) return;

      const group = header.parentElement;                         // .faq-group
      const body = group.querySelector('.faq-group-body');        // contenido a abrir/cerrar
      const icon = header.querySelector('i');                     // <i class="fa-solid fa-plus">

      // Cerrar las otras preguntas
      faqContainer.querySelectorAll('.faq-group').forEach((g) => {
        if (g !== group) {
          g.querySelector('.faq-group-body')?.classList.remove('open');
          const ic = g.querySelector('.faq-group-header i');
          ic?.classList.add('fa-plus');
          ic?.classList.remove('fa-minus');
        }
      });

      // Alternar la actual
      body?.classList.toggle('open');
      if (icon) {
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
      }
    });
  }
});