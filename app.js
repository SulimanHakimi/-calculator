let output = document.querySelector(".output");
let vals = document.querySelectorAll(".button");
let operations = document.querySelectorAll(".operation");
let equal = document.querySelector(".equal");
let ac = document.querySelector(".ac");

vals.forEach((val) => {
  val.addEventListener("click", () => {
    output.value += val.value;
  });
});

ac.addEventListener("click", () => {
  output.value = "";
});
// there our operation buttons donst work it return 0 i use this slotion
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
    }else if(operation.value == "16"){
      output.value += "."
    }
  });
});

equal.addEventListener("click", () => {
  // if code was output.value = eval(output.value) in this case our code had bug and people can run js in our app or website
  let result = eval(output.value);
  output.value = parseFloat(result);
});
