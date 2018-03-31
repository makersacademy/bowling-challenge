var eachCons = function (a, n) {
  var r = []
  for (var i = 0; i < a.length - n + 1; i+=2) {
    r.push(range(a, i, n))
  };
  return r
};

function range (arr, startIndex, qty) {
  var res = []
  for (var j = 0; j < qty; j++) {
    res.push(arr[startIndex + j])
  };
  return res
};

function getScoreFrames(scoresHistory) {
  return eachCons(scoresHistory, 5)
};

function filterNulls(scoreFrames) {
  return scoreFrames.map(subArr => subArr.filter(element => element != null))
};
