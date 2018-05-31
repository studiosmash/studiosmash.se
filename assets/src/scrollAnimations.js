import TweenMax from 'gsap'
import SplitText from './SplitText'

export default class ScrollAnimations {
  constructor() {
    this.init()
  }

  animation(el) {
    const tl = new TimelineLite()

    if(el.dataset.scroll == 'fadeUp') {
        tl.from(el, 1.5, { y: 40, alpha: 0, ease: Expo.easeOut })

    } else if(el.dataset.scroll == 'fadeInLeft') {
        tl.from(el, 1.5, { x: -40, alpha: 0, ease: Expo.easeOut })

    } else if(el.dataset.scroll == 'fadeInRight') {
        tl.from(el, 1.5, { x: 40, alpha: 0, ease: Expo.easeOut })

    } else if(el.dataset.scroll == 'fadeUpStagger') {
        const elems = [...el.querySelectorAll('[data-stagger]')]

        tl.staggerFrom(elems, 1.5, { y: 40, alpha: 0, ease: Expo.easeOut }, 0.1)
    } else if(el.dataset.scroll == 'fadeUpStaggerLines') {
        const lines = new SplitText(el, { type: 'lines' }).lines

      tl.staggerFrom(lines, 1.5, { y: 40, alpha: 0, ease: Expo.easeOut }, 0.1)
    } else if(el.dataset.scroll == 'fadeUpStaggerChars') {
        const chars = new SplitText(el, { type: 'words, chars' }).chars

        tl.staggerFrom(chars, 1.5, { y: 10, alpha: 0, ease: Expo.easeOut }, 0.015)
    } else if(el.dataset.scroll == 'fadeUpStaggerWords') {
        const words = new SplitText(el, { type: 'words, chars' }).words

        tl.staggerFrom(words, 1.5, { y: 10, alpha: 0, ease: Expo.easeOut }, 0.025)
    } 
      
      else if(el.dataset.scroll == 'blockRevealDown') {
        tl.fromTo(el, 2.25, { scaleY: 1 }, { delay: 0.5, scaleY: 0, yPercent: 0, transformOrigin: "100% 100%", ease: Expo.easeOut})
          
    }
      else if(el.dataset.scroll == 'blockRevealUp') {
        tl.fromTo(el, 2.25, { scaleY: 1 }, { delay: 0.5, scaleY: 0, yPercent: 0, transformOrigin: "0% 0%", ease: Expo.easeOut})

    }
      
      else if(el.dataset.scroll == 'blockRevealRight') {
        tl.fromTo(el, 2.25, { scaleX: 1 }, { delay: 0.5, scaleX: 0, yPercent: 0, transformOrigin: "0% 0%", ease: Expo.easeOut})

    }
      
      else if(el.dataset.scroll == 'blockRevealLeft') {
        tl.fromTo(el, 2.25, { scaleX: 1 }, { delay: 0.5, scaleX: 0, yPercent: 0, transformOrigin: "100% 100%", ease: Expo.easeOut})
    
    }
      
      else if(el.dataset.scroll == 'imageUp') {
        tl.fromTo(el, 1, { yPercent: 40 }, {yPercent: 0 })
            
    }
      
       else if(el.dataset.scroll == 'itemUp') {
        tl.fromTo(el, 1, { yPercent: 50 }, {yPercent: 0, delay: 1 })
            
    }
      
    else if(el.dataset.scroll == 'imageDown') {
        tl.fromTo(el, 1, { yPercent: 0 }, {yPercent: 25, delay: 0 })
            
    }
      
      else if(el.dataset.scroll == 'itemIn') {
        tl.to(el, 1, { xPercent: 100 })

    }
      
      // Front page case scroll
      
    else if(el.dataset.scroll == 'overlayOut') {
        tl.fromTo(el, 2.25, { scaleX: 1 }, { delay: 4.5, scaleX: 0, yPercent: 0, transformOrigin: "100% 100%", ease: Expo.easeOut})
    }
    
    else if(el.dataset.scroll == 'overlayText') {
        tl.to(el, 1.5, { y: 0, alpha: 1, ease: Expo.easeOut })
        tl.to(el, 1.5, {delay: 2, y: 40, alpha: 0, ease: Expo.easeOut })
    }
      
    else  if(el.dataset.scroll == 'fadeInHeader') {
        tl.from(el, 1.5, { y: -40, alpha: 0, ease: Expo.easeOut })

    }
      
    else if(el.dataset.scroll == 'fadeUpStaggerFirst') {
        const lines = new SplitText(el, { type: 'lines' }).lines

      tl.staggerFrom(lines, 1.5, { y: 40, alpha: 0, delay: 1.5, ease: Expo.easeOut }, 0.1)
    }
      
    else if(el.dataset.scroll == 'fadeDownStaggerSecond') {
        const lines = new SplitText(el, { type: 'lines' }).lines

      tl.staggerFrom(lines, 1.5, { y: -40, alpha: 0, delay: 1.5, ease: Expo.easeOut }, 0.1)
    }
      
      else if(el.dataset.scroll == 'coverTitle') {
        tl.fromTo(el, 1, { opacity: 0, y: 50, delay: 3 }, { opacity: 1, y: 0, delay: 2 })

    }
      
      else if(el.dataset.scroll == 'coverSubtitle') {
        tl.fromTo(el, 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: 2.25 })

    }
      
       else if(el.dataset.scroll == 'lineInRight') {
        tl.fromTo(el, 1, { scale: 0 }, { delay: 0.0, scale: 1, transformOrigin: "left", repeat: 0, repeatDelay: 1, opacity: 1, ease: Power3.easeIn })

    }
      
      else if(el.dataset.scroll == 'lineInLeft') {
        tl.fromTo(el, 1, { scale: 0 }, { delay: 0.0, scale: 1, transformOrigin: "right", repeat: 0, repeatDelay: 1, opacity: 1, ease: Power3.easeIn })

    }
      
      else if(el.dataset.scroll == 'caseImage') {
        tl.fromTo(el, 1, { y: 100 }, { y:100, ease: Power3.easeIn })

    }
    
    new ScrollMagic.Scene({
        triggerElement: el,
        offset: window.innerHeight * 0.25,
        triggerHook: 1,
        reverse: false
    })
        .setTween(tl)
        .addTo(this.controller)
  }

  init() {
    this.controller = new ScrollMagic.Controller()

    this.elems = [...document.querySelectorAll('[data-scroll]')]

    if(this.elems) {
      this.elems.forEach((el) => {
        this.animation(el)
      })
    }
  }
}
