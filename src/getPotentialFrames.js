var eachCons = function (a, n) {
  var r = []
  for (var i = 0; i < a.length - n + 1; i++) {
    r.push(range(a, i, n))
  }
  return r
}

function range (a, i, n) {
  var r = []
  for (var j = 0; j < n; j++) {
    r.push(a[i + j])
  }
  return r
}

function getPotentialFrames(scoresHistory){
  return eachCons(scoresHistory, 3)
}
