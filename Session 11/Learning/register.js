$("#submit").click(function() {
	var i, j, k;
	for (j = 3; j < 7; j++) {
		if ($('#id'+j).val() != null) {
			$(".lb3").html("");
			k = 1;
		 	break;
		} else {
			k = 0;
			$(".lb3").html("Vui lòng nhập!");
		}
	}
	if (k == 1){	
		for (i = 1; i <= 2; i++) {
			if ($("#id"+i).val() == "") {
				$(".lb"+i).html("Vui lòng nhập!");
			} else if (($('#id2').val() > Date.now()) || ($('#id2').val() <= 1900)){
				$(".lb2").html("Năm sinh lớn hơn 1900, nhỏ hơn năm hiện tại");
			} else if ($('input[name = gender]:checked').val() == "Nam"){
			window.location.assign("nam.html")
			} else if ($('input[name = gender]:checked').val() == "Nu"){
			window.location.assign("nu.html")
			} else {
				$(".lb"+i).html("");
			}
		}
	}
	if ($('input[name = gender]:checked').val() == null) {
		$(".lb4").html('Vui lòng nhập!');
	} else {
			$(".lb4").html("");
	}
	
	localStorage.setItem("name", $('#id1').val());
	localStorage.setItem("year", $('#id2').val());
	localStorage.setItem("gender", $('input[name = gender]:checked').val());
	localStorage.setItem("favor", $('#id3').val());
});