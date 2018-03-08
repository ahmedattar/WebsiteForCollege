window.onload = pageload;

function pageload(){ 
	var contactform = document.getElementById("contactform");
	contactform.onsubmit = validate;
	
}
function validate () { 
var name = document.getElementById("custname").value;
if (name == ""){
	alert("your name is required");
return false; }
if(!name.match("[A-Za-z ]+$")){
	alert("only letters or space allowed in named field");
	return false;
}
	var password = document.getElementById("password").value;
if (password == ""){
	alert("your password is required");
return false; }
if(!password.match("[A-Za-z1-9 ]+$")){
	alert("only letters or space or numbers allowed in password field");
	return false;
}
	

	
	
} 

/*

function validate () { 
var password = document.getElementById("password").value;
if (password == ""){
	alert("your password is required");
	return false;
	
} 
}
function myFunction() {
var text = "";
var i;
for (i = 0; i < 20; i++) {
text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
}
*/
 /*
function validate () {
	var age = document.getElementById("age").value;
if (age == ""){
	alert("your age is required");
	return false;
} 
}
/*
 function validate () {
	 var email = document.getElementById("email").value;
if (email == ""){
	alert("your email is required");
	return false;
} 
}
function validate () {
	var telephone = document.getElementById("telephone").value;
if (telephone == ""){
	alert("your telephone is required");
	return false;
} 
}
/*
function validate () {
	var city = document.getElementById("city").value;
if (city == ""){
	alert("your city is required");
	return false;
} 
}
*/
/*
if(!name.match(/[A-Za-z ]+$)){
	alert("only letters or space allowed in named field");
	return false;
}
if(!email.match(/[A-Za-z1-9]+@[A-Za-z1-9]+.[A-Za-z1-9])){
	alert("only letters or space allowed in named field");
	return false;
}
*/