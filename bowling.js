var readlineSync = require('readline-sync')
var frame = 1;   
arr = [] 

function bowl(score){
arr.push(score)
console.log(arr)
console.log('total score:' + bowlingScore(arr))
}

bowl(8)
bowl(1)






function bowlingScore(score_sheet) {
  var frame = 1;  
  total_score = 0;

  return score_sheet.reduce((total_score, pins, roll, a) => {
    //  if(frame > 11) {
    //    console.log('game is over')  
    //    return total_score;
    //  } 

    if (frame == 11) {
      console.log(`Game finished!  Your score is ${total_score + pins}`)  
       frame += .34
      return total_score + pins;
    }

    if (frame == 10.5 && (pins + a[roll-1] < 10)){
      console.log(`Game finished!  Your score is ${total_score + pins}`)  
      frame += .34
      return total_score + pins;
    }
    
    if(frame === 10 || frame == 10.5) {
      console.log('frame is tenth')  
      frame += .5
      return total_score + pins;
    } 

    if(pins === 10) {  // If strike happens                                     
      frame++;
      // console.log('Frame: ' + frame)
      return total_score + pins + a[roll+1] + a[roll+2];  // Add the bonus for next 2 rolls
    }
    if(frame % 1 !== 0) {  // Second Roll of a Frame
      frame = Math.floor(++frame);
      if(pins + a[roll-1] === 10) return total_score + pins + a[roll+1];  // If second roll is a spare
      return total_score + pins;                                    // Second roll is not a spare
    }   
    frame += .5;  // First Roll of a Frame
    return total_score + pins;
  }, 0);
}

// console.log(bowlingScore([0, 10, 5, 5]))

console.log(bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10,   4, 6, 10]))

console.log(bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10,   4, 5]))

console.log(bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))  // 11 frame strikes

var test1 = bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
var test2 = bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]); // 10 frame strikes
var test3 = bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,0]);
var test4 = bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0]);
var test5 = bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,1,0]);
var test6 = bowlingScore([10, 3,1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);

console.log("result:", test1, "expected:", 0, test1 === 0 ? "PASSED!" : "FAILED!" );
console.log("result:", test2, "expected:", 300, test2 === 300 ? "PASSED!" : "FAILED!" );
console.log("result:", test3, "expected:", 180, test3 === 180 ? "PASSED!" : "FAILED!" );
console.log("result:", test4, "expected:", 12, test4 === 12 ? "PASSED!" : "FAILED!" );
console.log("result:", test5, "expected:", 11, test5 === 11 ? "PASSED!" : "FAILED!" );
console.log("result:", test6, "expected:", 258, test6 === 258 ? "PASSED!" : "FAILED!" );