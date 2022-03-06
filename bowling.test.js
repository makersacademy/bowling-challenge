const Bowling = require('./bowling.js');

let bowling;

beforeEach(() => { 
  bowling = new Bowling();
});

describe('bowling', () => {
    test('it can return a gutter game', () => {
      for (let i = 0; i < 20; i++) {
        bowling.roll(0);
      }
      expect(bowling.score).toEqual(0);
    });

    test('can roll all 1s', () => {
      for (let i = 0; i < 20; i++) {
        bowling.roll(1);
      }
      expect(bowling.score).toEqual(20);
    });

    test('it can roll a spare', () => {
        bowling.roll(5);
        bowling.roll(5);
        bowling.roll(3);
        for (let i = 0; i < 17; i++) {
            bowling.roll(0);
        }
        expect(bowling.score).toEqual(16);
      });

});


//   it 'can roll a strike' do
//     @game.roll(10)
//     @game.roll(5)
//     @game.roll(3)
//     16.times{@game.roll(0)}
//     expect(@game.score).to eq(26)
//   end

//   it 'can have a perfect game' do 
//     12.times{@game.roll(10)}
//     expect(@game.score).to eq(300)
//   end