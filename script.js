"use strict";

function main() {

	//Some elements are hidden when the page finishes loading.
	$('.projectDescription').hide();


	$('.time-container').toggleClass('hidden');

	//Function to slide toggle some hidden elements when the corresponding button is clicked.
	$('.myButton').on('click', 
		function(){

			$(this).next().slideToggle(500);


		});

	//Function to fade in some hidden elements as the scroll goes down.
	$(window).scroll(function() {

		var bottomWindow = $(this).scrollTop();

		console.log(bottomWindow);

		if(bottomWindow > 1000){
			$('#first-fadeIn').animate({'opacity':'1'}, 1000);
		}

		if(bottomWindow > 1250){
			$('#second-fadeIn').animate({'opacity':'1'}, 1000);
		}

		if(bottomWindow > 1490){
			$('#third-fadeIn').animate({'opacity':'1'}, 1000);
		}

		if(bottomWindow > 1760){
			$('#fourth-fadeIn').animate({'opacity':'1'}, 1000);
		}





	})



}

$(document).ready(main);