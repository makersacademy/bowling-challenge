this.tenthBalls += 1;
// strike count should remain unchanged after frame 9 on this route
if (this.tenthBalls === 1) {
if (this.spareCount > 0) {
this.total += frame.roll1;
} else if (this.strikeCount === 1) {
this.total += frame.total();
} else if (this.strikeCount > 1) {
// if they come in on a double and score a
// strike on first ball
// then bonus is 20
if (frame.roll1 === 10) {
this.total += frame.total() \* 2;
} else {
//if they don't bonus is frame total
this.total += frame.total();
}
}
} else if (this.tenthBalls === 2) {
// if they came in on a double and score a strike on first ball
if (this.strikeCount > 1 && this.frames[9].roll1 === 10) {
this.total += frame.total();
}
}

if (this.tenth[0] < 10) {

      } else {
        // if it is a strike 8 gets roll1
        this.total += this.tenth[0];
        //  9 gets roll1
        this.total += this.tenth[0];
