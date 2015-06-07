describe('Player', function(){
  var player;
  var lastFrame = 9;
  var times = 0;
  beforeEach(function(){
    player = new Player;
  });

  it('has 10 frames', function() {
    expect(player.frames.length).toEqual(10);
  });

  it('returns the score of frame up to position 1 with one strike', function (){
      player.play(10);
      player.play(1);
      player.play(2);
      expect(player.score(1)).toEqual(16);
  });
    it('returns the score of frame up tposition 1 with 2 gutter balls', function (){
      player.play(10);
      player.play(0);
      player.play(0);
      expect(player.score(1)).toEqual(10);
  });

    it('returns the score of frame up to position 1 with neither strikes nor spares', function (){
      player.play(2);
      player.play(1);
      player.play(3);
      player.play(5);
      expect(player.score(1)).toEqual(11);
  });

    it('returns the score of frame up to position 2 with 2 strikes', function (){
      times = 2;
      bowlStrike(times);
      player.play(3);
      player.play(5);
      expect(player.score(2)).toEqual(49);
  });

     it('returns the score of frame up to position 3 with 3 strikes ', function (){
      times = 3;
      bowlStrike(times);
      player.play(5);
      player.play(1);
      expect(player.score(3)).toEqual(77);
  });

     it('returns the score of frame up to position 2 with 1 strike ', function (){
      player.play(2);
      player.play(5);
      player.play(10);
      player.play(0);
      player.play(0);
      expect(player.score(2)).toEqual(17);
  });

     it('returns the score of frame up to position 1 with 1 spare ', function (){
      player.play(2);
      player.play(8);
      player.play(3);
      player.play(4);
      expect(player.score(1)).toEqual(20);
  });


     it('returns the score of an almost perfect match', function (){
      times = 9;
      bowlStrike(times);
      player.play(3);
      player.play(7);
      player.play(10);
      expect(player.score(lastFrame)).toEqual(273);
  });


     it('returns the score of a perfect match', function (){
      times = 12;
      bowlStrike(times);
      expect(player.score(lastFrame)).toEqual(300);
  });

   it('knows when a match is over', function (){
      times = 12;
      bowlStrike(times);
      expect(function() {player.play(5)}).toThrow("Game Over!");
  });

    it('knows when a normal match is over', function (){
      times = 20;
      bowlNormal(times);
      expect(function() {player.play(5)}).toThrow("Game Over!");
  });

  function bowlStrike(times) {
    var score = 0;
    for (var i = 0; i < times; i++) {
      score = player.play(10);
    };
    return score;
  };

  function bowlNormal(times) {
    var score = 0;
    for (var i = 0; i < times; i++) {
      score = player.play(3);
    };
    return score;
  };
});



