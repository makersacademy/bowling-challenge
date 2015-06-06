
function Frame (){
  this.go1 = null;
  this.go2 = null;
  this.strike = false;
  // this.spare = false;
  // this.total = 0;
}


Frame.prototype.bowl = function(pins) {
  if (pins > 10) throw 'Cannot exceed 10 pins';
  if ((this.go1 + pins) > 10)  throw 'Cannot exceed 10 pins';
  if (this.go1 == null) {
    this.go1 = pins;
    if (pins == 10) {
      this.strike = true;
    };
  } else {
    this.go2 = pins;
  };
};

Frame.prototype.isSpare = function() {
  var total = this.go1 + this.go2;
  return total == 10;
};




// Frame.prototype.tracker = function() {
//   var position = (this.frames -1);
//   var total = (this.firstbowl + this.secondbowl + this.bonus);

//   if (this.strike) {
//     this.strike = false;
//     this.points.push([this.firstbowl, 0]);
//     if ((this.frames == 1) || (this.frames == 2)) {
//       this.scorecard[position] = 0;
//     } else {
//         this.scorecard[this.frames - 3] = this.points[0];
//       };

//   } else if (this.spare) {
//     this.spare = false;
//     this.points.push([this.firstbowl, this.secondbowl]);
//     if (this.frames == 1) {
//       this.scorecard[position] = 0;
//     } else {
//       this.bonus =+ this.firstbowl + this.secondbowl;
//       this.scorecard[position] = this.bonus;
//     };
//   } else {
//     this.scorecard[position] = total;
//   };
// };