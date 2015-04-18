Game = function() {
  frames = [];
};

Game.prototype.addFrames = function(frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, optionalframe) {
  frames.push(frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, optionalframe)
};

Game.prototype.score = function() {

  function add(a, b) {
    return a + b;
  };

  var total = [];

  for (i = 0; i < 10; i++) {
    total.push(frames[i].knockedDown());

    if (frames[i].isSpare()) {
      console.log("SPARE");
      if (frames[i +1]) total.push(frames[i +1].bowled[0]);
    } else if (frames[i].isStrike() && i === 9) {
      console.log("final frame");
      total.push(frames[10].bowled[0]);
      if (frames[10].bowled[1])
        total.push(frames[10].bowled[1]);
    } else if (frames[i].isStrike() && frames[i + 1].isStrike()) {
        console.log("strike");
        total.push(frames[i + 1].bowled[0]);
        total.push(frames[i + 2].bowled[0]);
    } else if ( frames[i].isStrike() ) {
        total.push( frames[i + 1].knockedDown()
      );
    };
  };
  return total.reduce(add);
};