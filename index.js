"use strict";

// elements
const addBtn = document.getElementById("add-btn");
const medSelector = document.getElementById("med-selector");
const doseInput = document.getElementById("dose-input");
const freqSelector = document.getElementById("frequency-selector");

// variables
const medList = [];

// array functions
const createOrder = function () {
  const medName = medSelector.options[medSelector.selectedIndex].text;
  const dose = Number(doseInput.value);
  const frequency = Number(freqSelector.value);
  const morphineEQ = Number(medSelector.value);
  const mme = dose * frequency * morphineEQ;
  const newMedication = [medName, dose, frequency, mme];
  return newMedication;
};

const addMedication = function () {
  medList.push(createOrder());
  console.log(medList);
  getTotalMME();
};

const getTotalMME = function () {
  let sum = 0;

  for (let i = 0; i < medList.length; i++) {
    sum += medList[i][3];
    console.log(medList[i][3]);
  }
  console.log("sum ", sum);
  return sum;
};

// const getMME = function (){
//   for (let i = 0; i < medList.length; i++ ) {
//     console.log(medList[]);
//   }
// }

// const getMME = function (){
//   for (let i = 0; i < medList.length; i++ ) {
//     console.log(medList[]);
//   }
// }

addBtn.addEventListener("click", addMedication);
