## JavaScript Bowling Scorecard 🎳
### Overview:

This is my attempt at creating a 10-pin bowling scorecard. The application can count and sum the scores of a bowling game for one player. This was an exercise in object oriented programming in Javascript. This code is written in vanilla Javascript and test-driven using the Jasmine framework. The user interface is written using jQuery, HTML and CSS. 

### Demo:
This app is deployed on **[Heroku](https://sympinbowling.herokuapp.com/)**

<img src="./images/gifdemo.gif" alt="gifdemo" height="auto" width="600px"></a>

**To run this code locally:**  

    $ git clone git@github.com:[USERNAME]/bowling-challenge.git
    $ cd bowling-challenge
    $ open home.html

**To run the test suite**
   

    $ git clone git@github.com:[USERNAME]/bowling-challenge.git
    $ cd bowling-challenge
    $ open SpecRunner.html

### Planning & Design:

![](images/Frame%201-9%20logic.png)

![](images/bowling%20frame%2010.png)

![](images/Complete%20Game.png)

### Improvements:  

- Add a jQuery effect to hide invalid rolls during each frame.
- Add functionality to keep track of previous game scores.
- Add functionality for more than one player. 
- Add animation for special rolls

### Bowling Logic:
  
A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

#### Stikes
The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

#### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

#### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.
10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

#### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

#### Perfect Game

  

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

  

![Ten Pin Score Example](images/example_ten_pin_scoring.png)