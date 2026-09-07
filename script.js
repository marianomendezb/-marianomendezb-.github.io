// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Lightbox for project tiles
const lightbox = document.getElementById('lightbox');
const lightboxFrame = lightbox.querySelector('.lightbox-frame');
const lightboxClose = lightbox.querySelector('.lightbox-close');

document.querySelectorAll('.tile').forEach(tile => {
  tile.addEventListener('click', () => {
    const embedUrl = tile.getAttribute('data-embed');
    if (!embedUrl) return;
    lightboxFrame.innerHTML = `<iframe src="${embedUrl}" title="Project video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxFrame.innerHTML = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
