
function generateStandardFrames(frameNumber,game) {
  var frame = new Frame(4,5);
  var zeroScoreFrame = new Frame(0,1);
  for ( var x = 0; x < frameNumber; x++ ) {
    game.addFrame(frame);
    game.addFrame(zeroScoreFrame);
  }
}

function generateStrikeFrames(frameNumber,game) {
  var strikeFrame = new Frame(10,0);
  for ( var x = 0; x < frameNumber; x++ ) {
    game.addFrame(strikeFrame);
  }
}

function generateSpareFrames(frameNumber,game) {
  var spareFrame = new Frame(9,1);
  for ( var x = 0; x < frameNumber; x++ ) {
    game.addFrame(spareFrame);
  }
}
