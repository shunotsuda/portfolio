window.addEventListener("load", () => {
    const jsLoader = document.getElementById("js-loader");
    setTimeout(() => {
        jsLoader.style.opacity = 0;
    }, 1000);
    setTimeout(() => {
        jsLoader.style.display = "none";
    }, 2500);
});
