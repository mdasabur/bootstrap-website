$(document).ready(function () {
	//STIKY MANU

	$(".js--services-section").waypoint(function (direction) {

		if (direction == "down") {
			$("nav").addClass("sticky");
		} else {
			$("nav").removeClass("sticky");
		}
	});




	//ACTIVE LINK

	$("nav ul li a").click(function () {
		$("nav ul li a").removeClass("active");
		$(this).addClass("active");

	});
	$("nav a img.logo").click(function () {
		$("nav ul li a").removeClass("active");
		$("nav ul li :first-child a")
			.addClass("active");

	});




	//MIXITUP(PORTFOLIO SECTION)
	var mixer = mixitup('.container');

	//	SMOOTH SCHROLL FOR IE /EDGE/SAFARI

	$("a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html,body,').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {
				window.location.hash = hash;
			});
		}
	});






});


function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}



//Combining animations on page load with scrolltrigger
//Create a GSAP scrolltrigger animated website
const loadTl = gsap.timeline({ defaults: { opacity: 0, ease: 'ease-in', duration: 1 } });
                                      
window.addEventListener('DOMContentLoaded', () => {
  loadTl.add(pageFadeIn());
  loadTl.add(headerLoadAnimation(), '<1');
  const heroTl = heroAnimation();
  heroTl.pause(); // we don't want it to play yet
  // create a separate tween of the playhead - insert that tween into the loadTl timeline (if we put heroTl directly into it, that would force its playhead to be linked to the parent loadTl's playhead progressio but we want the ScrollTrigger to control it instead)
  loadTl.add(heroTl.tweenFromTo(0, heroTl.duration()), '<1.5');
  loadTl.add(() => { // after that tween is done, we'll create a ScrollTrigger with the "real" heroTl animation
    ScrollTrigger.create({
      animation: heroTl,
      trigger: '.hero',
      start: '30% 40%',
      end: '50% 20%',
      toggleActions: 'play reverse restart reverse',
      markers: true
    });
  });
  
  aboutAnimation();
  
});

function pageFadeIn() {
  const tl = gsap.timeline();
  tl.from('body', { opacity: 0, ease: 'linear', duration: 1 });
  return tl;
}

function headerLoadAnimation() {
    const tl = gsap.timeline({ defaults: { opacity: 0, ease: 'ease-in', duration: 1 }});
    tl.from('.logo', { x: -40 }, '<1')
          .from('.link', { y: -20, stagger: .2 }, '<');
    return tl;
}

function heroAnimation() {
    const tl = gsap.timeline(
      {
        defaults: { opacity: 0, ease: 'ease-in', duration: 1},
        
      }
    );
    tl.from('.tagline', { x: -20 })
          .from('.button', { y: -20 }, '<1');
    return tl;
}

function aboutAnimation() {
  const tl = gsap.timeline( {
    scrollTrigger: { 
      trigger: '.about',
      start: '30% 75%',
      end: '60% 30%',
      toggleActions: 'restart reverse restart reverse',
      markers: true
    }
  }).from('.box', { y:40, opacity:0, stagger: 0.2 });
  
  return tl;
}

