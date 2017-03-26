//strike => 10 on first roll; bonus from next 2
//spare => 10 on second roll; bonus from next 1
//if strike on 10th, 2 extra awarded for bonus
//if spare, 1 extra awarded for bonus

//maybe start the game with a hash/array?

//separate all functions -> scoring should be separate
//from the game

// var Frame = require('./frame');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Bowl(){}

Bowl.prototype.roll = function(){
  return getRandomInt(0,10)
}

Bowl.prototype.roll2 = function(roll1){
  return getRandomInt(0, 10 - roll1)
}

Bowl.prototype.saveOutcome = function(){

}
