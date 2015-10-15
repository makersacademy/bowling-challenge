var scoreCard = new ScoreCard;

var showRound = function() {
  $('#round').text(scoreCard.currentRound);
};

var showScore = function() {
  $('#score').text(scoreCard.currentScore);
};

var scoreRound = function() {
  scoreCard.scoreRound(2, 2);
};

var selectList = function(elementId) {
  var select = document.getElementById(elementId);
  var options = ['1', '2', '3', '4', '5'];
  for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement('option');
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  };
};

showRound();
showScore();
selectList('ball1');
selectList('ball2');

$('#scoreRound').click(function() {
  scoreRound();
  showRound();
  showScore();
});

//not working below
// var options = { val1: 'text1', val2: 'text2' };
// $.each(result, function() {
//   options.append($('<option />').val(this).text(this));
// });
