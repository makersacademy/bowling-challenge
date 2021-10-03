
Bowling Challenge
=================

### Specifications 

1. Gutter game: A Gutter Game is when the player never hits a pin (20 zero scores)

2. Score: A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times.

3. Perfect game: A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

4. Spares: The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

5. Strike: The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Credits

- OwenLamb - https://codepen.io/owenjam/pen/reeLWN
- Joe Kadi - https://medium.com/geekculture/solving-the-bowling-game-kata-in-vanilla-javascript-37e25d6d2305

### Comments

1. I would like to be able to edit interface.js so that the numbers show up within the scorecard. I had played around with this so that numbers were coming up, but for each '#pinHit' I would have to specify which frame the input text would be in. This needs to be more in the order of:

'frame1' > 'frame1' > then the total of them both in 'marker0'
'frame2' > 'frame2' > then the total of them both in 'marker1' etc. etc. 

```
document.querySelector('#pinHit-1').addEventListener('click', () => {
game.roll(1);
document.querySelector('#frame1').innerText = game.rolls;
    });
```

2. Edit Game.js so that the maximum total for a frame is 10. Incorporate a message saying 'Invalid roll - there are only ten pins!' if the player rolls 5 and 6 (total 11) for example in one frame. 

3. The total score shows up on the 12th bowl but the player can continue to click the buttons, which doesn't make sense. The game should end once the player as clicked 12 pinHits, giving the option to restart. 

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

