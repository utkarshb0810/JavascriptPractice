var btn1 = document.querySelector(".minus");
var btn2 = document.querySelector(".plus");
var val = document.querySelector(".Counter");
var reset = document.querySelector(".Reset");
var input = document.querySelector(".input");
btn1.addEventListener("click", () => {
  let data = parseInt(val.innerHTML);
  let m = parseInt(input.value);
  data = data - m;
  val.innerHTML = data;
});
btn2.addEventListener("click", () => {
  let data = parseInt(val.innerHTML);
  let m = parseInt(input.value);
  data = data + m;
  val.innerHTML = data;
});
reset.addEventListener("click", () => {
  val.innerHTML = 0;
  input.value = 1;
});
