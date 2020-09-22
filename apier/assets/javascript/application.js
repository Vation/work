// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

// ...
//= require_self

// Get the os
var OSName="win";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="win";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="mac";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="linux";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="linux";

function openChat() {
  var chaportExists = document.getElementsByClassName("chaport-window-anim");
  if (chaportExists.length) {
    window.chaport.q('open');
    return false;
  } else {
    window.open("https://app.chaport.com/widget/show.html?appid=5c7d549096553c1ae0cfdfcd", "_blank")
  }
}