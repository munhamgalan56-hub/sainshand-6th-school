// Mobile nav toggle
const ham = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');
if (ham && nav) {
  ham.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    ham.setAttribute('aria-expanded', isOpen);
  });
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));
