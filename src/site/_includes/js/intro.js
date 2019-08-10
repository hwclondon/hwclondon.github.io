function inViewport(el) {
    var H = window.innerHeight,
        r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? H-t : (b<H?b:H));
}

function resize(){
  var intro = document.querySelector('.intro'),
      overlay = document.querySelector('.overlay'),
      caption = document.querySelector('.caption');

  var window_offset = inViewport(intro);

  overlay.style.height = window_offset+'px';
  caption.style.bottom = (window_offset / 4)+'px';

}

var last_known_scroll_position = 0,
    scrolling = false;

window.onresize = resize;
window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  if (!scrolling) {
    window.requestAnimationFrame(function() {
      resize();
      scrolling = false;
    });
  }

  scrolling = true;

});