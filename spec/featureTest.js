var calculator = new ScoreCalculator([],[]);

for (var i = 1; i < 12; i++) {
      calculator.frames.push(new Frame(i));
    }

calculator.frames.forEach(function(frame) {
    frame.firstRoll(10);
});

calculator.frames[10].secondRoll(10);

for (var i = 1; i < 10; i++) {
      calculator.bonuses.push(new Bonus("strike", i));
    }

calculator.totalScore();
