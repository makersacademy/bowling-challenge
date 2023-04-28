Bowling Challenge - In JS
=================
First things first, there is no UI. I thought it would be unlikely to write any terminal based applications in JavaScript, so I skipped it.
That being said, some of the program's logic assumes there would be some sort of UI in the long run, so user input checks and overall gameplay logic have not been incorporated.

Installation and gameplay
-----
```bash
git clone https://github.com/umutbaykan/bowling-challenge.git
npm install
jest # to see test results, it should all pass
node
```
And to 'play' it through terminal

```javascript
Scorecard = require('./scorecard')
scorecard = new Scorecard()
// all class methods should then be available
scorecard.addFrame(5,3)
scorecard.calculateScore() // 8
// frames should be added as a pair of dropped pins
scorecard.addFrame(2,3)
// a strike should be added as just a 10. spares can be added as pairs
scorecard.addFrame(10)
scorecard.calculateScore() // 28

// once 10 frames are completed, the player should add their bonus frames using the same method
// 3 perfect bonuses
scorecard.addFrame(10,10,10)
// 1 strike, 1 additonal shot
scorecard.addFrame(10,4)
// 1 additional shot
scorecard.addFrame(5)
// if the player did not have any bonus shots, you dont need to do anything. 

// if you want to reset all the frames without having to launch node again
scorecard.resetGame()
// if you want to check if a game is perfect, gutter or a regular one
scorecard.checkForPerfectOrGutter()
```

How does it actually work?
-----
There are many ways this program could have been built, but this one is designed on top of single scoreboard class for simplicity. This is because 'pins' are actually just integers and 'frames' is an array of arrays that contain integers representing players dropped pins. Splitting them into separate classes seemed unnecessary as neither pins nor frames are expected to hold any functions of their own, interpreting their score is what matters here which is done by the scoreboard class.

![Excalidraw diagram showing the array configuration of scorecard](https://i.ibb.co/CQzrWkF/Screenshot-2023-04-28-at-11-53-19.png)
Frames and strikes effect the points of the frames that are after them so while evaluating the score, calculateScore() method checks the previous frame to see if it was a strike or spare and adds the extra points to the current frame. That way we can display the current score player has during the game and do not have to wait until the game concludes to see the score. 

Frames 0 to 9 (indexes) are checked this way, but because extra rolls are counted differently we have a separate method called out to evaluate their score. This method only activates if the length of the list is above 10 (meaning there are bonus shots). In an ideal world, allowing player to make more rolls based on their 10th frame would be handled by the UI and Game logic, but since we don't have that this was a workaround to handle miscounts that may have happened while playing through node.

//TODO's
-----
- An actual UI class, which would check user's input and sanitise it (if user enters strings, pins out of range etc.) as well as print messages to terminal.
- A player class, which would hold a separate scorecard instance for each player.
- A game class, which would run the full game and its overall logic. It would limit the game to 10 rolls, skip the second roll if player's first roll is a 10, decide the winner in the end etc.
- Currently when we invoke calculateScore() method, it recounts the array from the beginning to get current score which is fine as we have a small array. If we worked with a large array, this method would need to be tweaked with to add the last roll to the general score instead of recounting it each time.
