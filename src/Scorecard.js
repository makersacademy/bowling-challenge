function strikeOrSpare(frame){
  return (frame.sum == 10 ? true : false);
}
function strike(frame){
  return (frame == [10,0] ? true : false)
}
// takes in a nested arr.
function Scorecard(bowls){
  let total = 0
  for (let f = 0 ; f < 10 ; f++) {
    if (f < 9) {
      console.log(`frame ${f}: ${bowls[f]}`)
      if (strikeOrSpare(bowls[f])) {
        // check for strikes
      } else {
        total += bowls[f].reduce((a, b) => a + b, 0)
      }
    } else if (f == 9) {
      total += bowls[f].reduce((a, b) => a + b, 0)
      console.log(total)
    }
  }
  return total
}
