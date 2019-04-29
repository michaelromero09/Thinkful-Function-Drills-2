'use strict'

function jediName(firstName, lastName) {
  let name = '';
  name = lastName.slice(0,3) + firstName.slice(0, 2);
  return name;
}

let myJediName = jediName('Michael', 'Romero');
console.log(myJediName);