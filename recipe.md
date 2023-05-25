## Implimentation

### variables

Before calc
bowlingLog = [[10, 0], [10, 0], [7, 3], [6, 0], [9, 0]]


## Rules



### Strikes

Frame 1 | Frame 2 | Frame 3

Before adding
10      | 4    4  |  6  2

After adding
18      |  8      |  8

# Objectives 



### Fulfill the below requirements
```JavaScript
let scorecard = new Scorecard()
scorecard.calculateScore() // returns 0
scorecard.addFrame(2, 5) 
scorecard.addFrame(3, 5)
scorecard.calculateScore() // returns 15
```