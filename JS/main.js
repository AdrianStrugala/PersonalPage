/* Adding the script tag to the head as suggested before */

//jquery function
$(document).ready(function() {

	$(".music").hide();
});


$(function() {

	var width = 720;
	var animationSpeed = 2000;
	var pause = 5000;
	var currentSlide = 1;

	setInterval(function() {

		var $slideStage = $(".slideStage1");
		var $slider = $slideStage.find(".slider");
		var $slide = $slider.find(".slide");

		$slider.animate({
			"margin-left" : "-=" + width
		}, animationSpeed, function() {
			currentSlide++;
			if (currentSlide === $slide.length) {
				currentSlide = 1;
				$slider.css("margin-left", 0);
			}

		});

	}, pause);
});

$(function() {

	var width = 720;
	var animationSpeed = 2000;
	var pause = 5000;
	var currentSlide = 1;

	setInterval(function() {

		var $slideStage = $(".slideStage2");
		var $slider = $slideStage.find(".slider");
		var $slide = $slider.find(".slide");

		$slider.animate({
			"margin-left" : "-=" + width
		}, animationSpeed, function() {
			currentSlide++;
			if (currentSlide === $slide.length) {
				currentSlide = 1;
				$slider.css("margin-left", 0);
			}

		});

	}, pause);
});

function add(a, b) {
	return a + b;
}
