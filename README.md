<h1 align="center"> Bowling Scorecard </h1>

<p align="center">
  <a href="#user-content-installation">Installation</a> •
  <a href="#user-content-approach">Approach</a> •
  <a href="#user-content-specifications">Specifications</a> •
  <a href="#user-content-technologies">Technologies</a> 
</p>


The challenge is to create a scorecard for a game of bowling. The scorecard will take in the values for the pins knocked down by a single player and sum the total score for each round and finally for the entire game. 

As this is a scorecard, the user inputs the rolls (i.e. the rolls will not be randomly generated).

![Screenshot]()

## Installation

1. Clone this repository.

2. Move into the folder directory and run the app by typing the following into the terminal:
```
$ cd path/to/directory
$ open src/Bowling.html
```

### Run the tests
 
Open 'SpecRunner.html' (find in the home directory) in your browser.

## Approach

I started with the specifications (as listed in the 'Rules' below) and developed user stories. Then I modelled the domain.

I decided to have two classes interacting: Frame, which would keep track of an individual frame's scores, and Game, which would have new instances of frame, the rules of the game and keep track of the cumulative total score for a game.

### Rules

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

The rules are further detailed at the bottom of this README: <a href="#user-content-bowling-rules-continued-">Bowling Rules Continued</a> 

### Next Steps

I started to add a graphical user interface using jQuery however with more time I would:

- Continue to add an interactive animated surface with JQuery.
- Set up Travis CI to run the tests.
- Add ESLint to the codebase and make the code conform.

## Specifications

### User Stories

```
As a bowler,
So that I can keep track of the number of pins I have knocked down
I would like to input my knocked down pins for a roll into a scorecard.
```

```
As a bowler,
So I can continue playing if I haven't achieved a strike,
I would like to be able to input another roll in the same frame
```

```
As a terrible bowler,
So that I can calculate the score if I never manage to knock down a pin,
I would like my total score to be 0.
```

```
As a bowler,
So I can record a perfect game,
I would like to see a total of 300 points
```

```
As a bowler,
I would like to see the score of 10 (or 'X') for a frame when I achieve a strike.
```

```
As a bowler,
So I can calculate the score correctly when I achieve a strike,
I would like to add bonus points of the total of the next two rolls.
```

```
As a bowler,
So I can calculate the score correctly when I achieve a spare,
I would like to add bonus points of the total of the next rolls.
```

```
As a bowler, 
So I can calculate the score correctly when I roll a strike on the 10th frame,
I would like to include scores for a bonus round.
```

```
As a bowler, 
So I know when the game is finally finished
I would like to see 'Game Over' when I can no longer roll.
```

## Technologies

- Javascript
- JQuery
- Testing: Jasmine


### Bowling Rules continued ...

#### Strikes

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