var password = "toasters6";

var user_guess = prompt("What is the password?");

if (user_guess === "toasters6") {
  alert("Good guess! That's right!");
} else {
  alert("No, sorry it's " + password + ".");
}