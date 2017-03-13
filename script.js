$(document).ready(function(){
	var drawingPad = new drawingPad();
	var canvasSize = 600; //Desired dimension of pad in display pixels
	var defaultPixel = 25; //Desired dimension of pad in "8 bit" style pixels

	drawingPad.build();
	drawingPad.draw();


function drawingPad(pixel_count=defaultPixel) {

	// Builds drawing pad consisting of pixel_count x pixel_count macro pixels
	// in a canvasSize x canvasSize space
	this.build = function(pixel_count=defaultPixel) {
		// Appends i = pixel_count number of rows to the statically coded HTML table
		for(var i = 0; i < pixel_count; i++) {
			$("table").append($("<tr></tr>"));
		}

		//Appends i = pixel_count table data elements to each row. Each td includes a 'pixel' class div 
		for(var i = 0; i < pixel_count; i++) {
			$("tr").append($("<td><div class='pixel'></div></td>"));
		}

		// Rounds 'pixel' size to nearest integer to avoid partial pixel display issues
		var size = Math.round(canvasSize/pixel_count)

		// Resizes 'pixel' class division so pixel_count 'pixels' fit into an approximately sketch_pad_size square
		$(".pixel").height(size);
		$(".pixel").width(size);
	}

	// Provides functionality for dynamic changes when mouse moves through a pixel
	this.draw = function () {
		// Changes 'pixels' when mouse enters and
		$(".pixel").hover(function() {
			$(this).css("background-color", "black");
		});
	}

	// Resets function and prompts for a different size grid if desired
	this.clear = function () { 
		pixel_count = prompt("How big should the grid be? (In pixels)");
		this.build;
	}
}

})