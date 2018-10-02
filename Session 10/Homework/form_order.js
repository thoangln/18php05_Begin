$('#submit').click(function(){
	for (var i = 1; i <= 5; i++) {
		if ($('#id'+i).val() == "") {
			$('.cl'+i).html('Vui lòng nhập');
		} else {
			$('.cl'+i).html('');
			if ($('#id3').val() > $('#id2').val()) {
			$('.cl3').html('Số trẻ em không được lớn hơn số người lớn!');
			} else {
				$('.cl3').html('');
			}
			var today = new Date();
			var day_come = new Date($('#id4').val());
			var day_leave = new Date($('#id5').val());
			if ((day_come < today) && (day_come != "")) {
				$('.cl4').html('Ngày đến phải lớn hơn hoặc bằng ngày hiện tại!');
			} else {
				$('.cl4').html('');
			}
			if ((day_leave < day_come) && (day_come != "") && (day_leave != "")) {
				$('.cl5').html('Ngày đi phải lớn hơn hoặc bằng ngày đến!');
			} else {
				$('.cl5').html('');
			}
		}
	}
});