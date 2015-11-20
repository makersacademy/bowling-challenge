
function bowlingScore(scorecard) {
  if (scorecard.length > 10) {
    throw "invalid scorecard length - maximum of 10 frames per game";
  };
  if (pinCheck(scorecard)) {
    throw "invalid number of pins supplied (MAX is ten)"
  };
  return pointsPerFrame(scorecard).reduce( sumOfElements )
};


function greaterThan10Check(scorecard) {
  return flatten(scorecard).map( (pins) => {
    return pins > 10;
  }).reduce( (head, tail) => {
    return head || tail;
  });
};


function totalPinsPerFrame(scorecard) {
  return scorecard.map( (frame) => {
    return frame.reduce( sumOfElements );
  });
};

function pinCheck(scorecard){
  return greaterThan10Check(totalPinsPerFrame(scorecard).slice(0, 9))
  || totalPinsPerFrame(scorecard)[9] > 30;
};


function pointsPerFrame(scorecard) {
  var points = []
  for (var index = 0; index < scorecard.length; index++) {
    if (isStrike(scorecard, index)) {
      points.push(10 + flatten([scorecard[index + 1], scorecard[index + 2]]).slice(0,2).reduce(sumOfElements));
    } else if (isSpare(scorecard,index)) {
      points.push(10 + scorecard[index + 1][0]);
    } else {
      points.push(scorecard[index]);
    };
  }
  return flatten(points);
};

function isStrike(scorecard, index) {
  return scorecard[index][0] === 10 && index != 9;
};

function isSpare(scorecard, index) {
  return scorecard[index].reduce (sumOfElements ) === 10 && index != 9;
};

function flatten(array) {
  return array.reduce( (head, tail) => { return head.concat(tail); }, [] )
};


var sumOfElements = (head, tail) => {
  return head + tail;
};
