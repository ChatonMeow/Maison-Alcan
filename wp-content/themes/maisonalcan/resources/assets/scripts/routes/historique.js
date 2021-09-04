export default {
  init() {
    // eslint-disable-next-line no-unused-vars, no-undef
    const swiperHistory = new Swiper('.facts .inner', {
      // Optional parameters
      loop: false,
      slidesPerView: 1.2,
      spaceBetween: 35,
      pagination: {
        el: '.facts .pager',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 100,
          spaceBetween: 0,
        },
      },
    });
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
