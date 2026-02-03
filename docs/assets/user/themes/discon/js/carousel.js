(() => {
  const root = document.querySelector('[data-carousel]');
  if (!root) return;

  const track = root.querySelector('[data-track]');
  const slides = [...root.querySelectorAll('[data-slide]')];
  const dots = [...root.querySelectorAll('[data-dot]')];

  const goTo = (i) => {
    const idx = Math.max(0, Math.min(i, slides.length - 1));
    track.scrollTo({ left: slides[idx].offsetLeft, behavior: 'smooth' });
  };

  const setActive = () => {
    const x = track.scrollLeft + 2;
    let idx = 0;
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].offsetLeft <= x) idx = i;
    }
    dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
  };

  dots.forEach((d) => d.addEventListener('click', () => goTo(Number(d.dataset.dot))));
  track.addEventListener('scroll', () => requestAnimationFrame(setActive));
  setActive();
})();
