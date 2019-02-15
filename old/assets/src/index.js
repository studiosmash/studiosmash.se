// Import Highway
import Highway from './highway.js';

// Import Renderers
import Home from 'renderers/home';
import Page from 'renderers/page';

// Import Transitions
import Fade from 'transitions/fade';

import Rellax from 'rellax';

import ScrollAnimations from './scrollAnimations.js';

/*

let scrollanimations,
    rellax

function initPage() {
  // Init scroll animations
  scrollanimations = new ScrollAnimations()
  
  rellax = new Rellax('.rellax', {
    center: true
  })
}

*/

initPage()

/*
const H = new Highway.Core({
  renderers: {
    home: Home,
    page: Page,
  },
  transitions: {
    home: Fade,
    page: Fade
  }
});
*/

/*
H.on('NAVIGATE_END', (from, state) => {
  initPage()

});

document.addEventListener("DOMContentLoaded", function(event) {

    window.onload = function() {
            
        
    };
  
});

*/