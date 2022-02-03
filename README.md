## To run:

```
npm install
node
 > .load runRound.cjs
```

## Demo:

For the purpose of this demo, I created a showBreakdown function. To use this you need to uncomment an import statement and 3 lines in addRoll method of round.js.

```js
Welcome to Node.js v17.4.0.
Type ".help" for more information.
> .load round.js
  [round.js content - deleted]
> let round = new Round();
undefined
> round = new Round();
Round { frames: [] }
> round.addRoll(3)
| 3    |
| 3    |
'Total score is: 3'
> round.addRoll(7)
| 3 /  |
| 10   |
'Total score is: 10'
> round.addRoll(5)
| 3 /  | 5    |
| 15   | 5    |
'Total score is: 20'
> round.addRoll(4)
| 3 /  | 5 4  |
| 15   | 9    |
'Total score is: 24'
> round.addRoll(10)
| 3 /  | 5 4  | 10 X |
| 15   | 9    | 10   |
'Total score is: 34'
> round.addRoll(10)
| 3 /  | 5 4  | 10 X | 10 X |
| 15   | 9    | 20   | 10   |
'Total score is: 54'
> round.addRoll(7)
| 3 /  | 5 4  | 10 X | 10 X | 7    |
| 15   | 9    | 27   | 17   | 7    |
'Total score is: 75'
> round.addRoll(2)
| 3 /  | 5 4  | 10 X | 10 X | 7 2  |
| 15   | 9    | 27   | 19   | 9    |
'Total score is: 79'
> round.addRoll(0)
| 3 /  | 5 4  | 10 X | 10 X | 7 2  | 0    |
| 15   | 9    | 27   | 19   | 9    | 0    |
'Total score is: 79'
> round.addRoll(0)
| 3 /  | 5 4  | 10 X | 10 X | 7 2  | 0 0  |
| 15   | 9    | 27   | 19   | 9    | 0    |
'Total score is: 79'
> round.addRoll(0)
| 3 /  | 5 4  | 10 X | 10 X | 7 2  | 0 0  | 0    |
| 15   | 9    | 27   | 19   | 9    | 0    | 0    |
'Total score is: 79'
> round.addRoll(10)
| 3 /  | 5 4  | 10 X | 10 X | 7 2  | 0 0  | 0 /  |
| 15   | 9    | 27   | 19   | 9    | 0    | 10   |
'Total score is: 89'
> round.addRoll(7)
| 3 /  | 5 4  | 10 X | 10 X | 7 2  | 0 0  | 0 /  | 7    |
| 15   | 9    | 27   | 19   | 9    | 0    | 17   | 7    |
'Total score is: 103'
> round.addRoll(1)
| 3 /  | 5 4  | 10 X | 10 X | 7 2  | 0 0  | 0 /  | 7 1  |
| 15   | 9    | 27   | 19   | 9    | 0    | 17   | 8    |
'Total score is: 104'
> round.addRoll(10)
| 3 /  | 5 4  | 10 X | 10 X | 7 2  | 0 0  | 0 /  | 7 1  | 10 X |
| 15   | 9    | 27   | 19   | 9    | 0    | 17   | 8    | 10   |
'Total score is: 114'
> round.addRoll(10)
| 3 /  | 5 4  | 10 X | 10 X | 7 2  | 0 0  | 0 /  | 7 1  | 10 X | 10 X |
| 15   | 9    | 27   | 19   | 9    | 0    | 17   | 8    | 20   | 10   |
'Total score is: 134'
> round.addRoll(5)
| 3 /  | 5 4  | 10 X | 10 X | 7 2  | 0 0  | 0 /  | 7 1  | 10 X | 10 X |
| 15   | 9    | 27   | 19   | 9    | 0    | 17   | 8    | 25   | 15   |
'Total score is: 144'
> round.addRoll(10)
Uncaught 'invalid bonus'
> round.addRoll(5)
| 3 /  | 5 4  | 10 X | 10 X | 7 2  | 0 0  | 0 /  | 7 1  | 10 X | 10 X |
| 15   | 9    | 27   | 19   | 9    | 0    | 17   | 8    | 25   | 20   |
'Total score is: 149'
> round.addRoll(5)
Uncaught 'round finished'
```

## Features:

- user can add one roll at a time using ‘addRoll(points) method’
  - the points are validated
  - when the round is complete, 'round complete' will be thrown
- for the purpose of the demo, you can see a scorecard and final score (the project was create the logic without a UI)
- the score will be updated each roll


## How the score is counted

1. The user inputs the roll
2. The program checks all existing frames for outstanding bonus rolls
3. The program creates a Frame if it is a strike, awaits another roll otherwise.

## Reflections:

Edge cases:

- given 2 strikes in a row, the first strike still has one bonus roll left

- given a strike in the 10th frame, 2 bonus rolls are allowed

(TBC)...

## Bowling rules model:

![alt text](https://i.imgur.com/z4arXW4.jpg)
