const gridContainer = document.querySelector(".container");
const clearButton = document.querySelector(".clear-grid");
const generateButton = document.querySelector(".submit");
const input = document.querySelector("#input");

window.addEventListener("load", function () {
  gridNumber = 16;
  createGrid(gridNumber);
});
clearButton.addEventListener("click", function () {
  input.style.display = "block";
  generateButton.style.display = "block";
  clearButton.style.display = "none";
  gridContainer.innerHTML = "";
});

// Creat Grid

let gridNumber;
generateButton.addEventListener("click", function (e) {
  gridNumber = input.value;
  if (
    gridNumber == "" ||
    gridNumber > 100 ||
    isNaN(gridNumber) ||
    gridNumber == 0
  ) {
    alert("Enter a number between 0 and 101");
  } else {
    createGrid(gridNumber);
  }
  clearButton.style.display = "block";
  generateButton.style.display = "none";
  input.style.display = "none";
});

function createGrid(gridNumber) {
  gridContainer.innerHTML = "";
  for (let i = 0; i < gridNumber; i++) {
    let createRow = document.createElement("DIV");
    createRow.classList.add("row");
    gridContainer.appendChild(createRow);
    for (j = 0; j < gridNumber; j++) {
      let createBox = document.createElement("DIV");
      createBox.classList.add("box");
      createRow.appendChild(createBox);
    }
  }
  hoverEffect();
}

// Hover effect

function hoverEffect() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach(function (box) {
    box.addEventListener("mouseover", function () {
      box.style.backgroundColor = color;
      getRandomColor();
    });
  });
}

// Random Color Generator

let color;
function getRandomColor() {
  const colorCodes = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let selectedArray = [];
  for (let i = 0; i < 6; i++) {
    selectedArray.push(
      colorCodes[Math.floor(Math.random() * (colorCodes.length - 1))]
    );
  }
  color = `#${selectedArray.join("")}`;
}
