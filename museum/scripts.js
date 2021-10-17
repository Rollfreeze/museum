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
    // if (document.getElementById("header-nav").style.display === 'flex') {
    //     document.getElementById("header-nav").style.display = 'none';
    //     document.getElementById("intro-title").style.display = 'block';
    // }
    // else {
    //     document.getElementById("header-nav").style.display = 'flex';
    //     document.getElementById("intro-title").style.display = 'none';
    // }

    if (document.getElementById("header-nav").style.display === 'none') {
        document.getElementById("header-nav").style.display = 'flex';
        document.getElementById("intro-title").style.display = 'none';
    }
    else {
        document.getElementById("header-nav").style.display = 'none';
        document.getElementById("intro-title").style.display = 'block';
    }
}