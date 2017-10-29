
Bowling Challenge
=================

This project implements in JavaScript a way of calculating the total score for a game of 10-pin bowling. The scoring algorithm can be accessed by typing into the browser console:

```js
var game = new Game();
```

and then:

```js
game.addRoll(numberOfPinsKnockedDown);
```

for each roll. I decided to focus this weekend on trying to make the code as robust and readable as possible, and an obvious next step would be to make it more accessible via browser-based input fields. It assumes anyone using it will enter accurate data, and so does not raise errors if, say, a bowler appears to have knocked down more than 10 pins in one frame, or if they seem to be continuing beyond 10 frames in one game, so there is room for improvement here too.
