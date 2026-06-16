document.getElementById("calc").onclick = function() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
   resultMean(calcMean(num1, num2, num3)); 
};

var resultMean = function (meanVal) {
    document.getElementById("mean").innerHTML =meanVal;
};

function calcMean(num1, num2, num3) {
mean = (num1 + num2 + num3)/3;
return mean;
};