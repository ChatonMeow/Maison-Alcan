import arrow from '../util/arrow.json';

export default {
  init() {
    // JavaScript to be fired on all pages;
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired

    //Locomotive Scroll
    // eslint-disable-next-line no-unused-vars, no-undef
    if(!LocomotiveScroll) {
      document.querySelector('html').classList.remove('has-scroll-init');
    }
    else {
      // eslint-disable-next-line no-unused-vars, no-undef
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        offset: ['20%', 0],
      });

      //Trigger des lotties quand on arrive sur l'élément'
      scroll.on('call', (func, state, elem) => {
        if(func === 'arrow') {
          if(!elem.el.querySelector('.arrow svg')) {
            setTimeout(() => {
              var params = {
                container: elem.el.querySelector('.arrow'),
                renderer: 'svg',
                loop: false,
                autoplay: true,
                animationData: arrow,
              };
        
              // eslint-disable-next-line no-undef, no-unused-vars
              var anim = lottie.loadAnimation(params);
            }, 1000);
          }
        }
      });
    }

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
