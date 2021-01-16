## Bowling Challenge
A small client-side JavaScript application for calculating ten pin bowling scores.

## Motivation
This is a translation of [bowling-challenge-ruby](https://github.com/chriswhitehouse/bowling-challenge-ruby). Converting a ruby application into JavaScript as means to help learn a new language.

## Build status
In development.

## Code style
ESlint. JS Standard.

## Screenshots
Include logo/demo screenshot etc.

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
Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Installation
Provide step by step series of examples and explanations about how to get a development env running.

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests
Describe and show how to run the tests with code examples.

### Input/Output Table
| Inputs (knocked down pins per roll array)  | Outputs (cumulative frame score array)     |
| :------------- | :------------- |
| [0] | [0] |
| |0,0,0] | [0,0] |
| [0,0,0,0,0] [0,0,0] |
| [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] | [0,0,0,0,0,0,0,0,0,0] |
| [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] |
| [2,2,2,2,2,2,2,2,2,2] |
| [0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0] | [10,20,30,40,50,60,70,80,90,100] |
| [10,10,10,10,10,10,10,10,10,10,10,10] | [30,60,90,120,150,180,210,240,270,300]|
| [1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6] | [5,14,29,49,60,61,77,97,117,133] |
| **Edge cases:** | |
| *anything other than an array of at least 12, and up 21, integers between 1 and 10* | Error|

## How to use?
If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.

## Contribute

Let people know how they can contribute into your project. A [contributing guideline](https://github.com/zulip/zulip-electron/blob/master/CONTRIBUTING.md) will be a big plus.

## Credits
Give proper credits. This could be a link to any repo which inspired you to build this project, any blogposts or links to people who contrbuted in this project.

#### Anything else that seems useful

## License
A short snippet describing the license (MIT, Apache etc)

MIT © [Yourname]()
