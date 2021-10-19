function revealImg() {
    if (document.getElementById("explore-image").style.display === 'none'){
        document.getElementById("explore-image").style.display = 'block';
    }
    else {
        document.getElementById("explore-image").style.display = 'none';
    }
}


mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction()
};

function topFunction() {
  document.documentElement.scrollTop = 0;
}

function burgerShow() {
    if (document.getElementById("header-nav").style.display === 'flex') {
        document.getElementById("header-nav").style.display = 'none';
        document.getElementById("intro-title").style.display = 'block';

        // adaptive
        document.getElementById("adaptive-720-container").style.display = 'none';

        document.getElementById("adaptive-720-1").style.display = 'none';

        document.getElementById("low-flex").style.display = 'none';
        document.getElementById("adaptive-720-2-1").style.display = 'none';
        document.getElementById("adaptive-720-2-2").style.display = 'none';

        document.getElementById("mona-liza").style.display = 'block';
    }
    else {
        document.getElementById("header-nav").style.display = 'flex';
        document.getElementById("intro-title").style.display = 'none';

        // adaptive
        document.getElementById("adaptive-720-container").style.display = 'block';

        document.getElementById("adaptive-720-1").style.display = 'block';

        document.getElementById("low-flex").style.display = 'flex';
        document.getElementById("adaptive-720-2-1").style.display = 'block';
        document.getElementById("adaptive-720-2-2").style.display = 'block';

        document.getElementById("mona-liza").style.display = 'none';
    }
}

function burgerShow1024() {
    if (document.getElementById("header-nav").style.display === 'flex') {
        document.getElementById("header-nav").style.display = 'none';
        document.getElementById("intro-title").style.display = 'block';
    }
    else {
        document.getElementById("header-nav").style.display = 'flex';
        document.getElementById("intro-title").style.display = 'none';
    }
}

function burgerShow768() {
    if (document.getElementById("header-nav").style.display === 'flex') {
        document.getElementById("header-nav").style.display = 'none';
        document.getElementById("intro-title").style.display = 'block';

        document.getElementById("adaptive-720-container").style.display = 'none';
        document.getElementById("adaptive-720-1").style.display = 'none';

        document.getElementById("low-flex").style.display = 'none';
        document.getElementById("adaptive-720-2-1").style.display = 'none';
        document.getElementById("adaptive-720-2-2").style.display = 'none';

        document.getElementById("mona-liza").style.display = 'block';

        document.getElementById("welcome-slider").style.display = 'block';

        document.getElementById("line-768-burgerMenuOpen").style.display = 'none';
        
        document.getElementById("media-links-768").style.display = 'none';
    }
    else {
        document.getElementById("header-nav").style.display = 'flex';
        document.getElementById("intro-title").style.display = 'none';

        document.getElementById("adaptive-720-container").style.display = 'block';
        document.getElementById("adaptive-720-1").style.display = 'block';

        document.getElementById("low-flex").style.display = 'flex';
        document.getElementById("adaptive-720-2-1").style.display = 'block';
        document.getElementById("adaptive-720-2-2").style.display = 'block';

        document.getElementById("mona-liza").style.display = 'none';

        document.getElementById("welcome-slider").style.display = 'none';

        document.getElementById("line-768-burgerMenuOpen").style.display = 'block';

        document.getElementById("media-links-768").style.display = 'flex';
    }
}

function burgerShow2() {
    if (document.getElementById("header-nav").style.display === 'flex') {
        document.getElementById("header-nav").style.display = 'none';
        document.getElementById("intro-title").style.display = 'block';

        // adaptive
        document.getElementById("adaptive-420-container").style.display = 'none';

        document.getElementById("intro").style.display = 'block';

        document.getElementById("adaptive-420-1").style.display = 'none';
        document.getElementById("adaptive-420-2").style.display = 'none';
        document.getElementById("adaptive-420-3").style.display = 'none';

        document.getElementById("mona-liza").style.display = 'block';
        document.getElementById("welcome-slider").style.display = 'block';
        document.getElementById("adaptive-420-line").style.display = 'none';
        document.getElementById("media-links").style.display = 'none';

    }
    else {
        document.getElementById("header-nav").style.display = 'flex';
        document.getElementById("intro-title").style.display = 'none';

        // adaptive
        document.getElementById("adaptive-420-container").style.display = 'flex';
        document.getElementById("intro").style.display = 'none';
        document.getElementById("adaptive-420-1").style.display = 'block';
        document.getElementById("adaptive-420-2").style.display = 'block';
        document.getElementById("adaptive-420-3").style.display = 'block';
        document.getElementById("mona-liza").style.display = 'none';
        document.getElementById("welcome-slider").style.display = 'none';
        document.getElementById("adaptive-420-line").style.display = 'block';

        document.getElementById("media-links").style.display = 'flex';

    }
}