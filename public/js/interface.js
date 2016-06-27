$(document).ready(function()  {

  game = new Game();
  animateRounds();

  $("button").on('click', function()  {
    var score = parseInt($(this).text());
    game.bowl(score);
    updateScores();
    updateButtons(11-score);
    animateRounds();
    checkEnd();
  })

  function animateRounds()  {
    if (game.roundCount < 10) {
      $('#round'+String(game.roundCount)).attr('class','roundActive');
      $('#round'+String(game.roundCount-1)).attr('class','round');
    }
    else {
      $('#round10').attr('class','roundTenActive');
      $('#round9').attr('class','round');
    }
  }

  function updateScores() {
      for(var i = 0; i < game.roundCount; i++) {
        if (i > 8) { break; }
        if (game.rounds[i].scores[0] === 10) {
          $('#ball2_'+String(i+1)).text('X');
        }
        else if (game.rounds[i].scores.length == 2) {
          if (game.rounds[i].scores[0]+game.rounds[i].scores[1] === 10) {
            $('#ball1_'+String(i+1)).text(game.rounds[i].scores[0]);
            $('#ball2_'+String(i+1)).text('/');
          }
          else {
            $('#ball1_'+String(i+1)).text(game.rounds[i].scores[0]);
            $('#ball2_'+String(i+1)).text(game.rounds[i].scores[1]);
          }
        }
        else {
          $('#ball1_'+String(i+1)).text(game.rounds[i].scores[0]);
        }


        if (i < game.roundCount-1) { updateTotalScores(i+1); }
      }
      if (game.roundCount > 9) { tenScoring(); }
  }

  function tenScoring() {
    if(game.rounds[9].scores[0] === 10) {
      $('#ball1_10').text('X');
      if(game.rounds.length > 11 && game.rounds[10].scores[0] === 10) {
        $('#ball2_10').text('X');
        if(game.rounds.length > 12 && game.rounds[11].scores[0] === 10) {
          $('#ball3_10').text('X');
          updateTotalScores(10);
        }
        else {
          $('#ball3_10').text(game.rounds[11].scores[0]);
          updateTotalScores(10);
        }
      }
      else {
        $('#ball2_10').text(game.rounds[10].scores[0]);
        if(game.rounds.length > 11 && ((game.rounds[10].scores[0]+game.rounds[10].scores[1])=== 10)) {
          $('#ball3_10').text('/');
          updateTotalScores(10);
        }
        else {
          $('#ball3_10').text(game.rounds[10].scores[1]);
          updateTotalScores(10);
        }
      }
    }
    else {
      $('#ball1_10').text(game.rounds[9].scores[0]);
      if(game.rounds.length > 10 && ((game.rounds[9].scores[0]+game.rounds[9].scores[1])=== 10)) {
        $('#ball2_10').text('/');
        if(game.rounds.length > 10 && game.rounds[10].scores[0] === 10) {
          $('#ball3_10').text('X');
          updateTotalScores(10);
        }
        else if(game.rounds.length > 10)  {
          $('#ball3_10').text(game.rounds[10].scores[0]);
          updateTotalScores(10);
        }
      }
      else if(game.rounds.length > 10)  {
        $('#ball2_10').text(game.rounds[9].scores[1]);
        updateTotalScores(10);
      }
    }
  }

  function updateTotalScores(round)  {
    var roundTotal = game.rounds[round-1].roundScore();
    if (game.rounds[round-1].bonusCount === 0)  {
      $('#roundScore'+String(round)).text(roundTotal);
    }
    if (isNaN(game.totalScore()) === false) {
      $('#total').text(game.totalScore());
    }
  }

  function updateButtons(upper_limit) {
    if(game.ball === 2) {
      for(var i = upper_limit; i <= 10; i++) {
        $('#score'+String(i)).attr('class','hiddenScore');
      }
    }
    else {
      for(var j = 1; j <= 10; j++) {
        $('#score'+String(j)).attr('class','visibleScore');
      }
    }
  }

  function checkEnd() {
    if(game.checkEnd() === true)  {
      for(var i = 1; i <= 10; i++) {
        $('#score'+String(i)).attr('class','hiddenScore');
      }
      $("#resetDiv").attr("class","resetVisible");
      $("#scoreTitle").text("final score: ");
      $("#scoreTitle").attr("style", "font-weight: bolder; color: #D55400");
      $("#total").attr("style", "font-weight: bolder; color: #D55400");
      $("h2").attr("style", "background-color: #FFF");
    }
  }
});
