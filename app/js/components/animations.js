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
    this.fadingLinks = elem.querySelectorAll('js-fade-in-link');
    
		this.start();
	}

    /**
    * Run first part of animation and call subsequent part 
    * @type {Function}
    * @private
    */

  start() {
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
  
  animateLinks() {
    console.log("links start fading in");
  }

}