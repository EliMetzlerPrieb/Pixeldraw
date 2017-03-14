var canvasSize = 600; // Desired dimensions on display
var pixel_count = 12; // Default width & height of drawinpad in pixels
var pixel_color = "#57d6c9"//Default pixel color

$(document).ready(function(){
	
	// Build array (which calls drawCanvas())
	buildCanvas(pixel_count,canvasSize)

	// Clear drawing upon clicking clear button
	clearCanvas();

	// Resize canvas upon clicking resize button
	resizeCanvas();
})

function buildCanvas(pixel_count, canvasSize) {
	// Appends rows to table with ID = canvas
	for(var i = 0; i < pixel_count; i++) {
		$("#canvas").append($("<tr></tr>"));
	}
	// Appends td with class .pixel to each row
	for(var i = 0; i < pixel_count; i++) {
		$("tr").append($("<td><div class='pixel'></div></td>"));
	}
	// Rounds .pixel size to nearest integer to avoid partial pixel display issues
	var size = Math.round(canvasSize/pixel_count)

	// Resizes .pixel to fit cleanly into the canvas grid 
	$(".pixel").height(size);
	$(".pixel").width(size);

	// Colors pixels
	$(".pixel").css("background-color", "#57d6c9");
	
	drawCanvas();
};

function drawCanvas() {
	$(".pixel").hover(function() {
		$(this).css("background-color","#8df271");
	});
};

function clearCanvas() {
	$("#clear").click(function() {
		$(".pixel").css("background-color","#57d6c9");
	})
};

function resizeCanvas() {
	$("#resize").click(function() {
		$("#canvas").empty();
		pixel_count = prompt("How big should the grid be? (In pixels)");
		console.log(pixel_count);
		buildCanvas(pixel_count, canvasSize);
	})
};

