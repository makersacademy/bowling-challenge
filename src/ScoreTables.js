var ScoreTables = function(players) {

  this.scoreCards = [];
    for (var i=0; i<players.length; i++) { 
      this.scoreCards[i] = new ScoreCard (players[i]);
    };

  
  ScoreTables.prototype.displayAllTables = function () {
    var tablesHTML = ""
    for (var i=0; i<this.scoreCards.length; i++) {
      tablesHTML += this._buildATable(this.scoreCards[i]);
    };
    return tablesHTML;
  };

  ScoreTables.prototype.whosTurnIsIt = function() {
    for (var i=0; i<this.scoreCards.length; i++) {
      currentFrameNo = 1;
      if (this.scoreCards[i].playTurn === true) {
        return i;
      };
      if (this.scoreCards[i].frameNo < currentFrameNo) {
        this.scoreCards[i].playTurn = true;
      };
      if (this.scoreCards[this.scoreCards.length].playTurn === false && this.scoreCards[this.scoreCards.length].frameNo === currentFrameNo) {
        currentFrameNo += 1;
      };
    };
  };

  ScoreTables.prototype._buildATable = function(scoreCard) {

    var scoreTable= "<br><td style='width: 70px;'>"+scoreCard.name +"</td>";
      scoreTable+= "</tr><table><tr>";

    for (var i=1; i<11; i++) {
      scoreTable+= "<td style='width: 70px;'>Frame " + i + "</td>"};
      scoreTable+= "<td style='width: 70px;'>Total</td>";
      scoreTable+= "</tr>";

    for (var i=0; i<10; i++) {
      scoreTable+= "<td style='width: 70px;'>" + (scoreCard.score[i] === undefined ? [] : scoreCard.score[i] )+"</td>"};
      scoreTable+= "<td style='width: 70px;'>"+ scoreCard.currentScore() +"</td>";
      scoreTable+= "</tr>";

    for (var i=0; i<10; i++) {
      if (scoreCard.score[i] !== undefined ) {
        var total = 0;
        $.each((scoreCard.score[i]),function() {
          total += this;
        });
      } else {
        total = " ";
      };  
      scoreTable+= "<td style='width: 70px;'>" + total +"</td>";
    };

    scoreTable+="</table>";

    return scoreTable;

  };

};
