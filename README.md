## BOWLING CHALLENGE
=================

I am making a scorecard in Javascript which handles the tricky task of scoring a game of tenpin bowling using TDD and OOP techniques.

![men of bowling image](http://okcmod.com/wp-content/uploads/2012/10/Men-Bowling-vintage.jpg)

# Design up front?

1st June 2015:
The scorecard will be built much like a game of bowling itself; a series of frames, adding to a running total. Once I've made one frame, I will aim to build logic for scoring a strike or a spare. Next up will be the running total functionality, to enable multiple frames to be played.

After this I figure I'll add separate logic to leep the total accurate based on the separate rules for a spare and a strike (they're complicated, check them out here: http://en.wikipedia.org/wiki/Ten-pin_bowling#Scoring)

7th June 2015:
I actually pursued Ptolemy and Stephen's codealong throughout the early satges so I could proceed through and gain an understanding of their working method. Their way of going into the challenge was very closely mirrored to my approach, so I followed along. Anything past basic frame functionality and the most basic scoreccard functionality is all my own work, and all my own mistakes.

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.


## USER STORIES
```
- As a bowling person
- In order to keep score
- I want the game to register how many skittles I've knocked down after 2 bowls

- As a bowling person
- So I can keep the score
- I want to be able to knock down all the pins in 2 and get a spare

- As a bowling person
- So I can keep the score when I knock down all the pins in 1
- I want to be able to register a strike

- As a bowling person
- So I can kep playing
- I want to start a new frame after the first

- As a bowling person
- In order to keep score
- I want to keep a running total of each frame

- As a bowling person
- So I finish my game before the bowling alley closes
- I Want to play a maximum of 10 frames

- As a bowling person
- In order to keep the score in the event of a spare
- i want to add a bonus score of up to 10 to the running total from the next bowl

- As a bowling person
- In order to keep the score in the event of a strike
- i want to add a bonus score of up to 10 from the next 2 bowls

- As a bowling person
- To finish the game properly
- I want to have another frame
```

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
