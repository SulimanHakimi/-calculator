let output = document.querySelector(".output");
let vals = document.querySelectorAll(".button");
let equal = document.querySelector(".equal")
let ac = document.querySelector(".ac")
let delet = document.querySelector(".del")
vals.forEach(val => {
  val.addEventListener("click", ()=>{
    output.value += parseInt(val.value)

    console.log(output.value)
  })
});

ac.addEventListener("click",()=>{
  output.value = "0"
})