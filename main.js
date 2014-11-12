$(document).ready( function() {



	$(".button-preview").hover(function() {
		var imgSrc = $(this).attr("data-preview")
		$(".img-preview").attr("src", imgSrc)
		$(".img-preview").fadeIn();
		console.log("displaying: " + imgSrc)
	})


})

$(".img-preview").hide();