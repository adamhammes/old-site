var inputs = document.getElementsByTagName("input");
var resultElement = document.getElementById("result");

for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("change", interestHandler);
}


function interestHandler(event) {
	var p = parseFloat(inputs[0].value) || 0;
	var t = parseFloat(inputs[1].value) || 0;
	var d = parseFloat(inputs[2].value) || 0;
	var r = (parseFloat(inputs[3].value) || 0) / 100;
	var n = parseFloat(inputs[4].value) || 0;

	var total = interest(p, t, d, r, n);
	if (total < 0 || total > 10000000000) {
		total = 0;
	}

	resultElement.innerText = prettyPrint(total);
}

interestHandler();

function interest(p, t, d, r, n) {
	var initial = p * Math.pow(1 + r/n, n * t);
	var accum = d * (Math.pow(1 + r/n, n * t) - 1);
	
	if (r != 0) {
		accum = accum / r * n;
	} else {
		accum = d * n * t;
	}

	return initial + accum;
}

function prettyPrint(num) {
	var fixed = parseFloat(num.toFixed(2));
	return "$" + fixed.toLocaleString();
}
