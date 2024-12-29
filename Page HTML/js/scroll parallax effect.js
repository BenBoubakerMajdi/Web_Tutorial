const parallax = document.querySelectorAll("#header");
window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.forEach(function(prllx, i) {
        prllx.style.backgroundPositionY = offset * 0.8 + "px";
    })
})