describe('Game', function(){

    var game;

    beforeEach(function(){
       game = new Game();
    });

    function gameFrames(n, frame) {
      for(var i = 0; i < n; i++){
        game.bowl(frame);
      }
    }

    describe('Starting a game', function(){

      it('starts the Bowling game', function(){
        expect(game.startgame).toEqual(true);
      })
      it('starts the Bowling game without a score', function(){
        expect(game.startscore).toBe(0);
      })
     });

    describe('Gutter game', function(){

      it('scores all consecutive gutter balls', function(){
        gameFrames(10, [0,0])
        expect(game.score()).toEqual(0);
      })
    })

    describe('Regular game', function(){

      it('scores without bonus frames', function(){
        gameFrames(1, [3,4])
        gameFrames(1, [2,6])
        expect(game.score()).toEqual(15);
      })
      it('scores with a bonus spare frame', function(){
        gameFrames(1, [5,5])
        gameFrames(1, [1,4])
        expect(game.score()).toEqual(16);
      })
      it('scores with a bonus strike frame', function(){
        gameFrames(1, [10,0])
        gameFrames(1, [1,4])
        expect(game.score()).toEqual(20);
      })
     })

});
