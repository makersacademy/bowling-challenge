$(document).ready(function() {

  let game = new Game();
  let frameIndex;

  $('#frame-choice').change(function() {
    $('#kdp11').text($(this).val());
  });

  $('#roll1').change(function() {
    $('#kdp11').text($(this).val());
  });
});
