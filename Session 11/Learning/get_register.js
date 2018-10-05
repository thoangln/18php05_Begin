function get() {
	$('#show').html(
		"<p>Name: " + localStorage.getItem("name") + "</p>" +
		"<p>Birth: " + localStorage.getItem("year") + "</p>" +
		"<p>Gender: " + localStorage.getItem("gender") + "</p>"
	);
}