class Menuopen {
    constructor(btnEl,toggleEl) {
        this.btnEl = btnEl;
        this.toggleEl = toggleEl;
        this.btnEl.addEventListener("click", () => {
            this._toggle()
        })
    }
    _toggle() {
        this.toggleEl.classList.toggle("menu-open");
    }
}