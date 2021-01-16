function clickMenu() {
    document.getElementById("overlay").classList.toggle("open");
    document.getElementById("button_container").classList.toggle("actived");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("overlay");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('open')) {
        openDropdown.classList.remove('open');
      }
    }
  }
}

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 250) {
            $(".dropbtn").addClass("actived");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".dropbtn").removeClass("actived");
        }
    });
});
