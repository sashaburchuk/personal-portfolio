export default class Dragbar {
  
 /**
  * Make a dragbar using draggable.js
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
    
    this.dragbarContainer = elem.querySelector('.js-draggable-container');
    
    this.dragbarElem = elem.querySelector('.js-draggable-scroller');
    
    this.dragbarItems = Array.from(document.querySelectorAll('.js-dragbar-item'));
    
    this.dragbarImgs = Array.from(document.querySelectorAll('.js-dragbar-img'));
    
    this.setupDragbar(); 
   
    window.addEventListener('load', () => {
     this.setContWidth();
   }, false ); 
    
  }
   
   
  /** Grab the width of all the image container divs and calculate/set width of their container */ 
  setContWidth() {
    this.setWidthProperty = 0;
    
    this.dragbarItems.forEach((item) => {
      this.setWidthProperty += item.offsetWidth;
    });
    
    TweenMax.set(this.dragbarElem, {
      width: this.setWidthProperty
    });
    
  }
  
  
  /** Set options for GSAP Dragbar */
  setupDragbar() {
    
    Draggable.create(this.dragbarElem, {
      type: "x",
      bounds: this.dragbarContainer,
      throwProps: true,
      minimumMovement: 6,
      lockAxis: true,
      edgeResistance: 1,
      dragResistance: 0,
      
    });
  }  
  
  /** Swap out headings on drag bar for old work and new work */
  
  // if you want to do this, loop over each item in the array till you get to the one with the js hook, add all of the items up till that one together in width, return that width, position an invisible div absolutely and use as a "sensor" and put the sensor handle and the returned width number as the two params in .hitTest
  
  /** Fade in each image when it reaches the right side of the viewport */
}