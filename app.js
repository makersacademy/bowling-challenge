const Game = require ('./lib/game');
const prompt = require ('prompt-sync')();
const game = new Game

for (let frame = 1; frame <= 10; frame++) {
  console.log (`Frame ${frame}:`);
  console.log ('Enter first roll: ');
  const first_roll = prompt()
  game.roll(parseInt(first_roll));
  
  if (parseInt(first_roll) === 10) {
    console.log ('You got a strike!');
    if (parseInt(frame) === 10) {
        console.log ('Bonus Frame (Strike)');
        console.log('Enter first bonus roll: ');
        const first_bonus_roll = prompt();
        game.roll(parseInt(first_bonus_roll));

        console.log ('Enter second bonus roll: ');
        const second_bonus_roll = prompt();
        game.roll(parseInt(second_bonus_roll));
    }
    continue;
  }

  console.log ('Enter second roll: ');
  const second_roll = prompt();
  game.roll(parseInt(second_roll));
  
  if (parseInt(first_roll) + parseInt(second_roll) === 10) {
    console.log ('You got a spare!');
    if (parseInt(frame) === 10) {
      console.log ('Bonus Frame (Spare):');
      console.log ('Enter bonus roll: ');
      const bonus_roll = prompt();
      game.roll(parseInt(bonus_roll));
    }
  }
};
  
console.log(`Your score is: ${game.score()}`);