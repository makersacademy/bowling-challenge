Bowling Challenge
=================
Our week 5 weekend challenge was to produce a scoring calculator for a bowling game for one player (in JavaScript).

Instructions:
-------
````
Coming soon.
````
Screenshots:
-------
````
Coming soon.
````
Technologies used:
-------
JavaScript, Jasmine BDD framework.

Approach:
-------
- I forked the repo, set up Git and then the Jasmine BDD framework
- Before writing any tests / code, I attempted to break down the problem and understand the rules of bowling by writing small, testable, independent user stories (roughly in order of increasing complexity), which I imagine will represent my tests / feature implementations to some degree
- I then played with scores in Excel to better understand how strikes and spares (especially sequential ones) worked.
- I also played with http://www.bowlinggenius.com/ to model different scenarios and better understand the required logic
- Started to write and pass tests for the basic game, i.e. with no strikes or spares. Created Frame and Game objects with their own properties.
- Wrote a basic HTML interface so I could input the scores and see the results appear (felt that this would help with understanding what was happening / de-bugging later on)

User stories:
-----

### Basic play
````
As a player,
I can knock down up to ten pins on my first roll,
so that I can begin a frame.

As a player,
I can knock down the remainder of the pins (ten minus my score from the first roll),
so that I can finish the frame.

As a player,
I'd like to see my total score from the frame,
so that I can evaluate my progress.

As a player,
I'd like to play exactly ten frames,
so I can complete a full (basic) game.

As a player,
I'd like to see my final score for the game,
so I can make a mental comparison against others and myself historically.
````

### Gutter game
````
As a player who has completed a basic game,
if I score zero, my game should be marked as a Gutter Game,
so that I can enjoy the full glory / humiliation.
````

### Spares
````
As a player on my second roll,
knocking down all of the remaining pins should be marked as a spare,
so that I can revel in the glory.

As a player who just achieved a spare,
my score for the spare frame should not appear until after the first roll of the next frame,
so that I can see an accurate game score.

As as player who just achieved a spare,
I'd like the points from the first roll of the next frame added to the score for my spare frame,
so that I can benefit from the bonus.
````
### Strikes
````
As a player, if I knock down all ten pins on the first roll,
the frame should be marked as a strike,
so that I can revel in the glory.

As a player who just achieved a strike,
I'd like the second roll of the frame cancelled,
so that I can move straight onto the next frame of ten pins.

As a player who just achieved a strike,
my score for the strike frame should not appear until after next frame has finished,
so that I can see an accurate game score.

As a player who just achieved a strike, as a bonus
I'd like the points from the next frame added to the score of my strike frame,
so that I can benefit from the extra points.

[MORE WORK NEEDED HERE]
As a player who has achieved two strikes in a row
...three strikes in a row
````
### Final frame
````
As a player in my 10th frame,
if I roll a strike on the first or second roll I will be given an additional third roll,
so that I can benefit from the bonus points.

As a player in my 10th frame,
if I roll a spare on the second roll I am given an additional third roll,
so that I can benefit from the bonus points.

[THIS NEXT ONE NEEDS ADJUSTMENT]
As a player with a final bonus roll,
the result of this bonus roll is added to my score,
so that I can see my final score.

[The scores for the final frame shouldn't appear until after the last roll.]
````
### Perfect game
````
As a player,
if I roll 12 strikes thereby scoring the maximum score of 300,
my game should be marked as a Perfect Game,
so that I can enjoy the full glory of this.
````

Domain model
-----
I expect the notation is all wrong here, but using the nouns and verbs from the user stories, I'm trying to think about objects and messages.
````
Player --> rolls during a --> Frame
Player --> knocks down --> Pins
Player --> achieves a --> Score
Player --> achieves a --> Strike
Player --> achieves a --> Spare
10 frames --> completes a --> Game
Game --> can be classed as --> Gutter Game / Perfect Game
````
Possible objects:
````
Player (although there's only ever one in this instance)
Game has 10 Frames
Game has a Score
Frame has a Score
````
