# Bowling challenge

## Installation instructions

* Fork and clone this repository
* Open the SpecRunner in the browser by typing `open Specrunner.js` in the command line
* Run the program through the browser console


## Program instructions

* Define a new user, e.g. `user = new User ();`
* There are only 2 user commands: `user.addFrame()` and `user.calculateScore()`
* Use `user.addFrame()` to add the result from a pair of rolls in a frame. The format should be an array of 2 elements, e.g. `user.addFrame([3, 5])`.
* Enter a strike in the following format: `user.addFrame([10, 0])`.
* If the player bowls a strike or a spare in the 10th frame, enter an array of 3 elements, e.g. `user.addFrame([10, 10, 6])`
* Once all 10 frames have been added, run the command `user.calculateScore();`.


## Flow of code

This program has 3 Objects: User, Game and Calculator.

The user only needs to interact with the 2 user functions: `user.addFrame()` and `user.calculateScore()`.

`user.addFrame()` adds a 2-element array of a frame of results to the overall array of scores for the game. The format of the frame results is an array of nested arrays.

`user.calculateScore()` creates a new instance of the Game object, passes the whole array of 10 frames to the new instance, and calls the `game.calculateScore()` function.

The `game.calculateScore()` function checks whether the player bowled either a perfect game, in which case the score is 300 points. It initially also had a function to check whether the player bowled a gutter game and returned a score of 0 points. However, this was made obsolete because a 0-point game can be processed in the same way as any non-perfect game.

Otherwise it creates a new instance of the Calculator object, passes the array of frames to the new instance and calls the `calculator.classify()` function.

`calculator.classify()` loops through all but the last array within the array of frames.

If the first element of the frame array is 10 it is classified as a strike and the `calculator.strikeScore()` function is called. If the following frame is also a strike then the next two rolls from the next two frames are added as a bonus score to the strike frame score. Otherwise, the next two rolls from the next frame are added as a bonus score to the next frame score and returned to the `classify` function.

In the `classify` function, if the two elements in a frame array add together to equal 10, it is classified as a spare and the `calculator.spareScore()` function is called. The next two rolls from the next frame are added as a bonus score to the spare frame score.

If the frame is not classified as a strike or a spare, the `calculator.normalScore()` function is called and the sum of the two elements in the frame is returned.

Finally, the `calculate.classify()` function processes the last nested frame array within the frames nested separately to the loop, using the `.normalScore()` function. This is because if the player rolls a strike or a spare in the last frame there will be no following frame to provide the bonus values. Instead the frame will have 3 rolls instead of 2. For this reason the `.normalScore()` function uses an `array.reduce()` function instead of adding the elements of the array together. This means the function works for 2-element and 3-element arrays.
