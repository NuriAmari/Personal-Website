var rows = document.getElementsByClassName("row");

var test = document.body.querySelectorAll(".row div");

var clickedAndHovering = false;

for (var i = 0; i < test.length; i++){

	test[i].addEventListener("mouseover", function (event) {

		event.target.style.boxShadow = "inset 0 9px 12px -9px rgba(0,0,0,0.6), inset 9px 0 12px -9px rgba(0,0,0,0.6), inset -9px 0 12px -9px rgba(0,0,0,0.6), inset 0 -9px 12px -9px rgba(0,0,0,0.6)";
		event.target.innerHTML = "COPY";
		
	});

	console.log(Object.prototype.toString.call(test[i]));

	test[i].addEventListener("mouseout", function (event) {

			event.target.style.boxShadow = "none";
			event.target.innerHTML = "";
	});
}

var clipboard = new Clipboard(test);

clipboard.on('success', function(e) {
    
    var target = e.trigger;

    target.innerHTML = "&#x2714";
});

clipboard.on('error', function(e) {
    console.log(e);
});


$("#redNav").click(function() {
    $('html, body').animate({
        scrollTop: $("#red-heading").offset().top - 80
    }, 1000);
});

$("#blueNav").click(function() {
    $('html, body').animate({
        scrollTop: $("#blue-heading").offset().top - 80
    }, 1000);
});

$("#greenNav").click(function() {
    $('html, body').animate({
        scrollTop: $("#green-heading").offset().top  - 80
    }, 1000);
});

$("#yellowNav").click(function() {
    $('html, body').animate({
        scrollTop: $("#yellow-heading").offset().top - 80
    }, 1000);
});

$("#greyNav").click(function() {
    $('html, body').animate({
        scrollTop: $("#grey-heading").offset().top - 80
    }, 1000);
});