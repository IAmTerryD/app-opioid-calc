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
let medName, dose, frequency, morphineEQ, mme, totalMME;

// variables
let medList = [],
  totalMEE,
  orderText = "";

const createOrder = function () {
  medName = medSelector.options[medSelector.selectedIndex].text;
  dose = Number(doseInput.value);
  frequency = Number(freqSelector.value);
  morphineEQ = Number(medSelector.value);
  mme = dose * frequency * morphineEQ;
  return [medName, dose, frequency, mme];
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
  showMME();
  showOrder();
};

const showMME = function () {
  setTotalMME();
  mmeText.innerText = totalMEE;
};

const showOrder = function () {
  ordersTextId.innerText += `${medName} ${dose}mg every ${
    24 / frequency
  } hours is ${mme} MME.\n`;
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
