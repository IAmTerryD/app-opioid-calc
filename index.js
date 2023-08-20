"use strict";

// buttons
const addBtn = document.getElementById("add-btn");
const resetBtn = document.getElementById("reset-btn");
const removeBtn = document.getElementById("remove-btn");

// input fields
const medSelector = document.getElementById("med-selector");
const doseInput = document.getElementById("dose-input");
const freqSelector = document.getElementById("frequency-selector");
const mmeText = document.getElementById("mme-text");

// containers
const medicationContainer = document.getElementById("medication-container");

// values
let orderNumber = 0,
  medLabel,
  totalMEE,
  orderText = "";

const medList = [];

const createOrder = function () {
  orderNumber++;
  const medName = medSelector.options[medSelector.selectedIndex].text;
  const dose = Number(doseInput.value);
  const frequency = Number(freqSelector.value);
  const morphineEQ = Number(medSelector.value);
  const mme = dose * frequency * morphineEQ;
  medLabel = `${medName} ${dose}mg every ${24 / frequency} hours.`;
  return [orderNumber, medName, dose, frequency, mme, medLabel];
};

const setTotalMME = function () {
  let sum = 0;
  for (let med of medList) {
    sum += med[4];
    console.log(med[4]);
  }
  totalMEE = sum;
};

const createDiv = function () {
  let div = `<div id="medication-${orderNumber}" class="medication-item">${medLabel} </div>`;
  medicationContainer.innerHTML += div;
};

const addMedication = function () {
  medList.push(createOrder());
  showMME();
  createDiv();
};

const showMME = function () {
  setTotalMME();
  mmeText.innerText = totalMEE;
};

const showOrder = function () {
  orderText += medList[0][4];
};

const removeMedOrder = function () {
  const selectedElements = document.querySelectorAll(".selected");
  let idString, orderNumber;
  selectedElements.forEach((e) => {
    idString = e.id;
    orderNumber = Number(idString.charAt(idString.length - 1));
    let number = orderNumber - 1;
    medList.splice(number, 1);
  });
  setTotalMME();
  showMME();
  removeDiv();
};


const removeDiv = function () { 
  const selectedElements = document.querySelectorAll(".selected");
  selectedElements.forEach((n) => n.remove());
}

const reset = function () {
  orderText = "";
  medList = [];
  totalMEE = 0;
  mmeText.innerText = "";
};

addBtn.addEventListener("click", addMedication);
removeBtn.addEventListener("click", removeMedOrder);
resetBtn.addEventListener("click", reset);

medicationContainer.addEventListener("click", function (event) {
  if (event.target && event.target.tagName == "DIV") {
    event.target.classList.toggle("selected");
  }
});
