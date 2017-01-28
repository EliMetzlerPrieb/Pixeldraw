$(document).ready(function() {
	var pixel_count = 0;
	var sketch_pad_size = 500;

	if ((pixel_count == 0) || (pixel_count > 100)) {
		pixel_count = prompt("How big should the grid be? (In pixels)");
	}

	// Appends x = pixel_count number of rows to the statically coded HTML table
	for(var i = 0; i < pixel_count; i++) {
		$("table").append($("<tr></tr>"));
	}
	// Appends x = pixel_count table data elements to each row. Each td includes a 'pixel' class div 
	for(var i = 0; i < pixel_count; i++) {
		$("tr").append($("<td><div class='pixel'></div></td>"));
	}

	// Rounds 'pixel' size to nearest integer to avoid patial pixel display issues
	var size = Math.round(sketch_pad_size/pixel_count);

	// Resizes 'pixel' class division so pixel_count 'pixels' fit into an approximately sketch_pad_size square
	$(".pixel").height(size);
	$(".pixel").width(size);

	// Changes 'pixels' when mouse enters and leaves
	$(".pixel").hover(function() {
		$(this).css("background-color", "black");
	});
	/*$(".pixel").mouseleave(function() {

	});
	*/



});


