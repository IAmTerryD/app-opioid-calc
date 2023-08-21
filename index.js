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

// container for delegation
const medicationContainer = document.getElementById("medication-container");

const medList = [];

let orderNumber;

const createOrder = function () {

  const medName = medSelector.options[medSelector.selectedIndex].text;
  const dose = Number(doseInput.value);
  const frequency = Number(freqSelector.value);
  const morphineEQ = Number(medSelector.value);
  const mme = dose * frequency * morphineEQ;
  const medLabel = `MME: ${mme} - ${medName} ${dose}mg every ${24 / frequency} hours.`;
  medList.push([medName, dose, frequency, mme, medLabel]);
  createDiv();
  // updateMMEText();
};

const createDiv = function () { 
  let label = medList[medList.length-1][4];
  let div = `<div id="medication-${orderNumber}" class="medication">${label}</div>`;
  medicationContainer.innerHTML += div;
};

const calcMME = function () {
  let totalMME = 0;

  for (const i of medList) {
    totalMME += i[3];
    console.log(i[3]);
  }
  return totalMME;
};

const updateMMEText = function () {
  mmeText.innerText = calcMME();
};

const removeActiveClass = function () { 
  const elements = document.querySelectorAll(".active");
  elements.forEach((element) => {
    element.classList.remove('active');
  });
}

const removeOrder = function () {
  const activeElement = document.querySelector('.active');
  const medicationID = activeElement.id;
  const order = Number(medicationID.charAt(medicationID.length-1));
  const index = order - 1;
  console.log(medList[index]);
  medList.splice(index, 1);
  calcMME();
  removeDivs();
  updateMMEText();
};


const removeDivs = function () { 
  const selectedElements = document.querySelectorAll(".active");
  selectedElements.forEach((n) => n.remove());
}

const reset = function () {
  medList = [];
  mmeText.innerText = "";
};

addBtn.addEventListener("click", createOrder);
removeBtn.addEventListener("click", removeOrder);
resetBtn.addEventListener("click", reset);

medicationContainer.addEventListener("click", e => {
    removeActiveClass();
    if (e.target && e.target.tagName == "DIV") {
      e.target.classList.toggle("active");
    }
  });

