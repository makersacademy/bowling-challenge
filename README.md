
Bowling Challenge
=================
## A bowling program where the user inputs their rolls and a scorecard is created

![Program output](https://i.gyazo.com/b3b70f11793b2a595fd5dce49e7470b7.png)

# Features
* CLI for playing the game interactively, where the user can input their roll and instantly see a log of the scorecard in its current state, with the cumulative total score shown beneath each frame.
* The frame total also dynamically updates just like a at a bowling alley; once the bonus rolls are used the total will appear for that frame.
* Strikes and spares are formatted to 'X's and '/'s.
* The CLI is also protected against bad inputs... and even cheating.
* All tests passing


![Tests](https://i.gyazo.com/379a0afbd0e5cf8a8b0217ecdda8a436.png)


# Using the program
In the terminal:
```
git clone https://github.com/ConorButler/bowling-challenge.git
npm install
node game.js
```
You will then be asked to enter how many pins you knocked down with each roll. The scoreboard will be logged to the console after each roll, with the pins shown as frames, separated by ' | ', and the cumulative total for each frame underneath - if this part is blank, it means you have an active bonus on that frame, so keep rolling.

![Starting game](https://i.gyazo.com/180d0a5e7d9f91bf521c8aff9c926bcd.png)

The scoreboard updates after each input:

![Dynamic scoreboard](https://i.gyazo.com/0f672de5fe9a0c4bc71348dba60b1dd1.png)

After 10 frames the game will end. To play again just run node game.js once more.

## Playing bowling

### Technologies used

JavaScript and readline-sync.

## Bowling rules
http://en.wikipedia.org/wiki/Ten-pin_bowling

An example game: 

![Ten Pin Score Example](images/example_ten_pin_scoring.png)