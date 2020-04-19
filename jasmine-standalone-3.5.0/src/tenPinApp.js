function Bowling () {
this.player_score = 0;
this.strike = false;
this.spare = false;
}

Bowling.prototype.calcPoints = function (r1,r2){
    if (r1 == 10){
        this.strike = true;
        this.player_score +=10;   
    }
     else if (this.strike == true){
        this.player_score += (r1 + r2) * 2;
        this.strike = false;
    }
    else if (this.spare == true){
        this.spare = false;
        this.player_score += (r1*2)+r2;
    }
    else if ((r1+r2) == 10){
        this.spare = true;
        this.player_score += 10;
    }
    else {
        this.player_score += (r1+r2);
    }
}

