// When the user scrolls down 20px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementsByClassName("logo-txt").style.fontSize = "30px";
  } else {
    document.getElementsByClassName("logo-txt").style.fontSize = "90px";
  }
}