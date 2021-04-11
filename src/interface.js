/* eslint-disable jquery/no-val */
/* eslint-disable jquery/no-html */

jQuery(function () {
  let bowling = new Bowling();

  $('#reset').on('click', function () {
    bowling = new Bowling();
    console.log(bowling);
    resetResults();
  });

  function resetResults () {
    for (let i = 0, id = 1; i < 12; i++, id++) {
      $('#' + id + '-1').html('');
    }
    for (let i = 0, id = 1; i < 12; i++, id++) {
      $('#' + id + '-2').html('');
    }
    $('#10-3').html('');
    clearScore();
  }

  $('#frameSubmit').on('click', function () {
    if (bowling.frameCounter >= 10) {
      updateFrameTen();
    } else if (bowling.frameCounter < 10) {
      bowling.frame(parseInt($('#bowl1').val(), 10), parseInt($('#bowl2').val(), 10));
    }
    updateScorecard();
    isComplete();
  });

  function updateScorecard () {
    let count = bowling.frames.length;
    if (count >= 10) {
      count = 9;
    }
    for (let i = 0, id = 1; i < count; i++, id++) {
      $('#' + id + '-1').html(bowling.frames[i][0]);
    }
    for (let i = 0, id = 1; i < count; i++, id++) {
      $('#' + id + '-2').html(bowling.frames[i][1]);
    }
    updateScorecardFrameTen();
    clearScore();
    updateScore();
  }

  function updateFrameTen () {
    if (bowling.frameCounter === 10 && isSpareStrike()) {
      bowling.tenthFrameExtra(parseInt($('#bowl1').val(), 10), parseInt($('#bowl2').val(), 10));
    } else if (bowling.frameCounter === 11 && isSpareStrike()) {
      bowling.tenthFrameExtra(parseInt($('#bowl1').val(), 10));
    } else if (bowling.frameCounter === 12 && isSpareStrike()) {
      bowling.tenthFrameExtra(parseInt($('#bowl1').val(), 10));
    }
  }

  function isSpareStrike () {
    return bowling.state[bowling.state.length - 1] === 'spare' || bowling.state[bowling.state.length - 1] === 'strike';
  }

  function updateScorecardFrameTen () {
    if (bowling.frameCounter === 10 && (bowling.state[bowling.state.length - 1] === 'open frame' || bowling.state[bowling.state.length - 1] === 'spare')) {
      $('#10-1').html(bowling.frames[9][0]);
      $('#10-2').html(bowling.frames[9][1]);
    } else if (bowling.frameCounter === 10 && bowling.state[bowling.state.length - 1] === 'strike') {
      $('#10-1').html(bowling.frames[9][0]);
    }
    if (bowling.frameCounter === 11 && (bowling.state[bowling.state.length - 1] === 'open frame' || bowling.state[bowling.state.length - 1] === 'spare')) {
      $('#10-3').html(bowling.frames[10][0]);
    } else if (bowling.frameCounter === 11 && bowling.state[bowling.state.length - 1] === 'strike') {
      $('#10-2').html(bowling.frames[10][0]);
    }
    if (bowling.frameCounter === 12 && bowling.state[bowling.state.length - 1] === 'strike') {
      $('#10-3').html(bowling.frames[11][0]);
    }
  }

  function clearScore () {
    for (let i = 0, id = 1; i < 10; i++, id++) {
      $('#s' + id).html('');
    }
  }

  function isComplete () {
    if (bowling.frameCounter === 10 && bowling.state[bowling.state.length - 1] === 'open frame') {
      alert('The game is complete!');
    } else if (bowling.frameCounter === 11 && (bowling.state[bowling.state.length - 1] === 'open frame' || bowling.state[bowling.state.length - 1] === 'spare')) {
      alert('The game is complete!');
    } else if (bowling.frameCounter === 12) {
      alert('The game is complete!');
    }
  }

  function updateScore () {
    let count = bowling.frames.length;
    if (count >= 10) {
      count = 10;
    }
    for (let i = 0, id = 1; i < count; i++, id++) {
      $('#s' + id).html(bowling.framesTotalAcc[i]);
      console.log(bowling.framesTotalAcc[i]);
    }
    console.log(bowling.frames);
    console.log(bowling.state);
    console.log(bowling.frameCounter);
    console.log(bowling.framesTotal);
    console.log(bowling.framesTotalAcc);
  }
});
