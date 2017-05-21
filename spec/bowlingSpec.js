describe('Bowling', function () {

  function setUpHTMLFixture() {
  setFixtures(
       '<table><tbody class="text-canter">'
         +'<tr>'
           +'<td class="text-center" id="frame-1-roll-1">0</td>'
           +'<td class="text-center" id="frame-1-roll-2">0</td>'
           +'<td class="text-center" id="frame-2-roll-1">0</td>'
           +'<td class="text-center" id="frame-2-roll-2">0</td>'
           +'<td class="text-center" id="frame-3-roll-1">0</td>'
           +'<td class="text-center" id="frame-3-roll-2">0</td>'
           +'<td class="text-center" id="frame-4-roll-1">0</td>'
           +'<td class="text-center" id="frame-4-roll-2">0</td>'
           +'<td class="text-center" id="frame-5-roll-1">0</td>'
           +'<td class="text-center" id="frame-5-roll-2">0</td>'
           +'<td class="text-center" id="frame-6-roll-1">0</td>'
           +'<td class="text-center" id="frame-6-roll-2">0</td>'
           +'<td class="text-center" id="frame-7-roll-1">0</td>'
           +'<td class="text-center" id="frame-7-roll-2">0</td>'
           +'<td class="text-center" id="frame-8-roll-1">0</td>'
           +'<td class="text-center" id="frame-8-roll-2">0</td>'
           +'<td class="text-center" id="frame-9-roll-1">0</td>'
           +'<td class="text-center" id="frame-9-roll-2">0</td>'
           +'<td class="text-center" id="frame-10-roll-1">0</td>'
           +'<td class="text-center" id="frame-10-roll-2">0</td>'
           +'<td class="text-center" id="frame-10-roll-3">0</td>'
          +'</tr>'
          +'<button type="button" class="btn btn-primary btn-lg" id="num-0">0</button>'
          +'<button type="button" class="btn btn-primary btn-lg" id="num-1">1</button>'
          +'<button type="button" class="btn btn-primary btn-lg" id="num-2">2</button>'
          +'<button type="button" class="btn btn-primary btn-lg" id="num-3">3</button>'
          +'<button type="button" class="btn btn-primary btn-lg" id="num-4">4</button>'
          +'<button type="button" class="btn btn-primary btn-lg" id="num-5">5</button>'
          +'<button type="button" class="btn btn-primary btn-lg" id="num-6">6</button>'
          +'<button type="button" class="btn btn-primary btn-lg" id="num-7">7</button>'
          +'<button type="button" class="btn btn-primary btn-lg" id="num-8">8</button>'
          +'<button type="button" class="btn btn-primary btn-lg" id="num-9">9</button>'
          +'<button type="button" class="btn btn-primary btn-lg" id="num-10">10</button>'
          +'<tr>'
            +'<td colspan="2" class="text-center" id="frame-1">0</td>'
            +'<td colspan="2" class="text-center" id="frame-2">0</td>'
            +'<td colspan="2" class="text-center" id="frame-3">0</td>'
            +'<td colspan="2" class="text-center" id="frame-4">0</td>'
            +'<td colspan="2" class="text-center" id="frame-5">0</td>'
            +'<td colspan="2" class="text-center" id="frame-6">0</td>'
            +'<td colspan="2" class="text-center" id="frame-7">0</td>'
            +'<td colspan="2" class="text-center" id="frame-8">0</td>'
            +'<td colspan="2" class="text-center" id="frame-9">0</td>'
            +'<td colspan="2" class="text-center" id="frame-10">0</td>'
          +'</tr>'
          +'<tr>'
            +'<td colspan="20" class="text-center total-score">Total Score : <span id="total-score"></span></td>'
          +'</tr></tbody></table>'
              );
   }

  var bowlingGame;

  beforeEach(function () {
    setUpHTMLFixture();
    bowlingGame = new Bowling ();
  })

  describe('Games', function () {
    it('can be created', function () {
      expect(bowlingGame instanceof Bowling).toBe(true)
    })
    it('initial score is 0', function () {
      expect(bowlingGame.score()).toEqual(0)
    })
  })

  describe('framesToPlay function', function () {
    it('returns unplayed frames', function () {
      expect(bowlingGame.framesToPlay().length).toEqual(10)
      var finishedFrameOne = bowlingGame._frames[0]
      var finishedFrameTwo = bowlingGame._frames[1]
      finishedFrameOne._finished = true
      finishedFrameTwo._finished = true
      expect(bowlingGame.framesToPlay().indexOf(finishedFrameOne)).toEqual(-1)
      expect(bowlingGame.framesToPlay().indexOf(finishedFrameTwo)).toEqual(-1)
      expect(bowlingGame.framesToPlay().length).toEqual(8)
    })
  })

  describe('calculates', function () {
    it('spare score correctly', function () {
      expect(bowlingGame.score()).toEqual(0)
      bowlingGame.roll(5)
      bowlingGame.roll(5)
      bowlingGame.roll(5)
      bowlingGame.roll(5)
      bowlingGame.roll(0)
      bowlingGame.roll(0)
      expect(bowlingGame.score()).toEqual(25)
    })
    it('spare score correctly', function () {
      expect(bowlingGame.score()).toEqual(0)
      bowlingGame.roll(5)
      bowlingGame.roll(5)
      bowlingGame.roll(5)
      bowlingGame.roll(5)
      bowlingGame.roll(5)
      bowlingGame.roll(0)
      bowlingGame.roll(0)
      bowlingGame.roll(0)
      expect(bowlingGame.score()).toEqual(35)
    })
    it('score correctly', function () {
      expect(bowlingGame.score()).toEqual(0)
      for (var i=0; i<20; i++) {
        bowlingGame.roll(4)
      }
      expect(bowlingGame.score()).toEqual(80)
    })
    it('score correctly', function () {
      expect(bowlingGame.score()).toEqual(0)
      for (var i=0; i<20; i++) {
        bowlingGame.roll(5)
      }
      expect(bowlingGame.score()).toEqual(145)
    })

    it('all gutter score correctly', function () {
      expect(bowlingGame.score()).toEqual(0)
      for (var i=0; i<12; i++) {
        bowlingGame.roll(0)
      }
      expect(bowlingGame.score()).toEqual(0)
    })

    it('score correctly', function () {
      expect(bowlingGame.score()).toEqual(0)
      for (var i=0; i<12; i++) {
        bowlingGame.roll(10)
      }
      expect(bowlingGame.score()).toEqual(300)
    })

    it('score correctly', function () {
      expect(bowlingGame.score()).toEqual(0)
      for (var i=0; i<11; i++) {
        bowlingGame.roll(10)
      }
      bowlingGame.roll(0)
      expect(bowlingGame.score()).toEqual(290)
    })

    it('score correctly', function () {
      expect(bowlingGame.score()).toEqual(0)
      for (var i=0; i<9; i++) {
        bowlingGame.roll(10)
      }
      bowlingGame.roll(0)
      bowlingGame.roll(0)
      expect(bowlingGame.score()).toEqual(240)
    })

    it('score correctly', function () {
      expect(bowlingGame.score()).toEqual(0)
      for (var i=0; i<9; i++) {
        bowlingGame.roll(10)
      }
      bowlingGame.roll(1)
      bowlingGame.roll(1)
      expect(bowlingGame.score()).toEqual(245)
    })

    it('score correctly', function () {
      bowlingGame.roll(10)
      bowlingGame.roll(10)
      bowlingGame.roll(10)
      bowlingGame.roll(5)
      bowlingGame.roll(2)
      bowlingGame.roll(5)
      bowlingGame.roll(2)
      bowlingGame.roll(5)
      bowlingGame.roll(2)
      bowlingGame.roll(5)
      bowlingGame.roll(2)
      bowlingGame.roll(7)
      bowlingGame.roll(3)
      bowlingGame.roll(8)
      bowlingGame.roll(1)
      bowlingGame.roll(10)
      bowlingGame.roll(10)
      bowlingGame.roll(10)
      expect(bowlingGame.score()).toEqual(157)
    })

  })

})
