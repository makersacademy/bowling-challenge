function Frame(firstRoll,secondRoll) {
  var _rolls = [firstRoll, secondRoll];
  var _score = calculateScore();
  var type;
  checkExceptions();

  Frame.prototype.getRoll = function(index) {
    return _rolls[index-1];
  };

  Frame.prototype.getScore = function() {

    return _score;
  };

  Frame.prototype.getType = function() {
    if (firstRoll === 10) {
      type = 'strike';
    } else if (_score === 10) {
      type = 'spare';
    } else {
      type = 'regular';
    }
    return type;
  };

  function calculateScore() {
    var result;
    if (_rolls[0] === 10) {
      result = 10;
    } else {
      result = _rolls[0] + _rolls[1];
    }
    return result;
  }

  function checkExceptions() {
    if (isErrorFirstRoll(_rolls[0]) || isErrorSecondRoll(_rolls[1])) {
      var error = 'rolls are not within range or not numbers';
      throw new Error(error);
    }

    function isErrorFirstRoll(number) {
      return (typeof(number) !== "number" || number < 0 || number > 10)
    }

    function isErrorSecondRoll(number) {
      // to accept undefined as a valid option for roll2
      var typeCheck = !isNumberOrUndefined(number);
      return (typeCheck || number < 0 || number > 10)

      function isNumberOrUndefined(number) {
        return (typeof(number === "number") || typeof(number === "undefined"));
      }
    }
  }

}