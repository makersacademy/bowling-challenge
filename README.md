
Bowling Challenge
=================

Makers Academy week 6 challenge to create a bowling score console application in javascript, in a TDD approach using Jasmine.

##User Stories##

As a Bowler
So that I can be shown my total score
I want to be able to submit the pins knocked down per bowl

As a bowler
So that I can get a strike
I want the frame to be over when I knock all the pins down in the first bowl

As a Bowler
So that I get my strike bonus points
I want to recieve 10 for the frame + the points from the next two bowls

As a Bowler
So that I get my spare bonus points
I want to recieve 10 for the frame + the points from the next bowl

As a Bowler
So that I can play extra frames on a spare or strike on the 10th frame
I want to be able to play a maximum of 1 extra frame after a spare and 2 after a strike

As a Bowler
So that I can know I've had a bad game
I want the score to be "Gutter Game" if I hit no pins

As a Bowler
So that I can know I'm awesome
I want the score to be "Perfect Game" if I get 12 strikes.

##MVP##

A javascript console based game scorecard for one player with the ability to handle all rules of the game.

##Setup##

A sinatra server (`gem install sinatra` if you have not got the gem) is setup with a rackup config file, therefore from the terminal you can run `rackup` and then navigate to localhost:9292/, where you will be presented with the Jasmine tests. From the console start a new game by running:

`game = new Game` to create a new game

'game.frame' will return the current frame

'game.ball' will return the current ball

`game.bowl(8)` per bowl with the number of pins knocked down as the argument (i.e. 8 in this example)

`game.frame_scores` will return scores per set

`game.score` will return the total current score for the game

##Contribution##

This is a challenge set to identify progress in Wk6 at Makers Academy, therefore is designed to be tackled individually.

However comment on the quality of the code and it's implementation would be very welcome.



