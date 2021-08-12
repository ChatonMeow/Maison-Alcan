export default {
  init() {
    // JavaScript to be fired on all pages;
    //Locomotive Scroll
    // eslint-disable-next-line no-unused-vars
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
