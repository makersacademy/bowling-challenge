module.exports = {
    scoreFrame,
    spareFrame,
    strikeFrame,
    doubleStrikeFrame,
    scoreGame
  }
  
  // var runningTotal = 0 trial
  
  var frames1 = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
  ]
  
  var frames2 = [
    [10, 0], [2, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
  ]
  
  // takes a frames array and returns the score for the game
  function scoreGame(frames) {
    let score = 0;
  
    for (let i = 0; i < frames.length-1; i++) {
      if(frames[i][0] === 10) {
        //if frame 9 is a strike then it's score is 10 + the score of the first two balls from frame 10;
        if(i===8) {
          score += 10 + scoreFrame(frames[9])
        }
        else {
          score += strikeFrame (frames[i+1], frames[i+2])
        }
      } else if (frames[i][0] + frames[i][1] === 10) {
        score += spareFrame(frames[i+1])
      } else {
        score += scoreFrame(frames[i])
      }
    }
  
    score+= scoreFrame10(frames[9])
  
    return score;
  }
    
  function doubleStrikeFrame (nextNextFrame) {
    return 20 + nextNextFrame[0]
  }
  
  function strikeFrame (nextFrame, nextNextFrame) {
    if (nextFrame[0] === 10) {
      return doubleStrikeFrame(nextNextFrame)
    } else {
      return (10 + nextFrame[0] + nextFrame[1])
    }
  }
  
  function spareFrame (nextFrame) {
    return 10 + nextFrame[0]  
  }
  
  function scoreFrame (frame) {
    return frame[0] + frame[1]
  }
  
  function scoreFrame10(frame) {
    return frame[0] + frame[1] + (frame.length === 3 ? frame[2] : 0);
  }
  