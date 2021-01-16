$(function() {
	// (Optional) Active an item if it has the class "is-active"
	$(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

	$(".accordion > .accordion-item").click(function() {
		// Cancel the siblings
		$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
		// Toggle the item
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	});
});


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 250) {
            $(".back").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".back").removeClass("active");
        }
    });
});
