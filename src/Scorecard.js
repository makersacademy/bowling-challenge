function strikeOrSpare(frame){
  return (frame[0] + frame[1] == 10 ? true : false);
}
function strike(frame){
  return (frame[0] == 10 ? true : false );
}
// takes in a nested arr.
function Scorecard(bowls){
  let total = 0
  for (let f = 0 ; f < 10 ; f++) {
    if (f <= 8) {
      if ( strikeOrSpare(bowls[f]) ) {
        if ( strike(bowls[f]) ) {
          if ((f <= 7 && strike(bowls[f+1])) && (strike(bowls[f+2]))) {
            total += 30
          } else if ((f <= 7 && strike(bowls[f+1])) && !(strike(bowls[f+2]))){
            total += 20
            total += (bowls[f+2][0])
          } else {
            total += 10
            total += (bowls[f+1][0])
            total += (bowls[f+1][1])
          }
        } else {
          total += 10
          total += (bowls[f+1][0])
        }
      } else {
        total += bowls[f].reduce((a, b) => a + b, 0)
      }
    } else {
      if ((bowls[f][0] + bowls[f][1]) >= 10) {
        total += (bowls[f][0])
        total += (bowls[f][1])
        total += (bowls[f][2])
      } else {
        total += (bowls[f][0])
        total += (bowls[f][1])
      }
    }
  }
  return total
}
