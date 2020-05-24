$(document).ready(function() {
  let bowling = new Bowling();

  $('#score').on('click', function() {
    bowling.scoring(num);
  });
});
