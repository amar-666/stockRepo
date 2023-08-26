function calcLevels(){

var HIGH = parseInt(document.getElementById("high").value);
var LOW = parseInt(document.getElementById("low").value);
var CLOSE = parseInt(document.getElementById("close").value);
var RANGE = HIGH - LOW;
var H1 = CLOSE + RANGE * 1.1/12;
var H2 = CLOSE + RANGE * 1.1/6;
var H3 = CLOSE + RANGE * 1.1/4;
var H4 = CLOSE + RANGE * 1.1/2;
var H5 = H4 + 1.168 * (H4-H3);
var H6 = (HIGH/LOW) * CLOSE;
var PP = (HIGH + LOW + CLOSE) / 3;
var L1 = CLOSE - RANGE * 1.1/12;
var L2 = CLOSE - RANGE * 1.1/6;
var L3 = CLOSE - RANGE * 1.1/4;
var L4 = CLOSE - RANGE * 1.1/2;
var L5 = L4 - 1.168 * (L4-L3);
var L6 = CLOSE - (H6 - CLOSE);
document.getElementById("h6").innerText = parseFloat(H6).toFixed(2);
document.getElementById("h5").innerText = parseFloat(H5).toFixed(2);
document.getElementById("h4").innerText = parseFloat(H4).toFixed(2);
document.getElementById("h3").innerText = parseFloat(H3).toFixed(2);
document.getElementById("h2").innerText = parseFloat(H2).toFixed(2);
document.getElementById("h1").innerText = parseFloat(H1).toFixed(2);
document.getElementById("pp").innerText = parseFloat(PP).toFixed(2);
document.getElementById("l6").innerText = parseFloat(L6).toFixed(2);
document.getElementById("l5").innerText = parseFloat(L5).toFixed(2);
document.getElementById("l4").innerText = parseFloat(L4).toFixed(2);
document.getElementById("l3").innerText = parseFloat(L3).toFixed(2);
document.getElementById("l2").innerText = parseFloat(L2).toFixed(2);
document.getElementById("l1").innerText = parseFloat(L1).toFixed(2);

document.getElementById("levels").style.display="block";
}
