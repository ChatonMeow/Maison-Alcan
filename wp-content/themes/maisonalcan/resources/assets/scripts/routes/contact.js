export default {
  init() {
    
  },
  finalize() {
    // Trigger resize locosroll après un form submit
    var wpcf7Elm = document.querySelector( '.wpcf7' );
    if(wpcf7Elm) {
      ['wpcf7invalid','wpcf7spam','wpcf7mailsent','wpcf7mailfailed','wpcf7submit'].forEach( evt => 
        wpcf7Elm.addEventListener(evt, function(){
          setTimeout(() => {  
            window.dispatchEvent(new Event('resize'));
          }, 0);
        }, false)
      );
    }
  },
};
