
const tl = gsap.timeline({defaults: {ease: "power1.out"}});
tl.to('.text', {y:"0%", duration: 1, stagger: 0.25});
tl.to('.slider', {y:"-100%", duration: 1.5, delay: 0.5 });
tl.to('.intro', {y:"-100%", duration:1}, "-=1");
tl.fromTo('.nav', {opacity:0}, {opacity:1, duration: 1 });
tl.fromTo('.container', {opacity:0}, {opacity:1, duration: 1 }, "-=1");


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  


// gsap.registerPlugin(ScrollTrigger);
// tl.fromTo(".footer-container", {scrollTrigger: ".footer-container"}, {opacity:0}, {opacity:1, duration: 1 }, "-=1");