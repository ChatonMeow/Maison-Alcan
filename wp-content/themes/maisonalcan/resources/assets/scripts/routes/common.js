export default {
  init() {
    // JavaScript to be fired on all pages;

    //Locomotive Scroll
    // eslint-disable-next-line no-unused-vars, no-undef
    /*const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });*/

    //Nav
    document.querySelector('.header .menu-toggle').addEventListener('click', () => {
      document.querySelector('html').classList.toggle('nav-open');
    })
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
