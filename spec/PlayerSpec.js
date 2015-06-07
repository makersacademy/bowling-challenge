describe('Player', function(){
  var player;

  beforeEach(function(){
    player = new Player;
  });

  it('has 10 frames', function() {
    expect(player.frames.length).toEqual(10);
  });

  it('returns the score of frame up to position 1 with one strike', function (){
      player.play(0,10);
      player.play(1,1);
      player.play(1,2);
      expect(player.score(1)).toEqual(16);
  });
    it('returns the score of frame up to position 1 with 2 gutter balls', function (){

      player.play(0,10);
      player.play(1,0);
      player.play(1,0);
      expect(player.score(1)).toEqual(10);
  });

    it('returns the score of frame up to position 1 with neither strikes nor spares', function (){

      player.play(0,2);
      player.play(0,1);
      player.play(1,3);
      player.play(1,5);
      expect(player.score(1)).toEqual(11);
  });

    it('returns the score of frame up to position 2 with 2 strikes', function (){
      var times = 2;
      bowlStrike(times);
      player.play(2,3);
      player.play(2,5);
      expect(player.score(2)).toEqual(49);
  });

     it('returns the score of frame up to position 3 with 3 strikes ', function (){

      var times = 3;
      bowlStrike(times);
      player.play(3,5);
      player.play(3,1);
      expect(player.score(3)).toEqual(77);
  });

     it('returns the score of frame up to position 2 with 1 strike ', function (){

      player.play(0,2);
      player.play(0,5);
      player.play(1,10);
      player.play(2,0);
      player.play(2,0);
      expect(player.score(2)).toEqual(17);
  });

     it('returns the score of frame up to position 1 with 1 spare ', function (){

      player.play(0,2);
      player.play(0,8);
      player.play(1,3);
      player.play(1,4);
      expect(player.score(1)).toEqual(20);
  });


     it('returns the score of a perfect match', function (){
      var lastFrame = 9;
      var times = 10;
      bowlStrike(times);
      player.playXtra(10);
      player.playXtra(10);
      expect(player.score(lastFrame)).toEqual(300);
  });

  function bowlStrike(times) {
    var score = 0;
    for (var i = 0; i < times; i++) {
      score = player.play(i,10);
    };
    return score;
  };
});



