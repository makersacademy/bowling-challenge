
var frame = $('#frame1')
var bowl = $('#bowl1')
var form = document.querySelector("form");

  $(document).ready(function(){
    var frame = new Frame();

form.addEventListener("submit", function(event){
  console.log("saving value " + form.pins.value);
  event.preventDefault();
  bowl.text(form.pins.value);
});


});
