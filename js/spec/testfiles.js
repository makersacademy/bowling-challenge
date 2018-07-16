var score = [1,3]

subtotal = function(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += (array[i]);
  };
  return total;
};

/////////////

var scores = [[1,4],[4,5],[6,4],[5,5],[10,0],[0,1],[7,3],[6,4],[10,0],[2,8,6]]

countArray = function(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    if (i === 9) {
      total += (array[i][0] + array[i][1]) + array[i][2];
    } else {
      total += (array[i][0] + array[i][1]);
    };
  };
  return total;
};

//////////////

countBonus = function(array) {
  var bonus = false;
  var bonusScore = 0;
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    if (i === 9) {
      subtotal += (array[i][0] + array[i][1]) + array[i][2];
      if bonus === true {
        bonusScore += subtotal
      };
    } else {
      subtotal += (array[i][0] + array[i][1]);
      if bonus === true {
        bonusScore += subtotal
      };
    };
    if (subtotal === 10) {
      bonus = true;
    } else {
      bonus = false;
    };
  };
};
