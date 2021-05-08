function strikeOrSpare(frame){
  console.log(frame)
  return (frame[0] + frame[1] == 10 ? true : false);
}
function strike(frame){
  return (frame[0] == 10 ? true : false)
}
// takes in a nested arr.
function Scorecard(bowls){
  let total = 0
  for (let f = 0 ; f < 10 ; f++) {
    if (f < 9) {
      if (  strikeOrSpare(bowls[f]) == true  ) {
        // STRIKE or SPARE
        if ( strike(bowls[f]) == true ) {
          console.log('STRIKE!')
        } else {
          console.log('SPARE')
        }
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
