
# Bowling Challenge

## Description

* Solution to the Makers bowling challenge.

## How to Use

### How to Install

* Checkout the project from GitHub locally.

### How to Run

* Open index.html in a browser.
* Run the code from the javascript console.
* Create a new Scorecard object.
* Run the updateScore method to register each roll.
* Run the getRunningTotal method to check the score at any point.

```javascript
var scorecard = new Scorecard;
scorecard.getRunningTotal();
> 0
scorecard.updateScore(4);
scorecard.getRunningTotal();
> 4
```

* At the end of the game the updateScore method will return "END" and the score will not be updated.

## Testing

* To run the feature and unit tests open SpecRunner.html in a browser.
* To run eslint (you may have eslint installed in a different directory):

```console
~/node_modules/eslint/bin/eslint.js ./src/Scorecard.js
```

## Notes on Solving the Challenge

### Work Still to Do

* There is a lot of repitition in the tests, which ideally should be refactored.
* Each frame is represented by a frame object literal, which gives rise to a lot of repitition in the code. I would like to move this to a new object e.g. Frame.
* Some of the methods are too long and the conditional statements (if/else if) need to be refactored.
* It would be good to have a simple user interface, rather than running via the command line.
* The intention was for there to be only two public methods but I couldn't work out how to make the other methods private.
