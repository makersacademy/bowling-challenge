$(document).ready(function() {
  var currentRoll = 1

  $('button').click(function() {
    $(`#${currentRoll}`).text($(this).val());
    currentRoll += 1
  });

});
