for (var i = 1; i <= 20; i++) {
	if (i % 15 == 0) {
		document.write(i + ' chia hết cho 15');
		document.write('<br>');
	} else if (i % 5 == 0) {
		document.write(i + ' chia hết cho 5 <br>');
	} else if (i % 3 == 0) {
		document.write(i + ' chia hết cho 3 <br>');
	} else {
		document.write(i + ' không chia hết cho 3, 5, 15 <br>');
	};
}