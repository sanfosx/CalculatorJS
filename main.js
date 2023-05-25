// Variables de estado
let currentNumber = "";
let operation = "";
let previousNumber = "";
let resultExpresion = "";
let ctrlOperation = 0;
// Función para actualizar el resultado en pantalla
function updateResult() {
  resultElement = document.getElementById("result");
  resultElement.textContent = resultExpresion || "0";
}
// Función para manejar el evento de clic en los botones numéricos
function handleNumberClick(number) {
  currentNumber += number;
  resultExpresion = previousNumber + (operation || "") + currentNumber;
  updateResult();
}
// Función para manejar el evento de clic en los botones de operación
function handleOperationClick(operator, ctrlOperation) {
  if (ctrlOperation == 1) {
    previousNumber = resultExpresion;
    operation = operator;
    resultExpresion += operator;
    currentNumber = "";
    updateResult();
  }
}
// Función para realizar el cálculo y obtener el resultado
function calculate() {
  if ((previousNumber !== "") & (currentNumber !== "")) {
    console.log("calculo");
    let result = 0;
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }
    resultExpresion = result.toString();
    operation = "";
    ctrlOperation = 0;
    previousNumber = result;
    currentNumber = "";
    updateResult();
  }
}
// Función para borrar la calculadora
function clearCalculator() {
  console.log("Borrar");
  currentNumber = "";
  operation = "";
  previousNumber = "";
  resultExpresion = 0;
  ctrlOperation = 0;
  updateResult();
}

//Creo la vista
const container= document.getElementById("container")
const sectionNavbar = document.createElement("div")
sectionNavbar.className="hero";
const sectionFooter = document.createElement("p")
sectionFooter.textContent="By SanFosX"
const tittle = document.createElement("h1")
tittle.textContent="Calculadora"
const btnToggle = document.createElement("button")
btnToggle.textContent="!"
btnToggle.id="btnChange"
sectionNavbar.appendChild(tittle)
sectionNavbar.appendChild(btnToggle)
const calculatorContainer = document.createElement("div")
calculatorContainer.className="app";
container.appendChild(sectionNavbar)
container.appendChild(calculatorContainer)
container.appendChild(sectionFooter)

var resultElement= document.createElement("div");
resultElement.id="result";
resultElement.className="result"
calculatorContainer.appendChild(resultElement)

//btntogle
btnToggle.addEventListener("click", cambiarFondo);

function cambiarFondo() {
  var body = document.body;
  body.classList.toggle("dark");
  btnToggle.classList.toggle("dark");
  tittle.classList.toggle("dark")
  calculatorContainer.classList.toggle("dark")
  
}

// Creo los botones numéricos y de operación
const numbers = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
const operators = ["+", "-", "*", "/"];
const buttonsCalc = [
  "9",
  "8",
  "7",
  "/",
  "6",
  "5",
  "4",
  "*",
  "1",
  "2",
  "3",
  "-",
  "C",
  "0",
  "=",
  "+",
]
buttonsCalc.forEach(function (btn) {
  switch (btn) {
    case "C":
      // Acción para el botón de borrar (Clear)
      const clearButton = document.createElement("button");
      clearButton.textContent = "C";
      clearButton.addEventListener("click", clearCalculator);
      calculatorContainer.appendChild(clearButton);
      console.log("Borrar");
      break;
    case "=":
      // Acción para el botón de igual (Equal)
      const equalButton = document.createElement("button");
      equalButton.textContent = "=";
      equalButton.addEventListener("click", calculate);
      calculatorContainer.appendChild(equalButton);
      console.log("Igual");
      break;
    default:
      if (numbers.includes(btn)) {
        // Acción para los números
        const button = document.createElement("button");
        button.textContent = btn;
        button.addEventListener("click", () => handleNumberClick(btn));
        calculatorContainer.appendChild(button);
        console.log("Número: " + btn);
      } else if (operators.includes(btn)) {
        // Acción para los operadores
        const button2 = document.createElement("button");
        button2.textContent = btn;
        button2.addEventListener("click", () => {
          ctrlOperation++;
          handleOperationClick(btn, ctrlOperation);
        });
        calculatorContainer.appendChild(button2);
        console.log("Operador: " + btn);
      }
      break;
  }
});
updateResult();