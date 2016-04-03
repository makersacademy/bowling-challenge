function throwStrike(frame){
  frame.firstBall = 10;
}

function throwSpare(frame){
  frame.firstBall = 4;
  frame.secondBall = 6;
}

function throwNormal(frame){
  frame.firstBall = 2;
  frame.secondBall = 3;
}

function throwGutters(frame){
  frame.firstBall = 0;
  frame.secondBall = 0;
}
