'use strict';

describe('game', function() {
  let game;

  beforeEach(function() {
    game = new Game;
  });

  let multiRoll = function (pins, rounds) {
    for(let i = 0; i < rounds; i++) {
      game.roll(pins)
    }
  };

  describe('guttergame', function() {
    it('can roll a gutter game' , function() {
    multiRoll(0,20)
    expect(game.score()).toBe(0)
    })
  })

  describe('can roll a normal game', function() {
    it('can roll produces resuls from a normal game', function(){
     multiRoll(1,20)
     expect(game.score()).toEqual(20)
    })
  })

  describe('spare game', function(){
    it('can roll a spare game', function(){
      game.roll(8)
      game.roll(2)
      game.roll(4)
      multiRoll(0,17)
      expect(game.score()).toEqual(18)
    })
  })

})






// describe 'game' do
//   before do
//     @game = Game.new
//   end

//   it 'can bowl all zeros' do
//     20.times { @game.bowl 0 }
//     expect(@game.score).to eq 0
//   end

//   it 'can bowl all ones' do
//     20.times { @game.bowl 1 }
//     expect(@game.score).to eq 20
//   end

//   it 'can bowl a spare' do
//     @game.bowl(5)
//     @game.bowl(5)
//     @game.bowl(2)
//     17.times { @game.bowl 0 }
//     expect(@game.score).to eq 14
//   end

//   it 'bowl a strike' do
//     @game.bowl(10)
//     @game.bowl(5)
//     @game.bowl(2)
//     16.times { @game.bowl 0 }
//     expect(@game.score).to eq 24
//   end

//   it 'can bowl 12 strikes' do
//     16.times { @game.bowl 10 }
//     expect(@game.score).to eq 300
//   end

//   it 'can bowl all spares' do
//     21.times { @game.bowl 5 }
//     expect(@game.score).to eq 150
//   end

//   it 'raise an error if pin_down is more than 10' do
//     expect { @game.bowl(11) }.to raise_error 'enter a score less than 10'
//   end

//   it 'last @game strike' do
//     18.times { @game.bowl(3) }
//     @game.bowl(10)
//     @game.bowl(7)
//     @game.bowl(2)
//     expect(@game.score).to eq 73
//   end
// end
