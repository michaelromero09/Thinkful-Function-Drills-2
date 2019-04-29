"use strict";

function jediName(firstName, lastName) {
  let name = "";
  name = lastName.slice(0, 3) + firstName.slice(0, 2);
  return name;
}

let myJediName = jediName("Michael", "Romero");
// console.log(myJediName);

function beyond(num) {
  if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
    console.log("And Beyond!");
  } else if (num > 0) {
    console.log("To Infinity!");
  } else if (num < 0) {
    console.log("To Negative Infinity!");
  } else if (num === 0) {
    console.log("Staying Home");
  } else {
    console.log("Not an integer!");
  }
}

beyond(Number.NEGATIVE_INFINITY);
