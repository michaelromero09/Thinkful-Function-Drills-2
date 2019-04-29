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

// beyond(Number.NEGATIVE_INFINITY);

function decode(codedString) {
  if (codedString[0] === 'a' ) {
  return console.log(codedString[1]);
  } else if (codedString[0] === 'b') {
    return console.log(codedString[2]);
  } else if (codedString[0] === 'c') {
    return console.log(codedString[3]);
  } else if (codedString[0] === 'd') {
      return console.log(codedString[4]);
  } else 
  return console.log(" ");
}
decode('craft');
decode('block');
decode('argon');
decode('meter');
decode('bells');
decode('brown');
decode('croon');
decode('droop');