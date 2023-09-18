function menuScroll() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").classList.remove('p2');
            document.getElementById("navbar").classList.add('p3');
        } else {
            document.getElementById("navbar").classList.remove('p3');
            document.getElementById("navbar").classList.add('p2');
        }
        prevScrollpos = currentScrollPos;
    }
}