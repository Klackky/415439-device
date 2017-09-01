var link = document.querySelector(".write-us");
var popup = document.querySelector(".popup-write-us");
var close = popup.querySelector(".close-popup");
var login = popup.querySelector("[name=your-name]");

link.addEventListener("click", function(event) {
 event.preventDefault();
popup.classList.add("popup-write-us-show");


close.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.remove("popup-write-us-show");
});

window.addEventListener("keydown", function(event) {
 if (event.keyCode === 27) {
   if (popup.classList.contains("popup-write-us-show")) {
     popup.classList.remove("popup-write-us-show");
   }
 }
});


var btnMap = document.querySelector(".map");
var map = document.querySelector(".map-popup");
var closeMap = document.querySelector(".close-map");

btnMap.addEventListener("click", function(event) {
 event.preventDefault();
 map.classList.add("map-popup-show");
});
closeMap.addEventListener("click", function(event) {
event.preventDefault();
map.classList.remove("map-popup-show");

});


});
