
function mostrar() {
  var tamanio = window.matchMedia("(min-width: 360px) and (max-width: 640px)")
  if (tamanio.matches){
    document.getElementById("sidebar").style.width = "100%";
    document.getElementById("sidebar").classList.add('activado');
    document.getElementById("contenido").style.marginLeft = "0%";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
  }
  else{
    document.getElementById("sidebar").style.width = "20%";
    document.getElementById("sidebar").classList.add('activado');
    document.getElementById("contenido").style.marginLeft = "20%";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
  }
}


function ocultar() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("contenido").style.marginLeft = "0";
  document.getElementById("abrir").style.display = "inline";
  document.getElementById("cerrar").style.display = "none";
}





function HoverCarousel(elm, settings) {
    this.DOM = {
      scope: elm,
      wrap: elm.querySelector("ul").parentNode
    };
  
    this.containerWidth = 0;
    this.scrollWidth = 0;
    this.posFromLeft = 0; 
    this.stripePos = 0; 
    this.animated = null;
    this.callbacks = {};
  
    this.init();
  }
  
  HoverCarousel.prototype = {
    init() {
      this.bind();
    },
  
    destroy() {
      this.DOM.scope.removeEventListener(
        "mouseenter",
        this.callbacks.onMouseEnter
      );
      this.DOM.scope.removeEventListener("mousemove", this.callbacks.onMouseMove);
    },
  
    bind() {
      this.callbacks.onMouseEnter = this.onMouseEnter.bind(this);
      this.callbacks.onMouseMove = (e) => {
        if (this.mouseMoveRAF) cancelAnimationFrame(this.mouseMoveRAF);
  
        this.mouseMoveRAF = requestAnimationFrame(this.onMouseMove.bind(this, e));
      };
  
      this.DOM.scope.addEventListener("mouseenter", this.callbacks.onMouseEnter);
      this.DOM.scope.addEventListener("mousemove", this.callbacks.onMouseMove);
    },
  
    
    onMouseEnter(e) {
      this.nextMore = this.prevMore = false; 
  
      this.containerWidth = this.DOM.wrap.clientWidth;
      this.scrollWidth = this.DOM.wrap.scrollWidth;
      this.padding = 0.2 * this.containerWidth;
      this.posFromLeft = this.DOM.wrap.getBoundingClientRect().left;
      var stripePos = e.pageX - this.padding - this.posFromLeft;
      this.pos = stripePos / (this.containerWidth - this.padding * 2);
      this.scrollPos = (this.scrollWidth - this.containerWidth) * this.pos;
  
      this.DOM.wrap.style.scrollBehavior = "smooth";
  
      if (this.scrollPos < 0) this.scrollPos = 0;
  
      if (this.scrollPos > this.scrollWidth - this.containerWidth)
        this.scrollPos = this.scrollWidth - this.containerWidth;
  
      this.DOM.wrap.scrollLeft = this.scrollPos;
      this.DOM.scope.style.setProperty(
        "--scrollWidth",
        (this.containerWidth / this.scrollWidth) * 100 + "%"
      );
      this.DOM.scope.style.setProperty(
        "--scrollLleft",
        (this.scrollPos / this.scrollWidth) * 100 + "%"
      );
  
      clearTimeout(this.animated);
      this.animated = setTimeout(() => {
        this.animated = null;
        this.DOM.wrap.style.scrollBehavior = "auto";
      }, 200);
  
      return this;
    },
  
    onMouseMove(e) {
      if (this.animated) return;
  
      this.ratio = this.scrollWidth / this.containerWidth;
  
      var stripePos = e.pageX - this.padding - this.posFromLeft;
  
      if (stripePos < 0) stripePos = 0;
  
      this.pos = stripePos / (this.containerWidth - this.padding * 2);
  
      this.scrollPos = (this.scrollWidth - this.containerWidth) * this.pos;
  
      this.DOM.wrap.scrollLeft = this.scrollPos;
  
      if (this.scrollPos < this.scrollWidth - this.containerWidth)
        this.DOM.scope.style.setProperty(
          "--scrollLleft",
          (this.scrollPos / this.scrollWidth) * 100 + "%"
        );
  
      this.prevMore = this.DOM.wrap.scrollLeft > 0;
      this.nextMore =
        this.scrollWidth - this.containerWidth - this.DOM.wrap.scrollLeft > 5;
  
      this.DOM.scope.setAttribute(
        "data-at",
        (this.prevMore ? "left " : " ") + (this.nextMore ? "right" : "")
      );
    }
  };
  
  var carouselElm = document.querySelector(".carousel");
  new HoverCarousel(carouselElm);