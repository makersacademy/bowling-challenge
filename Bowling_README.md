# Bowling-Challenge

## User stories
```
As a user
I want to be able to enter a score

As a user
If I don't get a strike on my first go
I want to be able to enter a score for my second turn

As a user
If I don't get a strike or a half strike after to turns in a frame
I want to be able to see the total of my 2 scores for the frame

As a user
If I get a strike in a frame
I want the strike bonus to be added to my score for that frame

As a user
If I get a half strike in a frame
I want the half strike bonus to be added to my score for that frame

As a user
If I am on fire and keep rolling strikes, so I keep within the rules
I don't want the score for a frame to exceed 30

As a user
So that I don't have to keep track of frames
I want the game to automatically end after frame 10

As a user
So that I can play multiple games
I want to be able to reset the game once the game is over

```


## Technology used

- Jasmine for testing
- Javascript to create classes and methods
- html to create the layout of the user interface
- CSS to style the page
- Jquery to add features such as adding scores to the table, resetting the game etc.
- Font Awesome CDN for icons


## How to use
To use the bowling app you will first need to clone this repository using:

```
git clone https://github.com/Ajay233/bowling-challenge.git
```

Then, while in the bowling_challenge directory use:
```
open index.html
```


## How to play

- To play a game you will need to enter either a number between 1-9, "x" for a strike or "/" for a spare.
- Once the 10th frame and any subsequent bonus goes have been played, the game will prevent you from playing another game unless you click the reset button.


## Below are screenshots of the finished app

![Ten Pin Score Example](images/ready_to_begin.png)

The app includes a bowling score table modelled after the tables used in bowling alley scoring systems.  I have included an input box for the user to input their scores.  Scores will be either 1-9, "x" for a strike, or "/" for a half strike.


![Ten Pin Score Example](images/scoring.png)

Bonuses for strikes and spares are automatically worked out for the user.  To replicate the scoring systems in bowling alleys, I have prevented scores from being shown until the relevant bonuses have been applied.


![Ten Pin Score Example](images/Game_over.png)

When the game is over, if the user tries to enter another score they will be notified that the game is over and that they will have to reset the game to play again.  To do so, the user just has to click the "reset" button and the table will be cleared and the game and all scores will be wiped so a fresh game can begin.
