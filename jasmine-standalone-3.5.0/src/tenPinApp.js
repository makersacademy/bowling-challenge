function Bowling () {
this.player1_score = 0;
this.player2_score = 0;

}

Bowling.prototype.addPoints = function(points, player){

if(player == 1){
    this.player1_score += points;
}
else
    this.player2_score += points;
    
}