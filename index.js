"use strict";

// elements
const addBtn = document.getElementById("add-btn");
const resetBtn = document.getElementById("reset-btn");
const medSelector = document.getElementById("med-selector");
const doseInput = document.getElementById("dose-input");
const freqSelector = document.getElementById("frequency-selector");
const mmeText = document.getElementById("mme-text");
const ordersTextId = document.getElementById("orders-text-id");

// variables
let medList = [];
let totalMEE = 0;
let orderText = "";

// array functions
const createOrder = function () {
  const medName = medSelector.options[medSelector.selectedIndex].text;
  const dose = Number(doseInput.value);
  const frequency = Number(freqSelector.value);
  const morphineEQ = Number(medSelector.value);
  const mme = dose * frequency * morphineEQ;
  const newMedication = [medName, dose, frequency, mme];
  const string = `${medName} ${dose}mg every ${
    24 / frequency
  } hours is ${mme} MME.\n`;
  orderText += string;
  return newMedication;
};

const addMedication = function () {
  medList.push(createOrder());
  console.log(medList);
  getTotalMME();
  showMME();
  showOrder();
};

const showMME = function () {
  mmeText.innerText = totalMEE;
};

const showOrder = function () {
  ordersTextId.innerText = orderText;
};

const getTotalMME = function () {
  let sum = 0;

  for (let i = 0; i < medList.length; i++) {
    sum += medList[i][3];
  }
  totalMEE = sum;
  return sum;
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
