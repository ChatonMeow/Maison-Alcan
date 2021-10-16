import loading from '../util/loading.json';
import arrow from '../util/arrow.json';

export default {
  init() {
    // JavaScript to be fired on all pages;
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired

    function initToute() {
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
          if(func === 'arrow' && !elem.el.classList.contains('drawed')) {
            elem.el.classList.add('drawed');
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
    }

    //Show loader once per session
    const loaderElem = document.querySelector('.loader');
    if (!sessionStorage.getItem('loaded')) {
      sessionStorage.setItem('loaded', true);

      var paramsLoader = {
        container: loaderElem.querySelector('.svg'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: loading,
      };

      // eslint-disable-next-line no-undef, no-unused-vars
      var animLoader = lottie.loadAnimation(paramsLoader);
      animLoader.onLoopComplete = () => {
        loaderElem.classList.add('is-complete');
        setTimeout(() => {
          initToute();
          
          setTimeout(() => {
            animLoader.destroy();
            loaderElem.remove();
          }, 250);
        }, 250);
      }
    }
    else {
      loaderElem.remove();
      initToute();
    }
  },
};
