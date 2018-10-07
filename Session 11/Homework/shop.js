var products = [];
$('#buy1').click(function() {
	products.push([
		$("#dep_1").text(),	$("#img_dep_1").attr('src'), $("#price_1").text(), $("#num_of_1").val()
	]);
});
$('#buy2').click(function() {
	products.push([
		$("#dep_2").text(),	$("#img_dep_2").attr('src'), $("#price_2").text(), $("#num_of_2").val()
	]);
});
$('#buy3').click(function() {
	products.push([
		$("#dep_3").text(),	$("#img_dep_3").attr('src'), $("#price_3").text(), $("#num_of_3").val()
	]);
});
$('#buy4').click(function() {
	products.push([
		$("#dep_4").text(),	$("#img_dep_4").attr('src'), $("#price_4").text(), $("#num_of_4").val()
	]);
});
$('#buy5').click(function() {
	products.push([
		$("#dep_5").text(),	$("#img_dep_5").attr('src'), $("#price_5").text(), $("#num_of_5").val()
	]);
});

$('#cart').click(function() {
	localStorage.clear();
	localStorage.setItem("products", JSON.stringify(products));
	console.log(products);
	window.location.assign("cart.html");
});