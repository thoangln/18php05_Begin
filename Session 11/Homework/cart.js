var getPro = JSON.parse(localStorage.getItem("products"));
var money = [];
var htm = [];
var sumMoney
function invoice() {
	sumMoney = 0;
	console.log(getPro);
	for (var i = 0; i < getPro.length; i++) {
		var price = getPro[i][2];
		price = price.replace('.','');
		price = price.replace('đ','');
		console.log("price",price);
		var intoMoney = parseInt(getPro[i][3]) * parseInt(price);
		var sumMoney = sumMoney + intoMoney;
		console.log(sumMoney);
		money[i] = intoMoney + 'đ';
		console.log(money[i]);
	}
	
	for (var i = 0; i < getPro.length; i++) {
		htm.push(
			'<tr>'+
				'<td>'+ getPro[i][0] +'</td>'+
				'<td><img src="' + getPro[i][1] + '"></td>'+
				'<td>' + getPro[i][2] + '</td>'+
				'<td>' + getPro[i][3] + '</td>'+
				'<td>' + money[i] + '</td>'+
				'<td> <input type="button" name="delete" onclick="del(' + i + ')" value="Trả lại shop"></td>'+
			'</tr>'
		)
	}
	console.log(htm);
	$('#show').html(htm);
	$('.sum').html(sumMoney.toString() + 'đ');
	
}
function del(k) {
	getPro.splice(k, 1);
	console.log(getPro);
	htm.splice(0, htm.length);
	invoice();
}