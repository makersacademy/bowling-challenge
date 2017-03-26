
# Bowling Challenge: Makers Weekend Challenge 5

## Task:

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Optional Extra

Create a nice interactive animated interface with jQuery.

## Approach

There are three clear areas of responsibility within my bowling game:

- One: creating a frame of two bowls, owned by the Frame function
- Two: calculating score, including bonus scores, owned by the Score function
- Three: user interface function, which calls on score and frame, the Game function

## How To Run

- Clone this repo from your CLI to your local machine `git clone [url]`
- Navigate to the rps-challenge folder `cd bowling-challenge`
- Open the game in your browser by running `open index.html`
- Start playing the game!

## User interface

Using JQuery, I created a simple site where the player play endless games of bowling and view their score throughout.

The user bowls a frame every 'play' and is rewarded with bonus plays if they score a spare or strike in their 10th frame.

![Screenshot](http://imgur.com/LHR4evH)   

## Limitations

I found this challenge particularly difficult (in part because I'm a terrible bowler so don't play often). The greatest challenge was accounting for bonus points and bowls without creating many nested conditionals.

I wish to return to this challenge to resolve:
- Players who score a strike or spare in the 11th frame do not have the opportunity to bowl again.
- Strike bonuses are taken from the next frame, rather than the next two bowls. Therefore, if the player bowls multiple strikes, only the following strike counts towards the bonus.
- The perfect game is currently unaccounted for.

## Languages and Technologies

- JavaScript
- jQuery
- Jasmine
