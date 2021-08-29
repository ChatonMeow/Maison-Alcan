export default {
  init() {
    // eslint-disable-next-line no-unused-vars, no-undef
    const swiperHistory = new Swiper('.history .cards', {
      // Optional parameters
      loop: false,
      slidesPerView: 1,
      spaceBetween: 35,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      pagination: {
        el: '.history .pager',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 1.3,
        },
        1050: {
          slidesPerView: 3,
          spaceBetween: 28,
        },
        1600: {
          spaceBetween: 52,
        },
      },
    });
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
