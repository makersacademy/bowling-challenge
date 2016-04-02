# Bowling game:

* 10 frames => frames array, length 10;
<!-- * 10 pins; -->
<!-- * in each frame: roll * 2; -->

* frameScore = numPinsKnockedDown + bonus;
<!-- * after each frame: reset 10 pins; -->

* isStrike (knocks down 10 pins in 1st roll) => nextFrame, bonus: numPinsNextFrame;
* isSpare (knocks down 10 pins in 2 rolls) => bonus: numPinsNextRoll;
* lastFrame: isStrike / isSpare: 3 roll; score: 1st roll/1st+2nd rolls; bonus: 2nd+3rd rolls/3rd roll;

<!-- * Gutter Game: 20 zero scores; -->

* Perfect Game: 10 + 2 strikes;

# Code review:

* Features
   <!-- Gutter game -->
   <!-- One frame -->
   Multiple frames
   Spares
   Strikes
   Final Frame
* Bonus Features
   UI
