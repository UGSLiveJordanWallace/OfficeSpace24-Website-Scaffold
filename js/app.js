let bg = document.getElementById("bg");
let chair = document.getElementById("chair");
let text = document.getElementById("text");
let enter = document.getElementById("enter");
let bottom = document.getElementById("bottom");

if ($(document).width() < 700) {
  document.getElementById("media-image").style.display="none";
}

window.addEventListener('scroll', function() {
  var value = window.scrollY;

  bg.style.top = value * 0.5 + 'px';
  text.style.top = value * 0.4 + 'px';
})

$('.scrollbar a').on('click', function(e) {
  if(this.hash !==""){
    e.preventDefault();
    const hash = this.hash;

    $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 1000);
  }
})

$('#enter').on('click', function(e) {
  bottom.className="far fa-dot-circle";
  enter.className="fas fa-dot-circle";
})

$('#bottom').on('click', function(e) {
  enter.className="far fa-dot-circle";
  bottom.className="fas fa-dot-circle";
})
