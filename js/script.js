var link = document.querySelector(".open-content");
var popup = document.querySelector(".popup-write-us");
var close = popup.querySelector(".close-popup");

   link.addEventListener("click", function(event) {
     event.preventDefault();
     popup.classList.add("popup-write-us-show");
      });

     close.addEventListener("click", function(event) {
       event.preventDefault();
       popup.classList.remove("popup-write-us-show");
     });

});







    
