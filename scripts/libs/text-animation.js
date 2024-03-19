class TextAnimation {
    constructor(el) {
      this.DOM = {};
      this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
      this.chars = this.DOM.el.innerHTML.trim().split("");
      this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
      return this.chars.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, "&nbsp;");
        return `${acc}<span class="char">${curr}</span>`;
      }, "");
    }
    animate() {
      this.DOM.el.classList.toggle("inview");
    }
  }
  class TweenTextAnimation extends TextAnimation {
    constructor(el) {
      super(el);
      this.DOM.chars = this.DOM.el.querySelectorAll(".char");
    }
  
    animate() {
      this.DOM.el.classList.add("inview");
      this.DOM.chars.forEach((c, i) => {
        c.animate(
          {
            opacity: [0, 1],
            translateY: ["-50%", 0],
          },
          {
            duration: 1000,
            easing: "linear",
            fill: "both",
            delay: i * 70 +1000,
          }
        );
      });
    }
  }
  