
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
const mmeBox = document.getElementById("mme-box");

const medList = [];
let targetInnerHTML = "";

const createOrder = function () {
  const medName = medSelector.options[medSelector.selectedIndex].text;
  const dose = Number(doseInput.value);
  const frequency = Number(freqSelector.value);
  const morphineEQ = Number(medSelector.value);
  const mme = dose * frequency * morphineEQ;
  const medLabel = `MME: ${mme} - ${medName} ${dose}mg every ${
    24 / frequency
  } hours.`;
  medList.push([medName, dose, frequency, mme, medLabel]);
  createDiv();
  updateMMEText();
  showMMEBox();
};

const createDiv = function () {
  let label = medList[medList.length - 1][4];
  let div = `<div class="medication">${label}</div>`;
  medicationContainer.innerHTML += div;
};

const calcMME = function () {
  let totalMME = 0;
  for (const i of medList) {
    totalMME += i[3];
  }
  return totalMME;
};

const updateMMEText = function () {
  const text = "Total MME: ";
  mmeText.innerText = text + calcMME();
};

const removeActiveClass = function () {
  const elements = document.querySelectorAll(".active");
  elements.forEach((element) => {
    element.classList.remove("active");
  });
};

const removeOrder = function () {
  const activeElement = document.querySelector(".active");

  // stores string value of item
  let activeText = activeElement.innerText;
  console.log("MedList Before: ", medList);

  // scan over the meds and find a match
  for (const med of medList) {
    let medLable = med[4];

    if (medLable == activeText) {
      let index = medList.indexOf(med);
      medList.splice(index, 1);
      removeDivs();
      calcMME();
      updateMMEText();
      // stops cycling through if match is found. 
      break;
    }
  }
};

const showMMEBox = function () {
  mmeBox.classList.remove("hidden");
};

const removeDivs = function () {
  const selectedElements = document.querySelectorAll(".active");
  selectedElements.forEach((n) => n.remove());
};

const reset = function () {
  // medList = [];
  mmeText.innerText = "";
};

addBtn.addEventListener("click", createOrder);
removeBtn.addEventListener("click", removeOrder);
resetBtn.addEventListener("click", reset);

medicationContainer.addEventListener("click", (e) => {
  removeActiveClass();
  // if (e.target && e.target.tagName == "DIV") {
  if (e.target && e.target.classList == "medication") {
    e.target.classList.toggle("active");
    targetInnerHTML = e.target.innerHTML;
  }
});
