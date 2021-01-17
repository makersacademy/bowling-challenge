window.onload = (event) => {
  var game = new Game();

  document.getElementById('score-one').onclick = () => {
    game.frames.push(1);
    console.log(game.frames)
    updateScore(1);
  };
  document.getElementById('score-two').onclick = () => {
    game.frames.push(2);
    updateScore(2);
    console.log(game.frames);
  };

  document.getElementById('score-three').onclick = () => {
    game.frames.push(3);
    updateScore(3);
    console.log(game.frames);
  };

  document.getElementById('score-four').onclick = () => {
    game.frames.push(4);
    updateScore(4);
    console.log(game.frames);
  };

  document.getElementById('score-five').onclick = () => {
    game.frames.push(5);
    console.log(game.frames);
    updateScore(5);
  };

  document.getElementById('score-six').onclick = () => {
    game.frames.push(6);
    updateScore(6);
    console.log(game.frames);
  };

  document.getElementById('score-seven').onclick = () => {
    game.frames.push(7);
    updateScore(7)
    console.log(game.frames);
  };
  document.getElementById('score-eight').onclick = () => {
    game.frames.push(8);
    console.log(game.frames);
    updateScore(8)
  };
  document.getElementById('score-nine').onclick = () => {
    game.frames.push(9);
    console.log(game.frames);
    updateScore(9)
  };
  document.getElementById('score-ten').onclick = () => {
    game.frames.push(10);
    console.log(game.frames);
    updateScore(10)
  };
  document.getElementById('reset').onclick = () => {
    window.location.reload();
  }

  function updateScore(score) {
    var box = 0;
   do {
    console.log(box);
    if (document.getElementById(box.toString()).innerHTML == '' ) {
      document.getElementById(box.toString()).innerHTML = score;
      break;
    } else {
     box++;
     continue;
    }
  } while (box < 20)
  }

};