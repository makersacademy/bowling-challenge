var readlineSync = require('readline-sync')

my_score_sheet = [] 

function bowl(score) {
  my_score_sheet.push(score)
}

bowl(8)
bowl(1)
bowl(7)
bowl(2)
console.log(my_score_sheet)
console.log(totalScore(my_score_sheet))

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

    ///////// Everything below = Bowling score calculators /////////

    // Bowl a Strike    
    if(pins === 10) {                        
      frame++;
      return total_score + pins + pins_of[roll+1] + pins_of[roll+2];  // Strike bonus for next 2 rolls
    }

    // Second Roll of a Frame
    if(frame % 1 !== 0) {  
      frame += .5
      if(pins + pins_of[roll-1] === 10) 
      return total_score + pins + pins_of[roll+1];  // 2nd roll is a Spare
      return total_score + pins;                  // 2nd roll is NOT a spare
    }   
    frame += .5;  // First Roll of a Frame
    return total_score + pins;
  }, 0); // Starting score is 0
}

// console.log(bowlingScore([0, 10, 5, 5]))

console.log(totalScore([10, 10, 10, 10, 10, 10, 10, 10, 10,   4, 6, 10]))

console.log(totalScore([10, 10, 10, 10, 10, 10, 10, 10, 10,   4, 5]))

console.log(totalScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))  // 10 frame strikes

console.log(totalScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))  // 11 frame strikes

var test1 = totalScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
var test2 = totalScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]); // 10 frame strikes
var test3 = totalScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,0]);
var test4 = totalScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0]);
var test5 = totalScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,1,0]);
var test6 = totalScore([10, 3,1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);

console.log("result:", test1, "expected:", 0, test1 === 0 ? "PASSED!" : "FAILED!" );
console.log("result:", test2, "expected:", 300, test2 === 300 ? "PASSED!" : "FAILED!" );
console.log("result:", test3, "expected:", 180, test3 === 180 ? "PASSED!" : "FAILED!" );
console.log("result:", test4, "expected:", 12, test4 === 12 ? "PASSED!" : "FAILED!" );
console.log("result:", test5, "expected:", 11, test5 === 11 ? "PASSED!" : "FAILED!" );
console.log("result:", test6, "expected:", 258, test6 === 258 ? "PASSED!" : "FAILED!" );