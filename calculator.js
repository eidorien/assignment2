function add(value1, value2) {
	return parseInt(value1) + parseInt(value2);
}
var name = prompt("Let's play the sume game.\n Please enter your name" , "Name");
var numb1 = prompt("Please enter a number", "0");
var numb2 = prompt("Please enter another number", "0");
var result = add(numb1, numb2);
console.log(result);
var resultNode = document.getElementById("resultContainer");
resultNode.textContent = "Hi, " + name + "! The sum of " + numb1 + " + " + numb2 + " is " + result;