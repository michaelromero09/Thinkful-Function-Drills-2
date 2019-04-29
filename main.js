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
  if (codedString[0] === "a") {
    return console.log(codedString[1]);
  } else if (codedString[0] === "b") {
    return console.log(codedString[2]);
  } else if (codedString[0] === "c") {
    return console.log(codedString[3]);
  } else if (codedString[0] === "d") {
    return console.log(codedString[4]);
  } else return console.log(" ");
}
// decode('craft');
// decode('block');
// decode('argon');
// decode('meter');
// decode('bells');
// decode('brown');
// decode('croon');
// decode('droop');

function howManyDays(month, leapYear) {
  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      return `${month} has 31 days`;
    case "April":
    case "June":
    case "September":
    case "November":
      return `${month} has 30 days`;
    case "February":
      if (leapYear) {
        return `${month} has 29 days`;
      } else {
        return `${month} has 28 days`;
      }
    default:
      return "Must provide a valid month";
  }
}

// console.log(howManyDays('June', true));

function shoot(num) {
  const randomNo = Math.floor(Math.random() * 3) + 1;
  if (num === randomNo) {
    return console.log("Tie!");
  } else if (num === 1 && randomNo == 2) {
    console.log("You chose Rock, They chose Paper. You lose!");
  } else if (num === 1 && randomNo == 3) {
    console.log("You chose Rock, They chose Scissors. You win!");
  } else if (num === 2 && randomNo == 1) {
    console.log("You chose Paper, They chose Rock. You win!");
  } else if (num === 2 && randomNo == 3) {
    console.log("You chose Paper, They chose Scissors. You lose!");
  } else if (num === 3 && randomNo == 1) {
    console.log("You chose Scissors, They chose Rock. You lose!");
  } else if (num === 3 && randomNo == 2) {
    console.log("You chose Scissors, They chose Paper. You win!");
  }
}
shoot(1);
//1=Rock, 2=Paper, 3=Scissors
