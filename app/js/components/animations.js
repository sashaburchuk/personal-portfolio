export default class Animations {
  
 /**
  * Some nice text animation
  * @param {Element} elem - the root element, save this for later
  * @param {Function}
  * @constructor
  */
  
	constructor(elem=document.body) {
    
	  /**
	  * The root element
	  * @type {Element}
	  * @private
	  */		
		this.elem = elem;
    this.fadeInElementCont = elem.querySelector('.js-fade-in-container');
    this.fadeInElemText = elem.querySelectorAll('.js-fade-in-heading-text');
    this.fadingLinks = Array.from(document.querySelectorAll('.js-fade-in-link'));
    
		this.start();
	}

  /** Fade in heading and tagline, set nav links to invisible */
  start() {
    
    this.fadingLinks.forEach((link) => {
      
     link.addEventListener("click", this.scrollToSection, 0.25);      
      
      TweenLite.set(link, {
        autoAlpha: 0
      })
    });
    
    TweenLite.fromTo(this.fadeInElemText, 3.5, {
      autoAlpha: 0.05,
      ease: SlowMo.ease.config(0.3, 1, false)
      },{
      autoAlpha: 1,
      onComplete: () => {
        this.animateLinks();
      }
    });
  }
  
  /** Fade in each main nav link */
  animateLinks() {
    
    var tl = new TimelineLite();
    
    tl.staggerTo('.js-fade-in-link', 0.25, {
      autoAlpha: 1,
    }, 0.75);
  }
  
  /** Scroll to each section */
  
  scrollToSection() {
    console.log(this.link);
  };
  
  /** Make top navigation sticky */

}