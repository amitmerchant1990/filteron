/*!
* The MIT License (MIT)
* Copyright (c) 2016 Amit Merchant <bullredeyes@gmail.com>
 */

// Editing image via css properties
function editImage() {
	var grayscale = $("#grayscale").val(); // grayscale
	var blur = $("#blur").val(); // blur
	var brightness = $("#brightness").val(); // brightness
	var ct = $("#ct").val(); // contrast
	var huer = $("#huer").val(); //hue-rotate
	var opacity = $("#opacity").val(); //opacity
	var invert = $("#invert").val(); //invert
	var saturate = $("#saturate").val(); //saturate
	var sepia = $("#sepia").val(); //sepia

	$("#imageContainer img").css("filter", 'grayscale(' + grayscale+
													 '%) blur(' + blur +
													 'px) brightness(' + brightness +
													 '%) contrast(' + ct +
													 '%) hue-rotate(' + huer +
													 'deg) opacity(' + opacity +
													 '%) invert(' + invert +
													 '%) saturate(' + saturate +
													 '%) sepia(' + sepia + '%)');

	$("#imageContainer img").css("-webkit-filter", 'grayscale(' + grayscale+
													 '%) blur(' + blur +
													 'px) brightness(' + brightness +
													 '%) contrast(' + ct +
													 '%) hue-rotate(' + huer +
													 'deg) opacity(' + opacity +
													 '%) invert(' + invert +
													 '%) saturate(' + saturate +
													 '%) sepia(' + sepia + '%)');

}

//When sliders change image will be updated via editImage() function
$("input[type=range]").change(editImage).mousemove(editImage);

// Reset sliders back to their original values on press of 'reset'
$('#filters').on('reset', function () {
	setTimeout(function() {
		editImage();
	},0);
});

//Load image from gallery
var imageLoader = document.getElementById('filteronImage');
    imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) {

        $('.center img').attr('src',event.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
}
