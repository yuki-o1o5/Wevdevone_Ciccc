// let myButtonByQuery = document.querySelector("#myButton");
// console.log(myButtonByQuery, "by Query selector");

// myButtonByQuery.addEventListener("click", function () {
//   console.log("I am called");
// });

let useList = [];
let newUser = {};

function setFirstName(event) {
  newUser.firstName(event.target.value);
}

function setLastName(event) {
  newUser.lastName(event.target.value);
}

function setEmail(event) {
  newUser.email(event.target.value);
}

function setTel(event) {
  newUser.tel(event.target.value);
}

function setSubmit() {
  console.log(newUser);
}
