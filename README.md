
# Bowling Challenge
=================

## Task:

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Optional Extra

Create a nice interactive animated interface with jQuery.

## Approach

There are three clear areas of responsibility within my bowling game:

(1) creating a frame of two bowls, owned by the Frame function
(2) calculating score, including bonus scores, owned by the Score function
(3) user interface function, which calls on score and frame, the Game function

## User interface

Using JQuery, I created a simple site where the player play endless games of bowling and view their score throughout.

The user bowls a frame every 'play' and is rewarded with bonus plays if they score a spare or strike in their 10th frame.

![Screenshot](http://imgur.com/LHR4evH)     

## Limitations

I found this challenge particularly difficult - as an inexperienced bowler - and I found it tricky to write code for the layers of bonus points without becoming heavily bogged down in conditionals.

I wish to return to this challenge to resolve:
- Players who score a strike or spare in the 11th frame do not have the opportunity to bowl again.
- Strike bonuses are taken from the next frame, rather than the next two bowls. Therefore, if the player bowls multiple strikes, only the following strike counts towards the bonus.
- The perfect game is currently unaccounted for.
