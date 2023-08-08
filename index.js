"use strict";

// elements
const addBtn =document.getElementById('btn--add');
const factor = document.getElementById("select--med");
const dose = document.getElementById("text--dose");
const freq = document.getElementById("select--freq");
let mme = document.getElementById("mme");

// variables
let sum = 0; 
let string; 
const meds = [];

const add = function (number) { 
  sum += number
  console.log("Sum: " + sum);
  console.log("Array: " + meds);
  mme.textContent = sum;
  return sum;
}

// const display = function () { 
//   for (i in meds) {

//   }
//   // string = JSON.stringify(meds);
//   // mme.textContent = string;
// }

addBtn.addEventListener("click", function () {
  let x = Number(freq.value);
  let y = Number(dose.value);
  let z = Number(factor.value);
  let number = x * y * z;
  
  const select = document.getElementById("select--med");
  const { text } = [...select.options].find((option) => option.selected);

  meds.push([text,x,y]);
  add(number);
  display()
});
