describe('fizzBuzz', function () {

  var game;

  beforeEach(function() {
    game = new fizzBuzz();
  });

  describe('returns a number', function () {
    it('should return a number', function(){
      expect(game.number(1)).toBe(1);
    });
  });

  describe('knows when a number is', function () {

    it('is divisible by 3', function () {
      expect(game.isDivisibleByThree(3)).toBe(true);
    });

    it('is not divisible by 3', function (){
      expect(game.isDivisibleByThree(4)).toBe(false);
    });

    it('is divisible by 5',function(){
      expect(game.isDivisibleByFive(5)).toBe(true);
    });

    it('is not divisible by 5',function(){
      expect(game.isDivisibleByFive(6)).toBe(false);
    });

    it('is not divisible by 15',function(){
      expect(game.isDivisibleByFifteen(15)).toBe(true);
    });

    it('is not divisible by 15',function(){
      expect(game.isDivisibleByFifteen(16)).toBe(false);
    });
  });

  describe('playing fizzbuzz', function () {
    it('it should print fizz if number is divisible by 3', function(){
      expect(game.play(3)).toEqual('Fizz');
    });

    it('it should print buzz if number is divisible by 5', function(){
      expect(game.play(5)).toEqual('Buzz');
    });

    it('it should print fizz if number is divisible by 15', function(){
      expect(game.play(15)).toEqual('FizzBuzz');
    });

    it('it should print number if number is not divisible by 3, 5, 15', function(){
      expect(game.play(2)).toEqual(2);
    });

    it('it should print 0 if number is 0', function(){
      expect(game.play(0)).toEqual(0);
    });


  });


});
