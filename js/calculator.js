const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};



document.addEventListener("keydown", (e) => {
  const { key: eKey } = e;


  switch (eKey) {
    case "1":
      display.innerText += "1"
      break;
    case "2":
      display.innerText += "2"
      break;
    case "3":
      display.innerText += "3"
      break;
    case "4":
      display.innerText += "4"
      break;
    case "5":
      display.innerText += "5"
      break;
    case "6":
      display.innerText += "6"
      break;
    case "7":
      display.innerText += "7"
      break;
    case "8":
      display.innerText += "8"
      break;
    case "9":
      display.innerText += "9"
      break;
    case "/":
      display.innerText += "/"
      break;
    case "*":
      display.innerText += "*"
      break;
    case "-":
      display.innerText += "-"
      break;
    case "+":
      display.innerText += "+"
      break;
    case "Enter":
      document.querySelector("#equal").onclick();
      break;
    case "Backspace":
      document.querySelector("#backspace").onclick();
      break;
    default:
      break;
  }

})
