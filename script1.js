const tl = gsap.timeline({defaults: {ease: "power1.out"}});
tl.fromTo('.nav', {opacity:0}, {opacity:1, duration: 2 });
tl.fromTo('.resume', {opacity:0}, {opacity:1, duration: 1 }, "-=1");
tl.fromTo('.area', {opacity:0}, {opacity:1, duration: 1 }, "-=1");


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
  