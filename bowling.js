var readlineSync = require('readline-sync')

my_score_sheet = [] 

function bowl(pins) {
  my_score_sheet.push(pins)
}

function totalScore(score_sheet) {
  var frame = 1;  // Game starts at Frame 1

  return score_sheet.reduce((total_score, pins, roll, pins_of) => {

    // Game ends: 10th frame, 3rd roll
    if (frame == 11) { 
      console.log(`Game finished!  Your score is ${total_score + pins}`)  
      frame++
      return total_score + pins;
    }

    //Game ends: 10th frame, 1st & 2nd rolls are less than 10 points
    if (frame == 10.5 && (pins + pins_of[roll-1] < 10)) {  
      console.log(`Game finished!  Your score is ${total_score + pins}`)  
      frame++
      return total_score + pins;
    }
    
    // 10th frame
    if(frame === 10 || frame == 10.5) {
      frame += .5
      return total_score + pins;
    } 

    ///////// Bowling score calculators are listed below /////////

    // Bowl a Strike    
    if(pins === 10) {                        
      frame++;
      return total_score + pins + pins_of[roll+1] + pins_of[roll+2];  // Strike bonus for next 2 rolls
    }

    // Second Roll of a Frame
    if(frame % 1 !== 0) {  // Frame 1.5, 2.5, 3.5... are all 2nd rolls in each frame 
      frame += .5
      if(pins + pins_of[roll-1] === 10) // 2nd roll is a Spare
      return total_score + pins + pins_of[roll+1];   
      return total_score + pins;        // When 2nd roll is NOT a spare
    }   
    // First Roll of a Frame
    frame += .5;  
    return total_score + pins;
  }, 
  0); // closing score_sheet.reduce method.  Initial score is 0
}