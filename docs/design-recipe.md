# Bowling Challenge Multi-Class Planned Design Recipe

## 1. Describe the Problem

As a user, 
So that I can score my bowling game,
I want a scorecard which calculates my bowling score.

As a user, 
So that I can keep track of the score, 
I want to know what my score is after each frame. 

## 2. Design the Class System

```
```
                                               ┌───────────────────────────────────────────────────┐
                                               │                                                   │
                                               │                                                   │
                                               │            USERINTERFACE CLASS                    │
                                               │                                                   │
                                               │                                                   │
                                               │                                                   │
                                               │  Loop through the interation with the user        │
                                               │                                                   │
                                               │  Each game will have 10 instances of frame        │
┌──────────────────────────────────────────────┤  and one scorecard                                ├──────────────────────────────────────────────┐
│                                              │                                                   │                                              │
│                                              │                                                   │                                              │
│                                              │                                                   │                                              │
│                                              │  This will wrap the frame class and the scorecard │                                              │
│                                              │  class                                            │                                              │
│                                              │                                                   │                                              │
│                                              │                                                   │                                              │
│                                              └───────────────────────────────────────────────────┘                                              │
│                                                                                                                                                 │
│                  ┌──────────────────────────────────────────┐                 ┌───────────────────────────────────────────────┐                 │
│                  │                                          │                 │                                               │                 │
│                  │                                          │                 │                  SCORECARD CLASS              │                 │
│                  │                FRAME CLASS               │                 │                                               │                 │
│                  │                                          │                 │  Contain an array of arrays which are         │                 │
│                  │  Be an array storing two or one numbers  │                 │  instances of frame                           │                 │
│                  │  depending on if it was a strike         │                 │                                               │                 │
│                  │                                          │Scorecan class   │  Scores array and a bonus array where         │                 │
│  User input from │                                          │depends on frame │  for calculated bonus scores to live          │ Output is the   │
│   command line   │                                          │instances        │                                               │ total score     │
│                  │ isStrike()                               │                 │                                               │                 │
│      ───────────►│                                          ├───────────────► │                                               ├─────────────►   │
│                  │  will be a boolean value of true or false│                 │  strikeCalculation()                          │                 │
│                  │                                          │                 │  calculates the bonus from a strike           │                 │
│                  │                                          │                 │                                               │                 │
│                  │                                          │                 │                                               │                 │
│                  │ isSpare()                                │                 │  spareCalculation()                           │                 │
│                  │                                          │                 │  calculates the bonus from a spare            │                 │
│                  │ will be a boolean value of true or false │                 │                                               │                 │
│                  │                                          │                 │  total()                                      │                 │
│                  │                                          │                 │  calculates the total score                   │                 │
│                  └──────────────────────────────────────────┘                 └───────────────────────────────────────────────┘                 │
│                                                                                                                                                 │
│                                                                                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┴─

                                                                                                                                                                                                                      └─┘
```
```

_Also design the interface of each class in more detail._

```javaScript
class Frame { // Takes no input when initiated 
  constructor() { 
    this.frame = [] 
  }

  add(n) { // Takes a number as an argument (which is a roll)
    this.frame.push(n) 
  }

  // Might want another method that acts as a bonus for the final frame...

  isStrike() { // Takes no input, returns a boolean value
    if (this.frame.count === 1) {
      return true
    } else {
      return false
    }
  }

  isSpare() { // Takes no input, returns a boolean value
    if (this.frame.count === 2 && this.#total(this.frame) === 10) {
      return true
    } else {
      return false
    }
  }

  printFrame() {
    return this.frame;
  }

  #total(array) { // Method to add all the numbers in the array
    let total = 0
    array.forEach(number => total += number)
    return total
  }
}

class Scorecard() { 
  constructor() { // Takes no input when initiated 
    this.scorecard = []
  }

  addFrame(frame) { // Takes an instance of frame which is an array of one or two numbers (when it's the final frame it could be 3)
    this.scorecard.push(frame.printFrame) // Returns nothing
  }

  calculate() { // Takes no input - calculates the total of the scorecard
    // Iterates over each of the frames, if the frame if the frame is a strike then it will add the next two rolls together and put them into the bonus array
    // If it's a spare, it will add the next roll into the bonus array
    // The total will be the bonus array and the scores array added together
  }

  // Might need a method which works out the index to know the next roll and subsequent rolls

}

class UserInterface() {
  constructor() {

  }

  run() {
    // Will need a loop to ask for input from the user: 
    // "Please enter your first roll:" 
    // checks if the first roll is a strike
    // "Please enter your second roll:"
    // Returns rolling total
    // Continues on for 10 frames then the final frame will be the final score
  }
}

```

## 3. Create Examples as Integration Tests

_Create examples of the classes being used together in different situations and
combinations that reflect the ways in which the system will be used._

