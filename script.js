$(document).ready(function() {
	var pixel_count = 0;

	if (pixel_count == 0){
		pixel_count = prompt("How big should the grid be? (In pixels)");
	}


	for(var i = 0; i < pixel_count; i++) {
		$("table").append($("<tr></tr>"));
	}

	for(var i = 0; i < pixel_count; i++) {
		$("tr").append($("<td> <div class='pixel'></div> </td>"));
	}

	
	
	

});



/*
$('.pixel').mouseenter(function() {
		$(this).fadeTo('fast',1);
	});
	$('.pixel').mouseleave(function() {
		$(this).fadeIn(400);
	});
*/



/*for (var i = 0; i < pixel_count; i++) {
	
}
*/

