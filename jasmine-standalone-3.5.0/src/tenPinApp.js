function Bowling () {
this.player_score = 0;
this.strike = false
}

Bowling.prototype.addPoints = function(points){
this.player_score += points;     
}

Bowling.prototype.calcPoints = function (r1,r2){
    if (r1 == 10){
        this.strike = true;
        this.addPoints(10)
       
    }
     else if (this.strike == true){
        this.player_score += (r1 + r2) * 2;
        this.strike = false;
    }
    else {
        this.player_score += (r1+r2);
    }
}

