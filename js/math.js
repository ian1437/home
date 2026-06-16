
document.getElementById("calc").onclick = function() {
    var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var num3 = parseInt(document.getElementById("num3").value);
   	resultMin(calcMin(num1 , num2, num3)); 
   	resultMax(calcMax(num1 , num2, num3)); 
   	resultMed(calcMed(num1 , num2, num3)); 
   	resultMean(calcMean(num1 , num2, num3)); 
   	resultRange(calcRange(num1 , num2, num3)); 
	};

	var resultMin = function (minVal) {
     document.getElementById("min").innerHTML =minVal;
	};
	var resultMax = function (maxVal) {
     document.getElementById("max").innerHTML =maxVal;
	};
	var resultMed = function (medVal) {
     document.getElementById("med").innerHTML =medVal;
	};
	var resultMean = function (meanVal) {
     document.getElementById("mean").innerHTML =meanVal;
	};
	var resultRange = function (rangeVal) {
     document.getElementById("range").innerHTML =rangeVal;
	};

	function calcMin(num1, num2, num3) {
		minVal = Math.min(num1, num2, num3)
    	return (minVal);
	};
	function calcMax(num1, num2, num3) {
		maxVal = Math.max(num1, num2, num3)
    	return (maxVal);
	};
	function calcMed(num1, num2, num3) {
		
		medVal = (num1 + num2 + num3) - (calcMax(num1, num2, num3) + calcMin(num1, num2, num3))
   		return (medVal);
	}
	function calcMean(num1, num2, num3) {
		meanVal = parseFloat((num1 + num2 + num3)/3).toFixed(2);
    	return (meanVal);
	};
	function calcRange(num1, num2, num3) {
		rangeVal = calcMax(num1, num2, num3) - calcMin(num1, num2, num3)
    	return (rangeVal);
	};