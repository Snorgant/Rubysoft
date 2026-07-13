const toggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');

function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Menu openen');
  mobileMenu.hidden = true;
  document.body.classList.remove('menu-open');
}

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Menu openen' : 'Menu sluiten');
  mobileMenu.hidden = open;
  document.body.classList.toggle('menu-open', !open);
});

mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

const header = document.querySelector('.site-header');
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 18);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -30px' });

document.querySelectorAll('.reveal').forEach((element) => {
  element.style.setProperty('--delay', `${element.dataset.delay || 0}ms`);
  observer.observe(element);
});

document.querySelector('#year').textContent = new Date().getFullYear();
