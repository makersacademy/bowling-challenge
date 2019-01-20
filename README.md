# Bowling Challenge

A browser console app of a scorecard that can count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.


## Getting Started

1. Clone this repo `git clone git@github.com:Sindex42/bowling-challenge.git`
2. Change directory `cd bowling-challenge`


## Running the tests

1. Open the SpecRunner file in your browser `open SpecRunner.html`


## Usage

All interaction with the program is through the console

1. Open the developer console in your browser, e.g. in Chrome:  
  `ctrl + shift + J` (windows) or 
 `cmd + option + J` (mac)

2. Create a new scoresheet `scoresheet = new Scoresheet`

3. Make a new roll `scoresheet.roll([your roll])`


## Approach

1. A passing a feature test for a gutter game (20, '0' rolls resulting in a final score of 0). Completing this first meant that a user could complete a game and that the rolling function was working properly.

2. A passing test for a complete game containing neither strikes nor spares as calculating the bonus points would introduce complications.

3. Implement the scoring and tracking of a single spare as I felt they were contained to a single frame more easily.

4. Expand the game to be able to handle any number of spares.

5. Implement the scoring and tracking of a single strike which would hopefully use a similar structure.


## Future direction

* Consecutive strikes: My current implementation of strikes does not easily allow the tracking of scores needed for consecutive ones.

* Bonus rolls in the 10th frame

* Extracting a Frame class: After implementing spares, I found that I needed to heavily refactor my code as it was getting hard to read. I also took the opportunity to improve weak tests and remove the redundant ones. This made it clear that having a separate class for frames would both make my code adhere to single responsibility principles better and would facilitate the implementation of consecutive strikes. 

* Input sanitation: My current program assumes the user will always input a valid roll. Especially when it comes to completing frames with the remaining pins for a spare to occur.
