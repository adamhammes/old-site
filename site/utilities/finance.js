var principalElem = document.getElementById("principal");
var yearsElem = document.getElementById("years");
var depositAmountElem = document.getElementById("depositAmount");
var depositRateElem = document.getElementById("depositRate");
var interestRateElem = document.getElementById("interestRate");
var compoundFrequencyElem = document.getElementById("compoundFrequency");

var resultElement = document.getElementById("result");

var inputs = [principalElem, yearsElem, depositAmountElem, depositRateElem, interestRateElem,
    compoundFrequencyElem];

for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("change", interestHandler);
}

globalResult = 0;

function interestHandler() {
	var principal = parseFloat(principalElem.value) || 0;
	var years = parseFloat(yearsElem.value) || 0;
	var deposit = parseFloat(depositAmountElem.value) || 0;
	var dn = parseFloat(depositRateElem.value) || 0;
	var interestRate = (parseFloat(interestRateElem.value) || 0) / 100;
	var rn = parseFloat(compoundFrequencyElem.value) || 0;

	var total = calculateSavings(principal, years, deposit, dn, interestRate, rn);
	if (total < 0 || total > 10000000000) {
		total = 0;
	}

	resultElement.innerText = prettyPrint(total);
}

interestHandler();

function calculateSavings(principal, years, deposit, dn, rate, rn) {
	var interestPerPeriod = rate / rn;

	// find the period of the deposit rate and calculateSavings rate
	dn = 12 / dn;
	rn = 12 / rn;
	
	var numPeriods = years * 12;
	var currentMoney = principal;

	for (var i = 1; i <= numPeriods; i++) {
		if (i % rn == 0) {
			currentMoney += currentMoney * interestPerPeriod;
		}

		if (i % dn == 0) {
			currentMoney += deposit;
		}
	}
	globalResult = currentMoney;
	return currentMoney;
}

function prettyPrint(num) {
	var fixed = parseFloat(num.toFixed(2));
	return "$" + fixed.toLocaleString();
}
