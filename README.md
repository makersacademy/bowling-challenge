Bowling Challenge
=================

=================
  USER STORIES
=================
As a true American on Tuesday Night I want to go bowling
So that I can go 10 pin bowling
I would like to start a game of 10 frames

As I play this great American tradition
To increase my chance of getting a better score
I would like to be able to bowl 2 games per frame

As I am playing the All American game in my team shirt
So that I can monitor my progress and prove how great I am
I would like to log my accumulating score on a scorecard after each game.

After I finish a frame, and I get a milkshake
To be able to bowl the next frame
I would like the pins reset back to 10

As a keen player, I like to brag to my friends
So that I can get an even higher score
I would like to be able to bowl spares and strikes, receiving the bonus points awarded.

As a player I would

=================
     RULES
=================

The bowler is allowed 10 frames in which to knock down pins, with frames one (1) through nine (9) being composed of up to two rolls.
The tenth frame may be composed of up to three rolls: the bonus roll(s) following a strike or spare in the tenth (sometimes referred to as the eleventh and twelfth frames) are fill ball(s) used only to calculate the score of the mark rolled in the tenth.

Bowling has a unique scoring system which keeps track not only of the current pinfall in a frame, but also strikes and spares which allow for the value of subsequent pinfall. Effectively, there are three kinds of marks given in a score; a strike (all ten down in the first ball), a spare (all ten down by the second ball), and an open (one or more missed pins still standing after the second ball). A strike earns ten points plus the points for the next two balls thrown. (For example, if a player got a strike then followed with a 7 then 2, their value for the strike frame would be 10+7+2, or 19.) A spare earns ten points plus the points for the next ball thrown. (Again, if a player gets a spare then follows it with 7 pins down on the first ball of the next frame, their value for the spare frame would be 10+7, or 17.) Open frames count the value of the pinfall in that frame only. (Example: if a player knocks down 5 on their first ball and 3 on their second, the open frame would be worth 8 points.) The maximum score in ten-pin bowling is 300. This consists of getting 12 strikes in a row in one game (one strike each in frames 1–9, and all three possible strikes in the tenth frame), and is also known as a perfect game.

=================
     TESTS
=================

 - Tests will be in Jasmine
 - Tests will be creates as a player bowling
      FIRST SET OF TESTS
      Feature: I would like to bowl a ten pin bowling game
      [/]  Test - There are 10 pins set up
      [/]  Test - There is an empty scorecard
      [/]  Test - I can bowl a 5 (card logs the score as 5)
      [/]  Test - I can bowl a 3 (card logs the score 8)
      [/]  Test - I can bowl 2 games and card calculates the score
      [/]  Test - I cannot bowl more than 10
      []  Test - I can bowl a strike
      []  Test - I bowl a spare



ARRAYS IN JAVASCRIPT TO LOG SCORE


Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins.
In every frame the player can roll one or two times.
The actual number depends on strikes and spares.
The score of a frame is the number of knocked down pins plus bonuses for strikes and spares.
After every frame the 10 pins are reset.


### Optional Extra

Create a nice interactive animated interface with jQuery.

## Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

## Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

## 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
