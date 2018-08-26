"use strict";

function main() {

	$('.projectDescription').hide();
	$('.time-container').hide();
	$('.myButton').on('click', 
		function(){

			$(this).next().slideToggle(500);


		});

	$(window).scroll(function() {

		var bottomWindow = $(this).scrollTop();

		console.log(bottomWindow);

		if(bottomWindow > 1000){
			$('#first-fadeIn').fadeIn(400);
		} else{
			$('#first-fadeIn').fadeOut(400);
		}

		if(bottomWindow > 1250){
			$('#second-fadeIn').fadeIn(400);
		} else{
			$('#second-fadeIn').fadeOut(400);
		}

		if(bottomWindow > 1490){
			$('#third-fadeIn').fadeIn(400);
		} else{
			$('#third-fadeIn').fadeOut(400);
		}

		if(bottomWindow > 1760){
			$('#fourth-fadeIn').fadeIn(400);
		} else{
			$('#fourth-fadeIn').fadeOut(400);
		}



	})



}

$(document).ready(main);