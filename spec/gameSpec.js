// class specShortcut{
//   static playAFrame(game ,shotOne, shotTwo = 0) {
//     var lame = new Game
//     lame.currentFrame.newShot(shotOne)
//     if(shotTwo){lame.currentFrame.newShot(4)}
//     lame.currentFrame.frameScoreCalculator()
//     lame.startNextFrame()
// }}


describe('game', function(){
  beforeEach(function() {
    game = new Game
    playFrame = function(shot1,shot2) {
      game.currentFrame.newShot(shot1)
      if(shot2 != undefined){game.currentFrame.newShot(shot2)}
      game.currentFrame.bonusAttributer();
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame();   
      game.updateCurrentScore()
    }
  })

  describe('frameEnded', function(){
    it('knows when the current frame is over when not a bonus round', function() {
      game.currentFrame.newShot(4)
      game.currentFrame.newShot(4)
      game.currentFrame.bonusAttributer();
      expect(game.frameEnded()).toEqual(true)
    })
    it('knows when the current frame has ended when a strike', function(){
      game.currentFrame.newShot(10)
      game.currentFrame.bonusAttributer()
      expect(game.frameEnded()).toEqual(true)
    })

    it('does not think frame has ended after one shot <10', function() {
      game.currentFrame.newShot(9);
      game.currentFrame.bonusAttributer()
      expect(game.frameEnded()).toEqual(false)
    })
  })

  describe('startNextFrame', function(){
    it('resets current frame when a frame ends', function() {
      var startFrame = game.currentFrame
      game.currentFrame.newShot(4)
      game.currentFrame.newShot(4)
      game.startNextFrame()
      expect(game.currentFrame).not.toEqual(startFrame)
    })
    it('adds the old frame to the frames array', function() {
      var startFrame = game.currentFrame
      game.currentFrame.newShot(4)
      game.currentFrame.newShot(4)
      game.startNextFrame()
      expect(game.frames[0]).toEqual(startFrame)
  
    })
    it('does nothing if the frame hasn\'t ended', function() {
      var startFrame = game.currentFrame
      game.currentFrame.newShot(4)
      game.startNextFrame()
      expect(game.frames.length).toEqual(0)
      expect(game.currentFrame).toEqual(startFrame)
    })
    it('works for consecutive frames', function() {
      game.currentFrame.newShot(4)
      game.currentFrame.newShot(4)
      game.startNextFrame()
      game.currentFrame.newShot(4)
      game.currentFrame.newShot(4)
      game.startNextFrame()
      expect(game.frames.length).toEqual(2)
    })
  })

  describe('updateCurrentScore', function() {
    it('adds the score after the last frame', function() {
      game.currentFrame.newShot(4)
      game.currentFrame.newShot(4)
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.updateCurrentScore()
      expect(game.totalScore).toEqual(8)
    })
    it('keeps track of scores over several frames', function() {
      game.currentFrame.newShot(4)
      if(5){game.currentFrame.newShot(4)}
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.currentFrame.newShot(4)
      if(5){game.currentFrame.newShot(4)}
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.currentFrame.newShot(4)
      if(5){game.currentFrame.newShot(4)}
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.updateCurrentScore()
      expect(game.totalScore).toEqual(24)
    })
    it('keeps track over multiple frames where zeros are in the mix(because the player sucks kinda bad', function() {
      game.currentFrame.newShot(4)
      if(5){game.currentFrame.newShot(0)}
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.currentFrame.newShot(4)
      if(5){game.currentFrame.newShot(4)}
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.currentFrame.newShot(0)
      if(5){game.currentFrame.newShot(4)}
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.updateCurrentScore()
      expect(game.totalScore).toEqual(16)
    })
  })
  describe('add bonus frame', function() {
    //this function will add abonus frame, we expect this to be a different class because its different. 
  })

  describe('addBonusScores', function() {
    it('adds next two roll\'s points for a strike', function() {
    // game.currentFrame.newShot(4)
      // game.currentFrame.newShot(10)
      // game.currentFrame.frameScoreCalculator()
      // game.startNextFrame()
      // game.currentFrame.newShot(4)
      // game.currentFrame.newShot(4)
      // game.currentFrame.frameScoreCalculator()
      // game.startNextFrame()
      // game.currentFrame.newShot(0)
      // game.currentFrame.newShot(4)
      // game.currentFrame.frameScoreCalculator()
      // game.startNextFrame()
      // game.updateCurrentScore()
      game.currentFrame.newShot(10)
      game.currentFrame.bonusAttributer()
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.currentFrame.newShot(4)
      if(5){game.currentFrame.newShot(4)}
      game.currentFrame.bonusAttributer()
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.currentFrame.newShot(0)
      if(5){game.currentFrame.newShot(4)}
      game.currentFrame.bonusAttributer()
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      // game.updateCurrentScore()
      //expect(game.totalScore).toEqual(16)
      //console.log(game.frames.map( frame => frame.score))
      expect(game.frames[0].score).toEqual(18)
    })
    it('adds next rolls points for a spare', function() {
      game.currentFrame.newShot(5)
      game.currentFrame.newShot(5)
      game.currentFrame.bonusAttributer()
    //  console.log(game.currentFrame.spare  == true)
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.currentFrame.newShot(4)
      if(5){game.currentFrame.newShot(4)}
      game.currentFrame.bonusAttributer()
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      game.currentFrame.newShot(0)
      if(5){game.currentFrame.newShot(4)}
      game.currentFrame.bonusAttributer()
      game.currentFrame.frameScoreCalculator()
      game.startNextFrame()
      // game.updateCurrentScore()
      //expect(game.totalScore).toEqual(16)
      //console.log(game.frames.map( frame => frame.score))
      expect(game.frames[0].score).toEqual(14)
    })
    it('works for a mixture of spares and strikes', function() {
      playFrame(10);//18
      playFrame(5,3);//8
      playFrame(2,8);//17
      playFrame(7,1);//8
      playFrame(1,1);//2
      expect(game.totalScore).toEqual(53)
    })
  })

  describe('addBonusRound', function(){
    it('knows to add a bonus round when you get a strike in frame 10', function(){
      for(var i = 0; i < 9; i++){playFrame(3,4)}
      playFrame(10)
      expect(game.addBonusRound()).toEqual(true)
    })
    it('knows not to add a bonus round when you dont get a strike in frame 10', function(){
      for(var i = 0; i < 9; i++){playFrame(3,4)}
      playFrame(9,0)
      expect(game.addBonusRound()).toEqual(false)
    })
    it('knows to add a bonus round if you get a spare in the tenth frame', function() {
      for(var i = 0; i < 9; i++){playFrame(3,4)}
      playFrame(9,1)
      expect(game.addBonusRound()).toEqual(true)
    })
    // it('knows not to add a bonus round when you dont get a spare in frame 10', function(){
    //   for(var i = 0; i < 9; i++){playFrame(3,4)}
    //   playFrame(9,0)
    //   expect(game.addBonusRound()).toEqual(false)
    // })
  })//deleted test above as it was also covered in the previous strike negative test
  describe('gameEnded', function(){
    it('knows game has ended after 10 non-bonus frames',function(){
      for(var i = 0; i < 10; i++){playFrame(3,4)}
      expect(game.gameEnded()).toEqual(true)
    })
    it('knows when a frame hasnt finished after 9 frames',function(){
      for(var i = 0; i < 9; i++){playFrame(3,4)}
      expect(game.gameEnded()).toEqual(false)
    })
    it('knows a game hasn\t ended when you need a bonus frame', function(){
      for(var i = 0; i < 9; i++){playFrame(3,4)}
      playFrame(10)
      expect(game.gameEnded()).toEqual(false)
    })
  })
  describe('just want to see the final score totals', function() {
    it('gets score correct with all strikes', function(){
      for(var i = 0; i < 12; i++){
      playFrame(10)}
      expect(game.totalScore).toEqual(300)
    })
    it('gets correct score with all spares', function() {
      for(var i = 0; i < 12; i++){
        playFrame(5,5)}
        // var y = game.frames.map(frame => frame.sc)
        // console.log(game.)
        expect(game.totalScore).toEqual(150)
    })
    it('gets the correct score for different scores with no bonus round', function() {
      playFrame(10)
      playFrame(5,5)
      playFrame(1,2)
      playFrame(9,1)
      playFrame(7,2)
      playFrame(8,1)
      playFrame(2,4)
      playFrame(5,2)
      playFrame(4,1)
      playFrame(9,0)
      
      game.startNextFrame()
      // console.log(game.currentFrame.frameEnded())
      // console.log(game.currentFrame)
      // console.log(game.frames[game.frames.length-1].score + "???")
      
      // console.log(game.frames)
      expect(game.totalScore).toEqual(96)
    })
    it('gets strike in all but last frame', function() {
      for(var i = 0; i < 10; i++){
        playFrame(10)}
        playFrame(1,1)
        console.log(game.frames)
        expect(game.totalScore).toEqual(273)
    })
  })
})