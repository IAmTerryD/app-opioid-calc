"use strict";

// elements
const addBtn = document.getElementById("add-btn");
const resetBtn = document.getElementById("reset-btn");
const medSelector = document.getElementById("med-selector");
const doseInput = document.getElementById("dose-input");
const freqSelector = document.getElementById("frequency-selector");
const mmeText = document.getElementById("mme-text");
const ordersTextId = document.getElementById("orders-text-id");

// values
let totalMME,
  medList = [],
  totalMEE,
  orderText = "";

const createOrder = function () {
  const medName = medSelector.options[medSelector.selectedIndex].text;
  const dose = Number(doseInput.value);
  const frequency = Number(freqSelector.value);
  const morphineEQ = Number(medSelector.value);
  const mme = dose * frequency * morphineEQ;
  const stringVal = `${medName} ${dose}mg every ${24 / frequency} hours.`;

  return [medName, dose, frequency, mme, stringVal];
};

const setTotalMME = function () {
  let sum = 0;
  for (const i of medList) {
    sum += i[3];
  }
  totalMEE = sum;
};

const addMedication = function () {
  medList.push(createOrder());
  console.log(medList);
  showMME();
};

const showMME = function () {
  setTotalMME();
  mmeText.innerText = totalMEE;
};

const reset = function () {
  orderText = "";
  medList = [];
  totalMEE = 0;
  ordersTextId.innerText = "";
  mmeText.innerText = "";
};

addBtn.addEventListener("click", addMedication);
resetBtn.addEventListener("click", reset);


