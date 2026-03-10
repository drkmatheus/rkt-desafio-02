const numberInput = document.getElementById("number-input");
const minInput = document.getElementById("min-input");
const maxInput = document.getElementById("max-input");
const form = document.querySelector("form");
const checkbox = document.getElementById("toggle-button");

const drawnNumbers = [];

form.onsubmit = (event) => {
  event.preventDefault();
  displayResult();
};

const result = function drawNumber() {
  const numbersQuantity = Number(numberInput.value);
  const minRange = Number(minInput.value);
  const maxRange = Number(maxInput.value);
  const allowDuplicates = !checkbox.checked;

  drawnNumbers.length = 0;

  if (!minRange || !maxRange || !numbersQuantity) {
    alert("Preencha todos os campos para realizar o sorteio.");
    return;
  }

  if (numbersQuantity > maxRange) {
    alert(
      "A quantidade de números a serem sorteados deve ser menor que o valor máximo.",
    );
    return;
  }

  minRange < 0 || maxRange < 0
    ? alert("Os valores mínimo e máximo devem ser positivos.")
    : null;
  minRange >= maxRange
    ? alert("O valor mínimo deve ser menor que o valor máximo.")
    : null;

  if (numbersQuantity > 0 && minRange < maxRange) {
    while (drawnNumbers.length < numbersQuantity) {
      const generateNumber =
        Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
      if (allowDuplicates) {
        drawnNumbers.push(generateNumber);
      } else {
        if (!drawnNumbers.includes(generateNumber)) {
          drawnNumbers.push(generateNumber);
        }
      }
    }
    return drawnNumbers;
  }
};

function displayResult() {
  const resultElement = document.getElementById("result-list");

  resultElement.innerHTML = "";
  const drawnNumbers = result();

  drawnNumbers.forEach((element) => {
    const createLi = document.createElement("li");
    createLi.textContent = element;
    resultElement.appendChild(createLi);
  });
}
