const button1 = document.getElementById("btn1");
const dropdown1 = document.getElementById("dropdown1");
const arrow1 = document.getElementById("arrow1");

// Toggle dropdown function
button1.addEventListener("click", function () {
  dropdown1.classList.toggle("sub-content1");
  arrow1.classList.toggle("arrow1");
});

const button2 = document.getElementById("btn2");
const dropdown2 = document.getElementById("dropdown2");
const arrow2 = document.getElementById("arrow2");

// Toggle dropdown function
button2.addEventListener("click", function () {
  dropdown2.classList.toggle("sub-content2");
  arrow2.classList.toggle("arrow2");
});

const button3 = document.getElementById("btn3");
const dropdown3 = document.getElementById("dropdown3");
const arrow3 = document.getElementById("arrow3");