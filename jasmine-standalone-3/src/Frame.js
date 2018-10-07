function Frame(){
    this._id = 0;
    this.firstRoll = 0;
    this.secondRoll = 0;
    this._pins = 10;
    this._total = 0;
    this._score;
    this._output;
    this.extraRoll =0;
    
}

Frame.prototype = {
    reset: function(){

    }


}

    
//     BowlingGame.prototype.currentMove = function(pins) {
//         let frame;
//         this.countRolls += 1;
//         if ( this.isStrike() ) {
//           this.strikeScoring(pins);
//         } else if ( this.isSpare() ) {
//           this.spareScoring(pins);
//         } else {
//           this.addToScore(pins);
//           if ( this.isFirstRoll() ) {
//             this.incrementRoll();
//           } else {
//             this.resetFrame(pins);
//           }
//         }
//       };
    
// },
//         isStrike(){
//             frame = this._frames[this._frames.length - 1];
//             if (frame.firstRoll === 10) { return true ;}
//         }

//     Game.prototype.isFirstRoll(){
//         if(this.countRolls === 1) { return true; }
//     }
