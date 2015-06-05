
function Frame (){
  this.go1 = 0;
  this.go2 = 0;
  this.strike = false;
  this.spare = false;
  this.total = 0;
}


Frame.prototype.bowl1 = function(pins) {
  this.go1 = pins;
  this.total = pins;
  if (pins == 10) {
    this.strike = true;
  };
};

Frame.prototype.bowl2 = function(pins) {
  this.go2 = pins;
  this.total += pins;
  if(this.go1 == 10) throw 'Strike, wait for next frame!'
  if(this.go1 + pins == 10) {
    this.spare = true;
  };
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