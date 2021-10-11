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