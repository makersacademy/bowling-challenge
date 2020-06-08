"use strict";

function FrameScoreController( frame, frameNumber ) {
  const _frame = frame;
  const _frameNumber = frameNumber;

  function _updateSpareFrame() {
    $( `#frame-${_frameNumber}-score-1` ).text( _frame.score1 );
    $( `#frame-${_frameNumber}-score-2` ).text( "/" );
  }

  function _updateStrikeFrame() {
    $( `#frame-${_frameNumber}-score-1` ).text( "" );
    $( `#frame-${_frameNumber}-score-2` ).text( "X" );
  }

  function _updateNormalFrame() {
    $( `#frame-${_frameNumber}-score-1` ).text( _frame.score1 );
    $( `#frame-${_frameNumber}-score-2` ).text( _frame.score2 );
  }

  function _updateTenthFrame() {
    if ( _frame.score1 === 10 ) {
      displayFirstBallStrike();
    } else if ( _frame.score1 + _frame.score2 === 10 ) {
      displaySecondBallSpare();
    } else {
      displayNormalFirstTwoScores();
    }

    if ( _frame.score3 === 10 ) {
      displayThirdBallStrike();
    } else {
      displayThirdBallNormal();
    }

    function displayFirstBallStrike() {
      $( `#frame-${_frameNumber}-score-1` ).text( "X" );

      if ( _frame.score2 === 10 ) {
        $( `#frame-${_frameNumber}-score-2` ).text( "X" );
      } else {
        $( `#frame-${_frameNumber}-score-2` ).text( _frame.score2 );
      }
    }

    function displaySecondBallSpare() {
      $( `#frame-${_frameNumber}-score-1` ).text( _frame.score1 );
      $( `#frame-${_frameNumber}-score-2` ).text( "/" );
    }

    function displayNormalFirstTwoScores() {
      $( `#frame-${_frameNumber}-score-1` ).text( _frame.score1 );
      $( `#frame-${_frameNumber}-score-2` ).text( _frame.score2 );
    }

    function displayThirdBallStrike() {
      $( `#frame-${_frameNumber}-score-3` ).text( "X" );
    }

    function displayThirdBallNormal() {
      $( `#frame-${_frameNumber}-score-3` ).text( _frame.score3 );
    }
  }

  this.resetScores = function resetScores() {
    $( `#frame-${_frameNumber}-score-1` ).text( "" );
    $( `#frame-${_frameNumber}-score-2` ).text( "" );

    if ( _frameNumber === 9 ) {
      $( `#frame-${_frameNumber}-score-3` ).text( "" );
    }

    $( `#frame-${_frameNumber}-total` ).text( "" );
  };

  this.updateScores = function updateScores() {
    if ( _frame.isSpare() ) {
      _updateSpareFrame();
    } else if ( _frame.isStrike() ) {
      _updateStrikeFrame();
    } else if ( _frameNumber === 9 ) {
      _updateTenthFrame();
    } else {
      _updateNormalFrame();
    }

    $( `#frame-${_frameNumber}-total` ).text( _frame.total );
  };
}
