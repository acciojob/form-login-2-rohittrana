//your JS code here. If required.
let firstName=document.getElementById("firstName");
let lastName=document.getElementById("lastName");
let phone=document.getElementById("phone");
let email=Document.getElementById("email");
let result=Document.getElementById("result");
result.addEventListner('click',function(){
	alert(
		"First Name: " + firstName.value + "\n" +
		"Last Name: " + lastName.value + "\n" +
		"Phone: " + phone.value + "\n" +
		"Email: " + email.value
	);
})
