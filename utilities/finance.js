var inputs = document.getElementsByTagName("input");
var resultElement = document.getElementById("result");

for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("change", interestHandler);
}

function interestHandler(event) {
	var initialValue = parseFloat(inputs[0].value) || 0;
	var years = parseFloat(inputs[1].value) || 0;
	var interestRate = parseFloat(inputs[2].value) || 0;

	var total = interest(initialValue, years, interestRate);

	resultElement.innerText = total;
}

function interest(initialValue, years, interestRate) {
	var mantissa = 1 + interestRate / 100;
	return initialValue * Math.pow(mantissa, years);
}
