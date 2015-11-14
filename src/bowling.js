function Bowling(){

  this.hit = [];
  this.score = [];
  this.strike = 10;
}

Bowling.prototype = {

  roll: function(point1, point2){
    point2 = point2 || 0
    if (point1 === this.strike){
      this.hit.push('strike');
    }
    else if ((point1 + point2) === 10) {
      this.hit.push('spare');
    }
    else {
      this.hit.push(point1 + point2);
    }
  },

  // game: function() {
  //   if score.
  // }


}
