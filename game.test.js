const Game = require('./Game');

// // const nameDouble = { getPrice: () => '4.99'}
// const fakeCandy = { name: 'Skittles', price: 3.99};
// const newBasket = new ShoppingBasket();

describe('Roll', () => {
  it ('adds the number of pins knocked down to the rolls array', () => {
    const newGame = new Game;
    newGame.roll(5);
    expect(newGame.rolls).toEqual([5]);
  });


});

