roll = new Roll();
roll.addRoll(8);
roll.addRoll(2);
// console.log(roll.showRoll(1));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
game = new Game();
game.addFrame(roll);
console.log(game.showFrame(1));
game.addFrame("testgame2");
console.log(game.showFrame(2));






//#######################################################

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
roll = new Roll();
roll.addRoll(8);
console.log(roll.showRoll(1));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
game = new Game();
game.addFrame("testgame1");
console.log(game.showFrame(1));
game.addFrame("testgame2");
console.log(game.showFrame(2));
