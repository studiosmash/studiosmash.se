import $ from 'jquery';

import ScrollMagic from 'scrollmagic';

import { TweenMax } from 'gsap';

// Subpage Hero

var hero = document.getElementsByClassName('cover-hero'),
    title = document.getElementsByClassName('cover-title'),
    subtitle = document.getElementsByClassName('cover-subtitle'),
    item = document.getElementsByClassName('cover-item');

TweenMax.from(hero, 1, {opacity: 1, delay: 0, y: '-100%'});
TweenMax.from(title, 1, {opacity: 0, delay: 1, y: 50});
TweenMax.from(subtitle, 1, {opacity: 0, delay: 1.25, y: 50});
//TweenMax.from(item, .5, {opacity: 1, delay: 0.25, y: 200});
TweenMax.from(item, 1, {opacity: 1, delay: 0.25, y: 200});


// Subpage Scroll 

var controller = new ScrollMagic.Controller({
    addIndicators: true,
    triggerHook: 0.9
});

$('.fade-in').each(function(){
    
    //var tween = TweenMax.fromTo($(this), 0.3,{color: '#2AB0B0', scale: 0.5, autoAlpha:0}, {autoAlpha:1, scale: 1, y: '+=30', ease:Linear.easeNone});
    
    //var tween = TweenMax.fromTo($(this), 0.5,{scale: 1, autoAlpha:0, y: -50}, {autoAlpha:1, scale: 1, y: 0, ease:Power3.easeOut});
    var tween = TweenMax.from($(this), 1, {opacity: 0, delay: 0, y: 50});
    
    var scene = new ScrollMagic.Scene({
        triggerElement: this
    })
    .setTween(tween)
    .addTo(controller);
    
});

$('.block-in').each(function(){
    
    //var tween = TweenMax.fromTo($(this), 1,{delay: 0.1, scaleX:0, autoAlpha:0, y: 1, transformOrigin:"0% 0%"}, {autoAlpha:1, scaleX: 1, y: 0, ease:Power3.easeOut});
    
    //var tween = TweenMax.fromTo($(this), 1,{delay: 0.1, y: 0, autoAlpha:0, y: 1}, {autoAlpha:1, scaleX: 1, y: -100, ease:Power3.easeOut});
    
    //var tween = TweenMax.from($(this), 1, {autoAplpha: 0, delay: 0, height: 0.0, ease: Power3.easeIn});
    
    //var tween = TweenMax.fromTo($(this), 0.5,{opacity: 0, delay: 0, y: 75},{opacity: 1, y: 75});
    
    var tween = TweenMax.fromTo($(this), 1,{autoAlpha:0, y: 50, delay: 0}, {autoAlpha:1, scale: 1, y: 0, ease:Power3.easeOut});
    
    var scene = new ScrollMagic.Scene({
        triggerElement: this,
         triggerHook: 0.9,
    })
    .setTween(tween)
    .addTo(controller);
});

// Next button

//$('#nextButton').mouseover(function (e){    
//    TweenMax.to($(this), .2, {css:{color: '#BA9451'}});
//})

//$('#nextButton').mouseover(function (e){    
//    TweenMax.to($(this), .2, {css:{color: '#BA9451'}});
//});
    
var nextButton = $('#nextButton');

nextButton.hover(
   function() {
      TweenLite.to($(this), 0.3, {scale:1.1, color:'#BA9451'});
   },
   function() {
      TweenLite.to($(this), 0.15, {scale:1, color:'#111'});  
   }
);

/* 

// CUSTOM from index.js

import $ from 'jquery';
import { TimelineMax, TweenMax, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';

var hero = document.getElementsByClassName('cover-hero'),
    title = document.getElementsByClassName('cover-title'),
    subtitle = document.getElementsByClassName('cover-subtitle'),
    item = document.getElementsByClassName('cover-item');

TweenMax.from(hero, 1, {opacity: 1, delay: 0, y: '-100%'});
TweenMax.from(title, 1, {opacity: 0, delay: 1, y: 50});
TweenMax.from(subtitle, 1, {opacity: 0, delay: 1.25, y: 50});
//TweenMax.from(item, .5, {opacity: 1, delay: 0.25, y: 200});
TweenMax.from(item, 1, {opacity: 1, delay: 0.25, y: 200});

// Scrollmagic

var scene = new ScrollMagic.Scene({triggerElement: "fade-in", duration: 300})
							.setTween(tween)
							.addIndicators({name: "staggering"}) // add indicators (requires plugin)
							.addTo(controller);
                
var tween = TweenMax.FromTo(".fade-in", 2, {opacity: 0}, {opacity: 1}, 0.15);

*/