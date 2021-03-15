'use strict';

function fillScoreCard (scoresArray) {
  var scorecard = {};
  var F;
  for(F = 0; F < 10; F ++){
    var frame = scoresArray[F] || []; // frame = [] if scoresArray[F] doesn't exist
    console.log('filled frame:' + frame);
    scorecard[F + 1] = frame;
  }
  return scorecard;
}