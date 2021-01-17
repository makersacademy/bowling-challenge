## Bowling Challenge
A small client-side JavaScript application for calculating ten pin bowling scores.

## Motivation
This is a translation of [bowling-challenge-ruby](https://github.com/chriswhitehouse/bowling-challenge-ruby). Converting a ruby application into JavaScript as means to help learn a new language.

## Build status
In development.

## Code style
ESlint. JS Standard.


## Tech/framework used
JacaScript with Jasmine test framework.

## Features
### User Stories
#### User Story 1
```
As a player
So I know how many pins I've knocked down in total
I want a record of pins knocked down by roll for each frame
```
#### User Story 2
```
As a player
So I can receive a bonus for rolling a spare
I want the total of the next roll to be added to my frame score
```
#### User Story 3
```
As a player
So I can receive a bonus for rolling a strike
I want the total of the next two rolls to be added to my frame score
```
#### User Story 4
```
As a player
So I can receive a bonus in the 10th and final frame
I want to be able to add the score of a third roll
```
## Code Example
### Game class
``` js
class Game {
  constructor(frameClass = Frame) {
    this.frameClass = frameClass
    this.frames = [];
    this.outputArray = [];
    this.MAX_NUMBER_FRAMES = 10;
  }

  isNew() {
    return this.frames.length === 0;
  }

  addFrame(score) {
    this.frames.push(new this.frameClass(score))
  }

  addRoll(score) {
    this.currentFrame().addRoll(score)
  }

  currentFrame() {
    return this.frames[this.frames.length - 1]
  }

  notFrameTen() {
    return this.frames.length != this.MAX_NUMBER_FRAMES;
  }

  addSpareBonuses() {
    this.frames.forEach((frame, index) => {
      if(frame.isSpare()){
        frame.addBonus(this.frames[index + 1].firstRoll())
      }
    });
  }

  addStrikeBonuses() {
    this.frames.forEach((frame, index) => {
      if(frame.isStrike()) {
        frame.addBonus(this.frames[index + 1].firstRoll())
        if(this.frames[index + 1].isStrike()) {
          frame.addBonus(this.frames[index + 2].firstRoll())
        }
        else {
          frame.addBonus(this.frames[index + 1].secondRoll())
        }
      }
    });
  }

  cumulative() {
    this.frames.forEach((frame, index) => {
      if(index === 0){
        this.outputArray.push(frame.totalScore())
      }
      else {
        this.outputArray.push(this.outputArray[index - 1 ] + frame.totalScore())
      }
    });

    return this.outputArray
  }

};
```
## Tests
[Jasmine Tests]()

### Input/Output Table
| Inputs (knocked down pins per roll array)  | Outputs (cumulative frame score array)     |
| :------------- | :------------- |
| [0] | [0] |
| |0,0,0] | [0,0] |
| [0,0,0,0,0] [0,0,0] |
| [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] | [0,0,0,0,0,0,0,0,0,0] |
| [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] |
| [2,2,2,2,2,2,2,2,2,2] |
| [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0] | [15,30,45,60,75,90,105,120,135,140] |
| [10,10,10,10,10,10,10,10,10,0] | [30,60,90,120,150,180,210,240,270,280]|
| [1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6] | [5,14,29,49,60,61,77,97,117,133] |
| **Edge cases:** | |
| *anything other than an array of at least 12, and up 21, integers between 1 and 10* | Error|
