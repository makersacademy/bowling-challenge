function Display() {
}

Display.prototype.gameInstructions = function(bowlingScorecard) {
  return (bowlingScorecard.isGameComplete()) ?
  'Game over! Click on reset to play again.'
  : 'Click on the number of pins you knocked down.';
};

Display.prototype.scoreInfo = function(bowlingScorecard) {
  string = "";
  string = "Frame " + bowlingScorecard.frameNumber();
  if (bowlingScorecard.frameNumber === 10 && bowlingScorecard.frame().score() >= 10) {
    string += ", Bonus Roll";
  }
  else {
    string += ", Roll " + (bowlingScorecard.frame().isFirstBowl ? 1 : 2);
  }
  string += ", Total Score: " + bowlingScorecard.score();
  return string;
};

Display.prototype.framesToHTMLTable = function(frames) {
  string = "";
  for(i = frames.length; i > 0; i--) {
    var frame = frames[i-1];
     string += "<tr><td>" + i + "</td>";
     string += "<td>" + (frame.score1 != null ? frame.score1 : "-") + "</td>";
     string += "<td>" + (frame.score2 != null ? frame.score2 : "-") + "</td>";
     string += "<td>" + (frame.bonus != null ? frame.bonus : "-") + "</td>";
     string += "<td>" + frame.score() + "</td>";
     string += "</tr>";
   }
   return string;
};
