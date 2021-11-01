var readlineSync = require('readline-sync')
var frame = 1;   
arr = [] 

function bowl(score){
arr.push(score)
console.log(arr)
console.log('total score:' + bowlingScore(arr))
}

bowl(8)
bowl(2)
bowl(3)
bowl(3)




function bowlingScore(rolls) {
  var frame = 1;                                        // Frame idx
  return rolls.reduce((p, pins, i, a) => {
    if(frame >= 10) return p + pins;                       // Bonus rolls
    if(pins === 10) {                                      // Strike
      frame++;
      return p + pins + a[i+1] + a[i+2];
    }
    if(frame % 1 !== 0) {                           // Second Roll of a Frame
      frame = Math.floor(++frame);
      if(pins + a[i-1] === 10) return p + pins + a[i+1];  // If second roll is a spare
      return p + pins;                                    // Second roll is not a spare
    }   
    frame += .5;
                                                       // First Roll of a Frame
    return p + pins;
  }, 0);
}

// console.log(bowlingScore([0, 10, 5, 5]))

// console.log(bowlingScore([10, 10, 10, 0, 9, 1]))

// var test1 = bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
// var test2 = bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
// var test3 = bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9]);
// var test4 = bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0]);
// var test5 = bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,1,0]);
// var test6 = bowlingScore([10, 3,1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);

// console.log("result:", test1, "expected:", 0, test1 === 0 ? "PASSED!" : "FAILED!" );
// console.log("result:", test2, "expected:", 300, test2 === 300 ? "PASSED!" : "FAILED!" );
// console.log("result:", test3, "expected:", 190, test3 === 190 ? "PASSED!" : "FAILED!" );
// console.log("result:", test4, "expected:", 12, test4 === 12 ? "PASSED!" : "FAILED!" );
// console.log("result:", test5, "expected:", 11, test5 === 11 ? "PASSED!" : "FAILED!" );
// console.log("result:", test6, "expected:", 258, test6 === 258 ? "PASSED!" : "FAILED!" );
