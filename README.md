Bowling Challenge
================= 

## What it does: 
This program runs in the terminal and will calculate the total score of a single player's bowling rolls. <br>
It will only accept one roll in a frame if the first roll is a strike. For any other rolls, it will ask for a second roll. In the final frame, if you score a strike or a spare, the relevant bonus rolls will be included. <br>
The output to the terminal when running the program features colours and emojis. <br>
[Read the design markdown for this program.](./docs/design-recipe.md)

## What it needs: 
- The UserInterface class was not test driven, and tests have not yet been used to check the class.
- The UserInterface class requires refactoring.
- There is no validation on user input - they can input strings which are not numbers and the program will continue to run but NaN will be the output.
- There is no limit to the number that the user can add, so if they rolled a 9, they could still input 8 and the program will use those numbers to calculate a final score. 
- Test coverage needs to be improved.

## To run:

`nvm install node`\
`npm init -y`\
`npm install prompt-sync`\
`npm i chalk@4.1.2`\
`npm install --save node-emoji`\
Run the following in the terminal to use the bowling calculator:\
`node app.js` 

## In Action
![Bowling scorecard in action](./docs/bowling%20scorecard%20demo.gif)

## Bowling — how does it work?

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

