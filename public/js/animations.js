function animateRounds(game)  {
  if (game.roundCount < 10) {
    $('#round'+String(game.roundCount)).attr('class','roundActive')
    $('#round'+String(game.roundCount-1)).attr('class','round')
  }
  else {
    $('#round10').attr('class','roundTenActive')
    $('#round9').attr('class','round')
  }
}

function dimButtons(game, upper_limit) {
  if(game.ball === 2 || game.checkEnd()) {
    for(var i = upper_limit; i <= 10; i++) {
      $('#score'+String(i)).attr('class','hiddenScore')
    }
  }
  else {
    for(var j = 1; j <= 10; j++) {
      $('#score'+String(j)).attr('class','visibleScore')
    }
  }
}

function endGame(game) {
  dimButtons(game, 0)
  $("#resetDiv").attr("class","resetVisible")
  $("#scoreTitle").text("final score: ")
  $("#scoreTitle").attr("style", "font-weight: bolder; color: #D55400")
  $("#total").attr("style", "font-weight: bolder; color: #D55400")
  $("h2").attr("style", "background-color: #FFF")
}
