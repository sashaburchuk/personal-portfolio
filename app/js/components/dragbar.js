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
    
    this.setupDragbar(); 
    

  }
  
  setupDragbar() {
    
    let setWidthProperty = 0;
    
    this.dragbarItems.forEach((item) => {
      setWidthProperty += item.offsetWidth;
    });
    
    TweenMax.set(this.dragbarElem, {
      width: setWidthProperty
    });
    
    console.log(setWidthProperty);
    
    Draggable.create(this.dragbarElem, {
      type: "x",
      bounds: this.dragbarContainer,
      throwProps: true,
      minimumMovement: 6,
      lockAxis: true,
      edgeResistance: 1,
      dragResistance: 0
    });
  }  
}