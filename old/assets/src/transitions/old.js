// Import Highway
import Highway from 'highway';
import scrollAnimations from '../scrollAnimations.js';

// This example uses `Greensock` an animation library
import { TweenMax } from 'gsap';

// To create your custom transition you need to provide two required methods:
// - `in`: The transition part to show your view.
// - `out`: The transition part to hide you view.
//
// Each method receives a callback method called `done` you will always have to
// call when the a transition is over.

class Fade extends Highway.Transition {
  in(view, done) {
    
    
    /*
    TweenMax.fromTo('.overlay', 1, {background: '#000'},{})
    
    TweenMax.fromTo('.cover-image', 1,
      { opacity: 0, delay: 3, y: 0 },
      {
        scale: 1,
        y: "100%",
        opacity: 1, y: 0,
        onComplete: done
      }
    ),
      TweenMax.fromTo('.cover-title', 1,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        delay: 2,
        onComplete: done
      }
    ),
      TweenMax.fromTo('.cover-subtitle', 1,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        delay: 2.25,
        onComplete: done
      }
    ),
    TweenMax.fromTo(
    ".project-overlay",
    1.25, {
        width: '0vw',
        scale: 1
    }, {
        width: '100vw',
        transformOrigin: "100% 50%",
        ease: Power1.easeIn
    }
    );
    */

  }
    out(view, done) {
    
    /*
    TweenMax.fromTo('.cover-image', 1,
      { opacity: 1, delay: 0, y: 0, zIndex:1 },
      {
        y: "100%",
        opacity: 1, y: 0,
        onComplete: done
      }
    
    )*/
       
    /*
    TweenMax.to('.cover-image', 1, {scale: 1, top: 0, left: "0%", y: '0%', delay: 0., ease: Expo.easeOut})
        
    ,
      TweenMax.fromTo('.cover-title', 1,
      { opacity: 1, y: 0 },
      {
        opacity: 0, y: 50,
        delay: 2,
        onComplete: done
      }
    ),
        
    TweenMax.to('.project-overlay', 1, {scale: 1, top: 0, left: "0%", delay: 0., ease: Expo.easeOut});
     */
        
    /*
    TweenMax.fromTo(
    ".project-overlay",
    1.25, {
        width: '100vw',
        scale: 1
    }, {
        width: '100vw',
        transformOrigin: "100% 50%",
        ease: Power1.easeIn
    }
    );
    */
        
    /*,
    TweenMax.fromTo(
    ".project-overlay",
    1.25, {
        exportRootPercent: 100,
        scale: 1
    }, {
        xPercent: 0,
        transformOrigin: "100% 50%",
        ease: Power1.easeIn
    }
    );*/
    
        //scrollanimations.init()

  }
}

    
/*in(view, done) {
    
    TweenMax.fromTo('.cover-image', 2,
      { alpha: 0 },
      {
        alpha: 1,
        onComplete: done
      }
    );
  }*/

// Don't forget to export in some way your custom transition.
export default Fade;
