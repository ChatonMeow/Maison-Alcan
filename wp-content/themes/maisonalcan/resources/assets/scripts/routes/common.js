export default {
  init() {
    // JavaScript to be fired on all pages;
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired

    //Locomotive Scroll
    // eslint-disable-next-line no-unused-vars, no-undef
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    //Besoin de la ligne suivante pour que le scroll soit mesuré correctement
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 2000);

    //Nav
    document.querySelector('.header .menu-toggle').addEventListener('click', () => {
      document.querySelector('html').classList.toggle('nav-open');
      window.scrollTo(0, 0);
    });
  },
};
