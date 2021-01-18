window.onload = (event) => {
  var game = new Game();
  document.getElementById('score-zero').onclick = () => {
    updateFrame(0);
    updateScoreBox();
    updatePinBox();
  };

  document.getElementById('score-one').onclick = () => {
    updateFrame(1);
    updateScoreBox();
    updatePinBox();
  };
  document.getElementById('score-two').onclick = () => {
    updateFrame(2);
    updateScoreBox();
    updatePinBox();
  };

  document.getElementById('score-three').onclick = () => {
    updateFrame(3);
    updateScoreBox();
    updatePinBox();
  };

  document.getElementById('score-four').onclick = () => {
    updateFrame(4);
    updateScoreBox();
    updatePinBox();
  };

  document.getElementById('score-five').onclick = () => {
    updateFrame(5);
    updateScoreBox();
    updatePinBox();
  };

  document.getElementById('score-six').onclick = () => {
    updateFrame(6);
    updateScoreBox();
    updatePinBox();
  };

  document.getElementById('score-seven').onclick = () => {
    updateFrame(7);
    updateScoreBox();
    updatePinBox();
  };
  document.getElementById('score-eight').onclick = () => {
    updateFrame(8);
    updateScoreBox();
    updatePinBox();
  };
  document.getElementById('score-nine').onclick = () => {
    updateFrame(9);
    updateScoreBox();
    updatePinBox();
  };
  document.getElementById('score-ten').onclick = () => {
    updateFrame(10);
    updateScoreBox();
    updatePinBox();
  };
  document.getElementById('reset').onclick = () => {
    window.location.reload();
  }

  
  var roll = 0; 

  var round = 0; 

  var updateFrame = (score) => {
    if (round > 10) {
      return;
    }
    if (round === 10) {
      if (game.spare(9) || game.strike(9)) {
        bonusRoll(score);
        round++;
      }
    }
    if (score === 10 && !game.finalRound(round)) { 
      
      game.frames[round] = [score];
      game.updateScores(round);
      round++; 
      roll = 0; 
      
      return;
    } else if (game.frames[round] === undefined) { 
      game.frames[round] = [score]; 
      roll++; 
    } else {
      if (!game.finalRound(round) && (game.frames[round][0] + score > 10)){
        alert("Invalid pin. Please try again");
        return;
      } else {
        game.frames[round].push(score); 
        game.updateScores(round); 
        roll++;
        round++; 
      }
    }
    if (roll >= 2) {
      roll = 0; 
    }

  }
  var updatePinBox = () => {
    for (var f = 0; f < 10; f++) {
      for (var r = 0; r < 2; r++) {
        if (game.frames[f] != undefined) {
          if (game.frames[f][r] === 10) {
            document.getElementById(f+"-"+r).innerHTML = 10;
          } else if (game.frames[f][r] != undefined) {
            document.getElementById(f+"-"+r).innerHTML = game.frames[f][r];
          } else {
            break;
          }
        }
      }
    }
  }


  var updateScoreBox = () => {

    for (var i = 0; i < 10; i++) {
      if (game.frameScores[i] != undefined) {
        document.getElementById("frame-"+i+ "-total").innerHTML = game.frameScores[i]
      }
    }
    updateTotalScore();
  }

  var updateTotalScore = () => {
    if (game.frameScores.length > 0) {
      document.getElementById("total-score").innerHTML = game.frameScores[game.frameScores.length - 1];
    }
  }

  var bonusRoll = (score) => {
    document.getElementById("9-2").innerHTML = score;
    game.frames[game.frames.length - 1].push(score)
    game.frameScores[game.frames.length - 1] = game.frameScores[game.frames.length - 1] + score;
  }
};