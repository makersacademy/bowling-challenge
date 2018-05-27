const MAX_PINS = 10
const MIN_PINS = 0
const MAX_FRAMES = 10

function Bowling() {
  this.frame = 1;
  this.points = 0;
  this.firstTurn = true;
  this.pins = 10;
  this.double = 0;
  this.finalframetaken = false;
}

Bowling.prototype.takeTurn = function(score) {
  if (score > this.pins) {
    throw "please enter a valid score"
  }
  if (this.frame > MAX_FRAMES) {
    throw "please start a new game"
  }
  this.pins -= score;
  if (this.double = 1) { this.points += score * 2 }
  else if (this.double = 2) { this.points += score * 3 }
  else { this.points += score }
  if (this.double > 0) { this.double -= 1 }
  if (score === MAX_PINS && this.firstTurn === true) {
    this.double += 1;
    this.pins = MAX_PINS;
  if (this.frame === MAX_FRAMES && this.finalframetaken === false)
    { this.finalframetaken = !this.finalframetaken }
    else { this.frame += 1; }
    // console.log('Strike!');
  }
  else {
    if (this.pins === MIN_PINS  && this.firstTurn === false) {
      this.double +=1;
          // console.log('Spare!');

  }
    if (this.firstTurn === false) {
      this.pins = MAX_PINS;
      if (this.frame === MAX_FRAMES && this.finalframetaken === false)
        { this.finalframetaken = !this.finalframetaken }
        else {
      this.frame += 1;
      if (this.frame === MAX_FRAMES && this.finalframetaken === true){
        this.frame += 1;
      }
    }}

    else {
     this.firstTurn = !this.firstTurn; }}
  console.log(this.points);
};
