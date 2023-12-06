(function($) { "use strict";
		
		
	//Page cursors
	
	$(window).mousemove(function(e) { 	  
		$(".cursor").css({
			left: e.pageX,
			top: e.pageY
		})	  
	});
	$(".cursor-link")
	.on("mouseenter", function() {	 
		$('.cursor').addClass("active")	  
	})
	.on("mouseleave", function() {	  
		$('.cursor').removeClass("active")	  
	});
	
	//Blog page cursors with image	
	//Star Wars
	$(".cursor-link-passion-starwars")
	.on("click", function() {	 
		$('.cursor').addClass("active-passion");
		$('.cursor').addClass("starwars");
	})
	.on("mouseleave", function() {	  
		$('.cursor').removeClass("active-passion");
		$('.cursor').removeClass("starwars");
	});
	//Blog post 2:
	$(".cursor-link-passion-matrix")
	.on("click", function() {	 
		$('.cursor').addClass("active-passion");
		$('.cursor').addClass("matrix");
	})
	.on("mouseleave", function() {	  
		$('.cursor').removeClass("active-passion");
		$('.cursor').removeClass("matrix");
	})	
	//Milan
	$(".cursor-link-passion-milan")
	.on("click", function() {	 
		$('.cursor').addClass("active-passion");
		$('.cursor').addClass("milan");
	})
	.on("mouseleave", function() {	  
		$('.cursor').removeClass("active-passion");
		$('.cursor').removeClass("milan");
	});
	//Blog post 7:
	$(".cursor-link-passion-thelastofus")
	.on("click", function() {	 
		$('.cursor').addClass("active-passion");
		$('.cursor').addClass("thelastofus");
	})
	.on("mouseleave", function() {	  
		$('.cursor').removeClass("active-passion");
		$('.cursor').removeClass("thelastofus");
	})
	//Blog post 7:
	$(".cursor-link-passion-siliconvalley")
	.on("click", function() {	 
		$('.cursor').addClass("active-passion");
		$('.cursor').addClass("siliconvalley");
	})
	.on("mouseleave", function() {	  
		$('.cursor').removeClass("active-passion");
		$('.cursor').removeClass("siliconvalley");
	})
	//Blog post 7:
	$(".cursor-link-passion-cocker")
	.on("click", function() {	 
		$('.cursor').addClass("active-passion");
		$('.cursor').addClass("cocker");
	})
	.on("mouseleave", function() {	  
		$('.cursor').removeClass("active-passion");
		$('.cursor').removeClass("cocker");
	})
	
	
	/* Scroll Animation */
	
	window.scrollReveal = new scrollReveal();

	
	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;

		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');

			applyListeners();
		};

		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};

		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};

		init();
	}();		
		
		
	//Parallax & fade on scroll	
	
	function scrollBanner() {
	  $(document).on('scroll', function(){
		var scrollPos = $(this).scrollTop();
		$('.parallax-fade-top').css({
		  'top' : (scrollPos/2)+'px',
		  'opacity' : 1-(scrollPos/300)
		});
		$('.parallax-fade-top-pages').css({
		  'top' : (scrollPos/2)+'px',
		  'opacity' : 1-(scrollPos/500)
		});
		$('.parallax-top').css({
		  'top' : (scrollPos/2.2)+'px'
		});
	  });    
	}
	scrollBanner();
	
	$(document).ready(function() {

		//Subtitle
		$('.subtitle').delay(1500).animate({'opacity': 1}, 1000);
		
		//Loading page animation
		$(".animsition").animsition({	  
			inClass               :   'fade-in-down-sm',
			outClass              :   'fade-out-down-sm',
			inDuration            :    600,
			outDuration           :    400,
			linkElement           :   '.animsition-link', 
			// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
			loading               :    true,
			loadingParentElement  :   'body', //animsition wrapper element
			loadingClass          :   'animsition-loading',
			unSupportCss          : [ 'animation-duration',
									  '-webkit-animation-duration',
									  '-o-animation-duration'
									],
			//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. 
			//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
			
			overlay               :   false,
			
			overlayClass          :   'animsition-overlay-slide',
			overlayParentElement  :   'body'
		});	

		
		//Scroll back to top
	
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').fadeIn(duration);
			} else {
				jQuery('.scroll-to-top').fadeOut(duration);
			}
		});				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		});

		/* #Expertises
		================================================== */
		$('.expertise .exHeader').click(function() {
			$(this).parent('.expertise').toggleClass('opened');
		});

		/* #Magic stars
		================================================== */
		function startMagicAnimationForWord(word) {
			let index = 0,
			  interval = 1000;
		  
			const rand = (min, max) =>
			  Math.floor(Math.random() * (max - min + 1)) + min;
		  
			const animate = star => {
			  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
			  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
		  
			  star.style.animation = "none";
			  star.offsetHeight;
			  star.style.animation = "";
			}
		  
			// Funzione per creare e aggiungere gli span.magic-star
			const createMagicStar = () => {
			  const magicSpan = document.createElement('span');
			  magicSpan.classList.add('magic-star');
		  
			  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			  svg.setAttribute('viewBox', '0 0 512 512');
		  
			  // Inserisci il valore del percorso SVG qui per definire la forma della stella
			  const pathValue = "M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z";
			  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			  path.setAttribute('d', pathValue);
		  
			  svg.appendChild(path);
			  magicSpan.appendChild(svg);
		  
			  word.appendChild(magicSpan);
			};
		  
			// Aggiungi solo 3 span.magic-star
			for (let i = 0; i < 3; i++) {
			  createMagicStar();
			}
		  
			const magicStars = word.querySelectorAll('.magic-star');
			magicStars.forEach((star, index) => {
			  setTimeout(() => {
				animate(star);
		  
				setInterval(() => animate(star), 1000);
			  }, index * (interval / 3))
			});
		}
		  
		function removeMagicAnimationFromWord(word) {
			const magicStars = word.querySelectorAll('.magic-star');
			magicStars.forEach(star => {
			  star.remove();
			});
		  
			// Rimuovi la classe "magic-text" dallo span interno
			const magicText = word.querySelector('.magic-text');
			if (magicText) {
			  magicText.classList.remove('magic-text');
			}
		}
		  
		// Aggiungi gestore di eventi click a tutti gli elementi con classe "magic"
		const magicWords = document.querySelectorAll('.magic');
		magicWords.forEach(word => {
			word.addEventListener('click', () => {
				removeMagicAnimationFromWord(word);
			});
			
			startMagicAnimationForWord(word);
		});

		/* #Passions Counter
		================================================== */
		var passionCounter = 0;

		$('.link-passion').click(function(){
			if ($(this).hasClass('link-passion')) {
				passionCounter++;
				$(this).removeClass('link-passion');
		
				if (passionCounter > 0) {
					if ($('header.cd-header').hasClass('is-fixed')){
						$('header.cd-header').addClass('is-visible');
					}
					setTimeout(function() { 
						$('.gems div').removeClass('active'); 
						$('.gems div:lt(' + passionCounter + ')').addClass('active');
						$('.gems div').removeClass('expanded'); 
						$('.gems div span').hide();
						$('.gems div:nth-child(' + passionCounter + ') span').show();
						setTimeout(function() { 
							$('.gems div:nth-child(' + passionCounter + ')').addClass('expanded');
						}, 100);
						
					}, 500);
				}
		
				if (passionCounter === 1){
					$('.secretPassionFound').show();
					$('.secretPassionFound .gems div .attention').delay(1500).fadeTo(500 , 1, function() {
						$('.secretPassionFound .gems div .attention').delay(4000).fadeOut(500);
					});
				}
			}
		});

		/* #Tools
		================================================== */
		const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
		
	});

	/*$(function() {
		var controller = new ScrollMagic.Controller();
		var worksScene;
	  
		var moveRectangles = function(scrollPos) {
		  $(".rectangle.uno").css({
			left: -scrollPos * 0.07 + "px"
		  });
	  
		  $(".rectangle.due").css({
			right: -scrollPos * 0.05 + "px"
		  });
	  
		  $(".rectangle.tre").css({
			left: -scrollPos * 0.03 + "px"
		  });
		};
	  
		var checkWorksVisibility = function() {
		  var worksOffset = $(".works").offset().top;
		  var windowHeight = $(window).height();
		  var scrollTop = $(window).scrollTop();
	  
		  if (worksOffset - scrollTop < windowHeight) {
			if (!worksScene) {
			  worksScene = new ScrollMagic.Scene({
				triggerElement: ".works",
				duration: $(".works").height()
			  })
				.on("update", function(e) {
				  moveRectangles(e.scrollPos);
				})
				.addIndicators() // Da rimuovere in produzione
				.addTo(controller);
			}
		  } else {
			if (worksScene) {
			  worksScene.destroy(true);
			  worksScene = null;
			}
		  }
		};
	  
		// Verifica la visibilità di .works quando la pagina viene caricata o lo scroll avviene
		$(window).on("load scroll resize", function() {
		  checkWorksVisibility();
		});
	});*/
	  
	  
			
 
	/* DebouncedResize Function */
	
	(function ($) { 
		var $event = $.event, 
			$special, 
			resizeTimeout;				
		$special = $event.special.debouncedresize = { 
			setup : function () { 
				$(this).on('resize', $special.handler);
			}, 
			teardown : function () { 
				$(this).off('resize', $special.handler);
			}, 
			handler : function (event, execAsap) { 
				var context = this, 
					args = arguments, 
					dispatch = function () { 
						event.type = 'debouncedresize';
						
						$event.dispatch.apply(context, args);
					};								
				if (resizeTimeout) {
					clearTimeout(resizeTimeout);
				}								
				execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
			}, 
			threshold : 150 
		};
	} )(jQuery);

	
  })(jQuery); 