const mobileMenuBtn = document.querySelector(".mobile-menu__btn");
const globalContainer = document.querySelector("#global-container");
new Menuopen(mobileMenuBtn, globalContainer);
new ScrollObserver(".tween-animate-title", (el, inview) => {
    if (inview) {
        const ta = new TweenTextAnimation(el);
      ta.animate();
    }
});

new ScrollObserver(".hero__sub", (el, inview) => {
    if (inview) {
        el.classList.add("inview");
    } else {
        el.classList.remove("inview");
    }
});

new ScrollObserver(".appear", (el, inview) => {
    if (inview) {
        el.classList.add("inview");
    } else {
        el.classList.remove("inview");
    }
});
