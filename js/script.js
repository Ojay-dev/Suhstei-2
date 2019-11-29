/**** Sidebar ****/
/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "80%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

/**** Hide NavBar ****/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
  document.getElementById("navbar").style.top = "0";
  if (!!this.document.getElementById("sidebar")) {
    document.getElementById("sidebar").style.cssText = "height: calc(100% - 85px); top: 85;";
  }

} else {
  document.getElementById("navbar").style.top = "-100px";
  if (!!this.document.getElementById("sidebar")) {
    document.getElementById("sidebar").style.cssText = "height: 100%; top: 0;";
  }
}
  prevScrollpos = currentScrollPos;
}

/**** Stick footer to bottom ****/
document.addEventListener("DOMContentLoaded", function (event) {
  var element = document.getElementById('wrapper');
  var height = element.offsetHeight;
  if (height < screen.height) {
      document.getElementById("footer").classList.add('stikybottom');
  }
}, false);