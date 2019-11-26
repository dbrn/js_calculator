function addToEquation(num) {
  if (display.value != "") {
    equation.push(num);
    display.value = "";
    console.log(equation);
  }
}

function addNumber(num) {
  if (opEnd) {
    display.value = num;
    opEnd = false;
  }
  else {
    display.value += num;
  }
}

var display, opEnd;
var equation = [];

opEnd = false;
display = document.querySelector(".display__num");

// Operations

document.querySelector("#back").addEventListener("click", function() {
  if (display.value.length == 2 && display.value[0] === "-") {
    display.value = "0";
  }
  else {
    display.value = display.value.substring(0, display.value.length - 1);
  }
});

document.querySelector("#clear").addEventListener("click", function() {
  display.value = "";
});

document.querySelector("#eq").addEventListener("click", function() {
  addToEquation(display.value);
  evalString = "";
  for (var i = 0; i < equation.length; i++) {
    evalString += equation[i];
  }
  console.log(equation);
  equation = [];
  display.value = eval(evalString);
  opEnd = true;
});

document.querySelector("#times").addEventListener("click", function() {
  addToEquation(display.value + "*");
});

document.querySelector("#minus").addEventListener("click", function() {
  addToEquation(display.value + "-");
});

document.querySelector("#plus").addEventListener("click", function() {
  addToEquation(display.value + "+");
});

document.querySelector("#division").addEventListener("click", function() {
  addToEquation(display.value + "/");
});

document.querySelector("#sqrt").addEventListener("click", function() {
  display.value = display.value**0.5;
});

document.querySelector("#plusminus").addEventListener("click", function() {
  display.value *= -1;
});

document.querySelector("#dot").addEventListener("click", function() {
  if (display.value.indexOf(".") == -1) {
    if (display.value !== "") { display.value += "."; }
    else { display.value = "0."; }
    opEnd = false;
  }
});

// Numbers

document.querySelector("#one").addEventListener("click", function() {
  addNumber("1");
});
document.querySelector("#two").addEventListener("click", function() {
  addNumber("2");
});
document.querySelector("#three").addEventListener("click", function() {
  addNumber("3");
});
document.querySelector("#four").addEventListener("click", function() {
  addNumber("4");
});
document.querySelector("#five").addEventListener("click", function() {
  addNumber("5");
});
document.querySelector("#six").addEventListener("click", function() {
  addNumber("6");
});
document.querySelector("#seven").addEventListener("click", function() {
  addNumber("7");
});
document.querySelector("#eight").addEventListener("click", function() {
  addNumber("8");
});
document.querySelector("#nine").addEventListener("click", function() {
  addNumber("9");
});
document.querySelector("#zero").addEventListener("click", function() {
  if (display.value !== "0") {
    addNumber("0");
  }
});
