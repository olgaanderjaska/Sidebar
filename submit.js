
$(".btn1").on("click", function(e){
	e.preventDefault();
	$(".sidebar").removeClass("is-hidden");
})

$(".btn2").on("click", function(e){
	e.preventDefault();
	$(".sidebar").addClass("is-hidden");
})