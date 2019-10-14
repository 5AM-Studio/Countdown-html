//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "14 oct 2019 18:50:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	