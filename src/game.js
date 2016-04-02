/*Bowling rules:
 1 game has 10 frames
each frame has 2 rolls, unless the first is a strike
after every frame, the pins get reset to 10

each pin = 1 point
a strike = 10 points, plus 'bonus' from both rolls of next frame,
  includes upto 2 next frames
a spare = 10 points, plus 'bonus' from first roll of next frame,
  only includes next frame.
when pins left standing, simple addition. 
*/

function Game() {
  this.scoreboard = []
}

Game.prototype.addFrame = function(frame) {
  this.scoreboard.push(frame)
};
