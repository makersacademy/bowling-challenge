var Updater = require('../src/updater.js');
var Frame = require('../src/frame.js');
var TenthFrame = require('../src/tenthFrame.js');

describe("Updater", function() {
    var perfectRoundUpToRoundNine = [[10, 0],[10, 0], [10, 0],
                                     [10, 0], [10, 0], [10, 0],
                                     [10, 0], [10, 0], [10, 0]];

    var regularRoundUpToRoundNine = [[10, 0],[10, 0], [2, 3],
                                     [10, 0], [10, 0], [2, 3],
                                     [10, 0], [10, 0], [2, 3]];

    var regularRoundUpToRoundNineTwo = [[10, 0],[1, 3], [3, 7],
                                        [5, 0], [10, 0], [6, 3],
                                        [0, 6], [1, 8], [3, 3]];
    var partialGame = regularRoundUpToRoundNineTwo.slice(0,6);

    beforeEach(function() {
      updater = new Updater();
      frames = [];
      [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(function(){
          frames.push(new Frame());
      });
          frames.push(new TenthFrame());
    });

    it("is an instance of Game", function() {
      expect(updater).toEqual(jasmine.any(Updater));
    });

    it("can calculate regular rolls", function() {
        setFrameScore(2, 4, 0);
        setFrameScore(3, 6, 1);
        setFrameScore(3, 4, 2);
        setFrameScore(3, 2, 3);
        updater.update(frames);
        expect(frames[0].getFinalFrameScore()).toBe(6);
        expect(frames[1].getFinalFrameScore()).toBe(9);
        expect(frames[2].getFinalFrameScore()).toBe(7);
        expect(frames[3].getFinalFrameScore()).toBe(5);
    });


    it("can calculate a strike followed by a roll", function() {
        setFrameScore(10, 0, 0);
        setFrameScore(3, 6, 1);
        updater.update(frames);
        expect(frames[0].getFinalFrameScore()).toBe(19);
    });

    it("can calculate a spare followed by a regular roll", function() {
        setFrameScore(3, 7, 0);
        setFrameScore(4, 6, 1);
        updater.update(frames);
        expect(frames[0].getFinalFrameScore()).toBe(14);
    });

    it("can calculate a spare followed by a strike", function() {
        setFrameScore(3, 7, 0);
        setFrameScore(10,0, 1);
        updater.update(frames);
        expect(frames[0].getFinalFrameScore()).toBe(20);
    });

    it("calculate a strike followed by a strike", function(){
        setFrameScore(10, 0, 0);
        setFrameScore(10, 0, 1);
        setFrameScore(2, 3, 2);
        updater.update(frames);
        expect(frames[0].getFinalFrameScore()).toBe(22);
    });

    it("Can calcalculate a stike in the tenth round", function(){
        setFramesScores(regularRoundUpToRoundNine);
        setTenthRound(10, 7, 3);
        updater.update(frames);
        expect(frames[9].getFinalFrameScore()).toBe(20);
    });

    it("Can calcalculate a spare in the tenth round", function(){
        setFramesScores(regularRoundUpToRoundNine);
        setTenthRound(5, 5, 4);
        updater.update(frames);
        expect(frames[9].getFinalFrameScore()).toBe(14);
    });


    it("Can calcalculate a spare in the tenth round", function(){
        setFramesScores(regularRoundUpToRoundNine);
        setTenthRound(5, 5, 4);
        updater.update(frames);
        expect(frames[9].getFinalFrameScore()).toBe(14);
    });

    it("Can calculate the final score in ninth frame spare", function(){
        setFramesScores(regularRoundUpToRoundNine);
        setFrameScore(2, 8, 8);
        setTenthRound( 5, 3, 2);
        updater.update(frames);
        expect(frames[8].getFinalFrameScore()).toBe(15);
    });

    it("Can calculate the final score in ninth frame strike", function(){
        setFramesScores(perfectRoundUpToRoundNine);
        setFrameScore(10, 0, 8);
        setTenthRound(5, 3, 0);
        updater.update(frames);
        expect(frames[8].getFinalFrameScore()).toBe(18);
    });

    it("It can calculate the correct scores for a perfect game", function(){
        setFramesScores(perfectRoundUpToRoundNine);
        setTenthRound(10, 10, 10);
        updater.update(frames);
        var count = 0
        frames.forEach(function(frame){
            count += frame.getFinalFrameScore();
        });
        expect(count).toEqual(300);
    });

    it("can calculate a normal game correctly", function(){
        setFramesScores(regularRoundUpToRoundNineTwo);
        setTenthRound(10, 2, 4);
        updater.update(frames);
        var count = 0
        frames.forEach(function(frame){
            count += frame.getFinalFrameScore();
        });
        expect(count).toEqual(103);
    });

     it("can calculate a partial game correctly", function(){
        setFramesScores(partialGame);
        updater.update(frames);
        var count = 0
        frames.forEach(function(frame){
            count += frame.getFinalFrameScore();
        });
        expect(count).toEqual(66);
    });


    function setFramesScores(framesScores) {
        framesScores.forEach(function(frameScore, index) {
             setFrameScore(frameScore[0], frameScore[1], index)
        });
    }

    function setTenthRound(first, second, bonus) {
        frames[9].setFirstScore(first);
        frames[9].setSecondScore(second);
        frames[9].setBonusScore(bonus);
    }


    function setFrameScore(first, second = false, index){
        if (first < 10) {
            frames[index].setFirstScore(first);
            frames[index].setSecondScore(second);
        } else {
            frames[index].setFirstScore(first);
        }
    }
});

