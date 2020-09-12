$(document).ready(function () {
  $("#h1_test").css("color", "red");

  let x = document.createElement("h1");
  x.innerHTML = "JAVASCRIPT";
  x.style.color = "green";
  document.body.appendChild(x);
});