```javaScript
// Testing Scorecard and Frames togehter:
// Calculates the score of all strikes

```

## 4. Create Examples as Unit Tests

_Create examples, where appropriate, of the behaviour of each relevant class at
a more granular level of detail._

```javaScript

// Frame class tests
frame = new Frame;
frame.add(10)
expect(frame.isStrike).toEqaul(true);

frame = new Frame;
frame.add(8);
frame.add(2);
expect(frame.isSpare).toEqaul(true);

frame = new Frame;
frame.add(8);
frame.add(2);
expect(frame.isStrike).toEqaul(false);

frame = new Frame;
frame.add(7);
frame.add(3);
expect(frame.printFrame).toEqaul([7, 3]);

frame = new Frame;
expect(frame.printFrame).toEqaul([]);


// Scorecard class tests
let frame1 = { isStrike: () => false, isSpare: () => false, printFrame: () => [7, 1] }
let frame2 = { isStrike: () => false, isSpare: () => false, printFrame: () => [2, 1] }
let scorecard = new Scorecard
scorecard.addFrame(frame1);
scorecard.addFrame(frame2);
expect(scorecard.calculate).toEqual(11)


let frame1 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
let frame2 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
let frame3 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
let frame4 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
let frame5 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
let frame6 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
let frame7 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
let frame8 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
let frame9 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
let frame10 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10, 10, 10] }
let scorecard = new Scorecard
scorecard.addFrame(frame1);
scorecard.addFrame(frame2);
scorecard.addFrame(frame3);
scorecard.addFrame(frame4);
scorecard.addFrame(frame5);
scorecard.addFrame(frame6);
scorecard.addFrame(frame7);
scorecard.addFrame(frame8);
scorecard.addFrame(frame9);
scorecard.addFrame(frame10);
expect(scorecard.calculate).toEqual(300)

let frame1 = { isStrike: () => false, isSpare: () => true, printFrame: () => [8, 2] }
let frame2 = { isStrike: () => false, isSpare: () => true, printFrame: () => [8, 2] }
let frame3 = { isStrike: () => false, isSpare: () => true, printFrame: () => [8, 2] }
let frame4 = { isStrike: () => false, isSpare: () => true, printFrame: () => [8, 2] }
let frame5 = { isStrike: () => false, isSpare: () => true, printFrame: () => [8, 2] }
let frame6 = { isStrike: () => false, isSpare: () => true, printFrame: () => [8, 2] }
let frame7 = { isStrike: () => false, isSpare: () => true, printFrame: () => [8, 2] }
let frame8 = { isStrike: () => false, isSpare: () => true, printFrame: () => [8, 2] }
let frame9 = { isStrike: () => false, isSpare: () => true, printFrame: () => [8, 2] }
let frame10 = { isStrike: () => false, isSpare: () => true, printFrame: () => [8, 2, 10] }
let scorecard = new Scorecard
scorecard.addFrame(frame1);
scorecard.addFrame(frame2);
scorecard.addFrame(frame3);
scorecard.addFrame(frame4);
scorecard.addFrame(frame5);
scorecard.addFrame(frame6);
scorecard.addFrame(frame7);
scorecard.addFrame(frame8);
scorecard.addFrame(frame9);
scorecard.addFrame(frame10);
expect(scorecard.calculate).toEqual(182)

let frame1 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
let frame2 = { isStrike: () => false, isSpare: () => false, printFrame: () => [3, 4] }
let frame3 = { isStrike: () => false, isSpare: () => false, printFrame: () => [2, 6] }
let frame4 = { isStrike: () => false, isSpare: () => false, printFrame: () => [8, 0] }
let frame5 = { isStrike: () => false, isSpare: () => false, printFrame: () => [0, 0] }
let frame6 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
let frame7 = { isStrike: () => false, isSpare: () => false, printFrame: () => [2, 7] }
let frame8 = { isStrike: () => false, isSpare: () => true, printFrame: () => [3, 1] }
let frame9 = { isStrike: () => false, isSpare: () => true, printFrame: () => [8, 2] }
let frame10 = { isStrike: () => false, isSpare: () => true, printFrame: () => [8, 2, 10] }
let scorecard = new Scorecard
scorecard.addFrame(frame1);
scorecard.addFrame(frame2);
scorecard.addFrame(frame3);
scorecard.addFrame(frame4);
scorecard.addFrame(frame5);
scorecard.addFrame(frame6);
scorecard.addFrame(frame7);
scorecard.addFrame(frame8);
scorecard.addFrame(frame9);
scorecard.addFrame(frame10);
expect(scorecard.calculate).toEqual(182)

```

_Encode each example as a test. You can add to the above list as you go._

## 5. Implement the Behaviour

_After each test you write, follow the test-driving process of red, green,
refactor to implement the behaviour._