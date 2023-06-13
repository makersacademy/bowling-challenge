# Bowling Challenge

This repository contains a JavaScript implementation of a bowling scorecard. The purpose of this project is to count and sum the scores of a bowling game for one player. It consists of 10 frames, and the player tries to knock down 10 pins in each frame. The score of a frame is determined by the number of knocked down pins plus bonuses for strikes and spares.

## Getting Started

To use the bowling scorecard, follow the steps below:

1. Fork this repository and clone it to your local machine.
2. Open the project in your preferred JavaScript development environment.
3. Use the provided `Scorecard` class to interact with the scorecard.
4. You can add frames and calculate the score using the `addFrame` and `calculateScore` methods, respectively.
5. Feel free to explore and extend the functionality by adding any additional methods you find useful.

## Usage Example

Here's an example of how the bowling scorecard can be used:

```javascript
let scorecard = new Scorecard();
scorecard.calculateScore(); // returns 0
scorecard.addFrame(2, 5);
scorecard.addFrame(3, 5);
scorecard.calculateScore(); // returns 15
```

You can create an instance of the `Scorecard` class, add frames using the `addFrame` method, and calculate the score using the `calculateScore` method.

## Testing

Test-driven development is encouraged for this project. You can write tests using your preferred testing framework to ensure the correctness of your implementation. However, it is not necessary to include the tests in this repository.

## Optional Extras

If you want to challenge yourself further, you can consider the following optional extras:

- Set up Travis CI to automate the testing process.
- Integrate ESLint into your codebase to enforce JavaScript code conventions.
- Create a user interface class that allows running a game from the command line.

Feel free to explore these extras in any order you prefer.

## Bowling Rules and Scoring

To better understand the rules and scoring of bowling, please refer to the rules and examples provided below:

### Strikes

A strike occurs when the player knocks down all 10 pins with the first roll in a frame. The frame ends immediately, and the bonus for that frame is the number of pins knocked down by the next two rolls. The next frame is considered for the bonus unless the player rolls another strike.

### Spares

A spare occurs when the player knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (the first roll of the next frame).

### 10th Frame

In the 10th frame, if the player rolls a strike or spare, they can roll additional balls for the bonus. However, the player can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus and not for the regular frame count.

- Example 1: 10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
- Example 2: 1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game occurs when the player fails to hit any pins in all frames, resulting in 20 zero scores.

### Perfect Game

A Perfect Game occurs when the player rolls 12 strikes, including 10 regular strikes and 2 strikes for the bonus in the 10th frame. A Perfect Game scores 300 points.

For more information on ten-pin bowling, you can
