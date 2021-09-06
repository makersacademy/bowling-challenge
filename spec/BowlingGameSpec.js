describe('bowlingGame', () => {

  let game;

  beforeEach(() => {
    game = new bowlingGame();
  });

    it('can score a gutter game', () => {
      rollMany(20, 0)
      expect(game.score()).toBe(0);
    });

    it('can score an all one game', () => {
      rollMany(20, 1)
      expect(game.score()).toBe(20);
    });

    it('can score a spare game', () => {
      game.roll(5);
      game.roll(5);
      game.roll(6);
      rollMany(17, 0)
      expect(game.score()).toBe(22);
    });
    
   it('can score a strike game', () => { 
      game.roll(10);
      game.roll(4);
      game.roll(4);
      rollMany(16, 0)
      expect(game.score()).toBe(26)
   })

   it('can score an all spares game', () => {
      rollMany(21, 5)
      expect(game.score()).toBe(150)
   })

   it('can score a perfect game', () => {
     rollMany(12, 10)
     expect(game.score()).toBe(300)
   })

   function rollMany(rolls, pins) {
    for(let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
   }
});