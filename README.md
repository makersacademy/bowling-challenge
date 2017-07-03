## Bowling Game

![Bowling Game](http://media.istockphoto.com/photos/bowling-pins-picture-id503111362?k=6&m=503111362&s=612x612&w=0&h=eJ5e7AufvPUTNl_nNkU-mFoRrvw2300jB7gyihrD4po=)

#### Description
A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset. This app has an interface that allows users to knock down a chosen number of pins.

#### Rules

* Strikes
If a player knocks down all 10 pins in a frame of a game, the frame ends and the game moves on to the subsequent frame. A strike entitles a player to a bonus - number of pins knocked down by the next two rolls. An important consideration here is that if the next frame is a strike and comprised therefore of only one roll, then programatically, the game needs to take this into account and extract the roll score from a frame two ahead.

* Spares
The player has a spare if the knocks down all 10 pins within the two rolls of a frame. A spare entitles a player to a bonus. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

* 10th frame
In this frame, if the player rolls a strike or spare, they can roll the additional ball for the bonus because technically there is no 11th frame. However, they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

* Perfect Game
A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

* Gutter Game
A Gutter Game is when the player never hits a pin (20 zero scores).

#### Configuration
* clone this repo
* This app is written in HTML and Javascript.
* It does not need to be run through a server.
* Open index.html in your browser.
* Click the link in the top right hand corner for the Jasmine SpecRunner test suite.
* The tests use HTMLFixtures
