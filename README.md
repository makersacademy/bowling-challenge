## To run:

(go into main directory) (./main)
```
node
 > .load ./main
```

## Demo:

For the purpose of this demo, I created a showBreakdown function. To use this you need to uncomment a few lines in round.js. 

```js
Welcome to Node.js v17.4.0.
Type ".help" for more information.
> .load round.js
  [round.js content - deleted]
> const round = new Round();
undefined
> round.addRoll(4)
| 4    |
| 4    |
'The current score is: 4'
> round.addRoll(3)
| 4 3  |
| 7    |
'The current score is: 7'
> round.addRoll(10)
| 4 3  | 10 X |
| 7    | 10   |
'The current score is: 17'
> round.addRoll(1)
| 4 3  | 10 X | 1    |
| 7    | 11   | 1    |
'The current score is: 19'
> round.addRoll(9)
| 4 3  | 10 X | 1 /  |
| 7    | 20   | 10   |
'The current score is: 37'
> round.addRoll(10)
| 4 3  | 10 X | 1 /  | 10 X |
| 7    | 20   | 20   | 10   |
'The current score is: 57'
> round.addRoll(10)
| 4 3  | 10 X | 1 /  | 10 X | 10 X |
| 7    | 20   | 20   | 20   | 10   |
'The current score is: 77'
> round.addRoll(7)
| 4 3  | 10 X | 1 /  | 10 X | 10 X | 7    |
| 7    | 20   | 20   | 27   | 17   | 7    |
'The current score is: 98'
> round.addRoll(2)
| 4 3  | 10 X | 1 /  | 10 X | 10 X | 7 2  |
| 7    | 20   | 20   | 27   | 19   | 9    |
'The current score is: 102'
> round.addRoll(8)
| 4 3  | 10 X | 1 /  | 10 X | 10 X | 7 2  | 8    |
| 7    | 20   | 20   | 27   | 19   | 9    | 8    |
'The current score is: 110'
> round.addRoll(3)
Uncaught 'invalid roll'
> round.addRoll(2)
| 4 3  | 10 X | 1 /  | 10 X | 10 X | 7 2  | 8 /  |
| 7    | 20   | 20   | 27   | 19   | 9    | 10   |
'The current score is: 112'
> round.addRoll(9)
| 4 3  | 10 X | 1 /  | 10 X | 10 X | 7 2  | 8 /  | 9    |
| 7    | 20   | 20   | 27   | 19   | 9    | 19   | 9    |
'The current score is: 130'
> round.addRoll(1)
| 4 3  | 10 X | 1 /  | 10 X | 10 X | 7 2  | 8 /  | 9 /  |
| 7    | 20   | 20   | 27   | 19   | 9    | 19   | 10   |
'The current score is: 131'
> round.addRoll(10)
| 4 3  | 10 X | 1 /  | 10 X | 10 X | 7 2  | 8 /  | 9 /  | 10 X |
| 7    | 20   | 20   | 27   | 19   | 9    | 19   | 20   | 10   |
'The current score is: 151'
> round.addRoll(10)
| 4 3  | 10 X | 1 /  | 10 X | 10 X | 7 2  | 8 /  | 9 /  | 10 X | 10 X |
| 7    | 20   | 20   | 27   | 19   | 9    | 19   | 20   | 20   | 10   |
'The current score is: 171'
> round.addRoll(9)
| 4 3  | 10 X | 1 /  | 10 X | 10 X | 7 2  | 8 /  | 9 /  | 10 X | 10 X |
| 7    | 20   | 20   | 27   | 19   | 9    | 19   | 20   | 29   | 19   |
'The current score is: 189'
> round.addRoll(1)
| 4 3  | 10 X | 1 /  | 10 X | 10 X | 7 2  | 8 /  | 9 /  | 10 X | 10 X |
| 7    | 20   | 20   | 27   | 19   | 9    | 19   | 20   | 29   | 20   |
'The current score is: 190'
> round.addRoll(0)
Uncaught 'round finished'
```

## Features:

- user starts a round
- user can add a roll at a time using ‘addRoll(points) method’
- for the purpose of the demo, you can see a scorecard and final score
- 

## In development:

- there is bugs when you input 0 as your points

## How the score is counted

1. The user inputs the roll
2. The program checks all existing frames for outstanding bonus rolls
3. The program creates a Frame if it is a strike, awaits another roll otherwise.

## Reflections:

Edge cases:

- given 2 strikes in a row, the first strike still has one bonus roll left

- given a strike in the 10th frame, 2 bonus rolls are allowed

(TBC)...

Notes:
- I did not know how to go about mocking in jest, need to look at that.

## Bowling rules model:

![alt text](https://i.imgur.com/z4arXW4.jpg)
