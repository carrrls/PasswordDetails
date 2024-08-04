const inputBox = document.querySelector("#password");
const outputBox = document.querySelector("#output");
console.log(inputBox, outputBox);

inputBox.addEventListener("input", () => {
  let password = inputBox.value;
  console.log(password);
  if (password.search(/[a-z]/) == -1) {
    outputBox.style.color = "red";
    outputBox.innerHTML = " enter a lowercase letter";
  } else if (password.search(/[A-Z]/) == -1) {
    outputBox.style.color = "red";
    outputBox.innerHTML = " enter a uppercase letter";
  } else if (password.search(/[! \,@\ ,# \,$\ ,\%]/) == -1) {
    outputBox.style.color = "red";
    outputBox.innerHTML = " enter a spec letter";
  } else if (password.search(/[0-9]/) == -1) {
    outputBox.style.color = "red";
    outputBox.innerHTML = " enter a number";
  } else if (password.length < 12) {
    outputBox.style.color = "red";
    outputBox.innerHTML = "password is too short";
  } else {
    outputBox.style.color = "green";
    outputBox.innerHTML = " password is valid";
  }
});
