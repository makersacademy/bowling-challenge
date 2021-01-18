window.onload = (event) => {
  var game = new Game();
  document.getElementById('score-zero').onclick = () => {
    // updateScore(0);
    updateFrame(0);
    updateScoreBox();
    updatePinBox();
  };

  document.getElementById('score-one').onclick = () => {
    // updateScore(1);
    updateFrame(1);
    updateScoreBox();
    updatePinBox();
  };
  document.getElementById('score-two').onclick = () => {
    // updateScore(2);
    updateFrame(2);
    updateScoreBox();
    updatePinBox();
  };

  document.getElementById('score-three').onclick = () => {
    // updateScore(3);
    updateFrame(3);
    updateScoreBox();
    updatePinBox();
  };

  document.getElementById('score-four').onclick = () => {
    // updateScore(4);
    updateFrame(4);
    updateScoreBox();
    updatePinBox();
  };

  document.getElementById('score-five').onclick = () => {
    // updateScore(5);
    updateFrame(5);
    updateScoreBox();
    updatePinBox();
  };

  document.getElementById('score-six').onclick = () => {
    // updateScore(6);
    updateFrame(6);
    updateScoreBox();
    updatePinBox();
  };

  document.getElementById('score-seven').onclick = () => {
    // updateScore(7);
    updateFrame(7);
    updateScoreBox();
    updatePinBox();
  };
  document.getElementById('score-eight').onclick = () => {
    // updateScore(8);
    updateFrame(8);
    updateScoreBox();
    updatePinBox();
  };
  document.getElementById('score-nine').onclick = () => {
    // updateScore(9);
    updateFrame(9);
    updateScoreBox();
    updatePinBox();
  };
  document.getElementById('score-ten').onclick = () => {
    // updateScore(10);
    updateFrame(10);
    updateScoreBox();
    updatePinBox();
  };
  document.getElementById('reset').onclick = () => {
    window.location.reload();
  }

  // var updateScore = (score) => {
  //   var box = 0;
  //  do {
  //   if (document.getElementById(box.toString()).innerHTML == '' ) {
  //     document.getElementById(box.toString()).innerHTML = score;
  //     break;
  //   } else {
  //    box++;
  //    continue;
  //   }
  // } while (box <= 20)
  // }
  
  
  var roll = 0; 
  var round = 0; 
  var updateFrame = (score) => {
    if (round >= 10) {
      return; 
    }
    if (score === 10) { //if it is a strike
      game.frames[round] = [score];
      game.updateScores(round);
      roll = 0; // skip the next roll
      round++; //go to the next round
    } else if (game.frames[round] === undefined) { //if it is the first roll of the frame
      game.frames[round] = [score]; //assign the new frame
      roll++; // go to the second roll
    } else {
      if (game.frames[round][0] + score > 10) { // error if the second roll is too big
        alert("Invalid pin. Please try again");
        return;
      } else {
        game.frames[round].push(score); // update the second roll
        game.updateScores(round); // update the frame score
        roll++;
        round++; // go to the next round
      }
    }
    if (roll >= 2) {
      roll = 0; // reset the roll to 0
    }

  }
  var updatePinBox = () => {
    var allScores = game.frames.flat();

    for (var i = 0; i < 22; i++) {
      if (allScores[i] != undefined) {
        document.getElementById("pin-"+i).innerHTML = allScores[i]
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

};