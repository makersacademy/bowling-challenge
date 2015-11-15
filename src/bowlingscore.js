function bowlingScore(scorecard) {
  if (scorecard.length > 10) {
    throw "invalid scorecard length - maximum of 10 frames per game";
  };
  if (pinCheck(scorecard)) {
    throw "invalid number of pins supplied (MAX is ten)"
  };
  return pointsPerFrame(scorecard).reduce(function(head, tail){ return head + tail; })
};


function pinCheck(scorecard) {
  return sumOfPinsCheck(scorecard)
};


function greaterThan10Check(scorecard) {
  return scorecard.reduce(function(head, tail){
    return head.concat(tail);
  }, []).map(function(pins){
    return pins > 10;
  }).reduce(function(head, tail){
    return head || tail;
  });
};

function sumOfPinsCheck(scorecard){
  return greaterThan10Check(totalPinsPerFrame(scorecard).slice(0, 9))
  || totalPinsPerFrame(scorecard)[9] > 30;
};

function totalPinsPerFrame(scorecard) {
  return scorecard.map(function(frame){
    return frame.reduce(function(head, tail){
      return head + tail;
    });
  });
};

function pointsPerFrame(scorecard) {
  var points = []
  for (var index = 0; index < scorecard.length; index++) {
    if (scorecard[index][0] == 10 && index != 9) {
      var strike = []
      strike.push(scorecard[index + 1])
      strike.push(scorecard[index + 2])
      points.push(10 + flatten(strike)[0] + flatten(strike)[1])
    } else if (scorecard[index].reduce( function(first, second) {
      return first + second;
    } ) == 10 && index != 9) {
      points.push(10 + scorecard[index + 1][0]);
    } else {
      points.push(scorecard[index]);
    };
  }
  return flatten(points);
};


function strikePoints(scorecard) {
  var points = []
  for (var index = 0; index < scorecard.length; index++) {
    if (scorecard[index] == 10) {
      points.push()
      scorecard[index + 1]
    }
  }
};

function flatten(array) {
  return array.reduce(function(head, tail) { return head.concat(tail); }, [])
};

// function strikeCheck(scorecard) {
//   scorecard.map(function(){

//   })
// };

// sum of frames
// if there is no strike, just total it
//   if there is a spare add the next roll
//     if there is a strike add two next rolls


// function greaterThan10Check(scorecard) {
//   return scorecard.reduce(function(head, tail){
//     return head.concat(tail);
//   }, [])
// }