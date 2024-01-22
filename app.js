let output = document.querySelector(".output");
let vals = document.querySelectorAll(".button");
let operations = document.querySelectorAll(".operation");
let equal = document.querySelector(".equal");
let ac = document.querySelector(".ac");
let delet = document.querySelector(".del");

vals.forEach((val) => {
  val.addEventListener("click", () => {
    output.value += val.value;
    console.log(output.value);
  });
});

ac.addEventListener("click", () => {
  output.value = "";
});

operations.forEach((operation) => {
  operation.addEventListener("click", () => {
    if (operation.value == "11") {
      output.value += " " + "+" + " ";
    } else if (operation.value == "12") {
      output.value += " " + "-" + " ";
    } else if (operation.value == "13") {
      output.value += " " + "*" + " ";
    } else if (operation.value == "14") {
      output.value += " " + "/" + " ";
    } else if (operation.value == "15") {
      output.value += " " + "%" + " ";
    }
  });
});

equal.addEventListener("click", () => {
  let result = eval(output.value);
  output.value = result;
});
