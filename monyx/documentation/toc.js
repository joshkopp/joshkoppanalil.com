// Highlight the section you're reading in the sidebar.
(() => {
  const links = [...document.querySelectorAll('nav.toc a')];
  const ids = links.map((a) => a.getAttribute('href').slice(1));
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-20% 0px -70% 0px' });
  ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
})();
