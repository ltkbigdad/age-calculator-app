
//inputs
const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");
const inputs = document.querySelectorAll("input");

//outputs
const dayOtp = document.getElementById("display_day");
const monthOtp = document.getElementById("display_month");
const yearOtp = document.getElementById("display_year");

const btn = document.getElementById("iconDiv")
const iptBox = document.getElementById("inputBox");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {

  let validator = true;

  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "Este campo é obrigatório.";
      validator = false;
    } else if (yearInp.value > year) {
      yearInp.style.borderColor = "red";
      yearInp.parentElement.querySelector("small").innerText = "deve estar no passado";
      validator = false;
    } else if (monthInp.value > 12) {
        monthInp.style.borderColor = "red";
        monthInp.parentElement.querySelector("small").innerText = "deve ser um mês válido.";
        validator = false;
    } else if (dayInp.value > 31) {
        dayInp.style.borderColor = "red";
        dayInp.parentElement.querySelector("small").innerText =
          "deve ser um dia válido.";
        validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}

function handleSubmit(e) {

  e.preventDefault();  
  
  if (validate()) {    
    if (dayInp.value > day) {
          
      day = day + months[month - 1];
      month = month - 1;
      
    }
    if (monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }  

    const d = day - dayInp.value;
    const m = month - monthInp.value;
    const y = year - yearInp.value;

    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
  }
  
}

btn.addEventListener("click", handleSubmit);









