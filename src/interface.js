var game = new Game();
var frame = new Frame();

$(document).ready(function() {

$("#bowl-btn").click(function() {
  var pins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var index = Math.floor(Math.random() * 10) + 1;
  var removedPins = pins.splice(0, index)
  console.log("bowled over:", removedPins);
  console.log("still standing:", pins);
  $('#bowled-pins').html(removedPins.length);
  $('#remaining-pins').html(pins.length);
});

});
