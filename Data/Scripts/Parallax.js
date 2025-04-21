window.addEventListener("scroll", function () { Parallax(); }, false);
function Parallax() {
    let pageScroll = (window.scrollY * 0.3) + "px";
    document.getElementById("Background").style.top = pageScroll;
}