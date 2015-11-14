function Player() {
}

Player.prototype.bowl = function(){
  return Math.floor(Math.random() * (11));
};
