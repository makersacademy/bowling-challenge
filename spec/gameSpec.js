describe('Game', function() {

  describe('roll a ball', function() {

    beforeEach(function() {
      game = new Game();
    });

    it('player can roll a gutter ball', function() {
      game.roll(0)
      expect(game.rollScore).toEqual([0]);
    });

    it('player can knock down 1 pin', function() {
      game.roll(1)
      expect(game.rollScore).toEqual([1]);
    });

  });

});

// describe('Thermo', function() {
//
//   beforeEach(function() {
//     thermo = new Thermo();
//   });
//
//   describe('default mode', function() {
//
//     beforeEach(function() {
//       thermo = new Thermo();
//     });
//
//     it('thermo starts at 20 degrees', function() {
//       expect(thermo.degrees).toEqual(20);
//     });
