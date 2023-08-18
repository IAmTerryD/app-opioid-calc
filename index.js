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
  const newMedication = [medName, dose, frequency, morphineEQ];
  return newMedication;
};

const addMedication = function () {
  medList.push(createOrder());
  console.log(medList);
};

addBtn.addEventListener("click", addMedication);
