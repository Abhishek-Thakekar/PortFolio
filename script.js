var contact = document.getElementById("contact");
var about = document.getElementById("about");
var feedback = document.getElementById("feedback");

var submit = document.getElementById("submit");
var username = document.getElementById("username");
var password = document.getElementById("password");
var logout = document.getElementById("logout");


if(localStorage.getItem("loggedin") === "true"){
	about.href = "about.html";
	feedback.href="feedback.html";
	contact.href = "contact.html";
	window.location.href="about.html";
}
else{
	about.href = "";
	feedback.href="";
	contact.href = "";
}

submit.addEventListener("click", function(){
  console.log(username.value +" & " + password.value);
  if(username.value==="abhishek" && password.value==="12345678"){
  	// console.log("yesss");
  	localStorage.setItem("loggedin" , "true");
  	// console.log(localStorage.getItem("loggedin"));
  	about.href = "about.html";
  	contact.href="contact.html";
  	feedback.href="feedback.html";
	window.location.href = "about.html";

  }
  else{
  	alert("Wrong username and password !!!")
  	// console.log("noo");
  }
  username.value="";
  password.value="";

});







logout.addEventListener("click" , function(){
	console.log("logging out...")
	localStorage.removeItem("loggedin");	
	console.log("logged out " , localStorage.getItem("loggedin"));
	window.location.href = "index.html";

});

