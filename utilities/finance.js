var inputs = document.getElementsByTagName("input");
var resultElement = document.getElementById("result");

for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("change", interestHandler);
}


function interestHandler(event) {
	var p = parseFloat(inputs[0].value) || 0;
	var t = parseFloat(inputs[1].value) || 0;
	var d = parseFloat(inputs[2].value) || 0;
	var dn = parseFloat(inputs[3].value) || 0;
	var r = (parseFloat(inputs[4].value) || 0) / 100;
	var rn = parseFloat(inputs[5].value) || 0;

	var total = interest(p, t, d, dn, r, rn);
	if (total < 0 || total > 10000000000) {
		total = 0;
	}

	resultElement.innerText = prettyPrint(total);
}

interestHandler();

function interest(p, t, d, dn, r, rn) {
	var interestPercentage = r / rn;
	// assuming possible values for dn and rn are 12, 4, 1
	dn = 12 / dn;
	rn = 12 / rn;
	
	var numPeriods = t * 12;
	var currentMoney = p;

	for (var i = 1; i <= numPeriods; i++) {
		if (i % rn == 0) {
			currentMoney += currentMoney * interestPercentage;
		}

		if (i % dn == 0) {
			currentMoney += d;
		}
	}

	return currentMoney;
}

function prettyPrint(num) {
	var fixed = parseFloat(num.toFixed(2));
	return "$" + fixed.toLocaleString();
}
