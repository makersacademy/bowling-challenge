
Bowling Challenge
=================

My implementation of a bowling scorecard using node.js, I aimed to extract the logic into multiple classes.

### Setup
```
git clone https://github.com/AlfonsoGhislieri/bowling-challenge.git
cd bowling-challenge
npm install -y
npm install --save-dev jest
```
### Running the program
```
node ./lib/cli.js 
```
### Running tests
```
jest 
jest --collect-coverage //to see test coverage
```

Implementation
============

I decided to extract this challenge into 4 classes:

- `Rules`: This class has the 'rules' for bowling --> other classes can access its methods to avoid code repetition. This class is injected into all other classes.
    - `maxFrames` (default value being set to 10)
    - `isStrike` and `isSpare` methods to determine if a frame is either

<br>

- `Scorecard`: takes care of all functionality relating to storing frames in a 2d array.
    - `addRoll` takes an input and adds it to a temporary frame while checking with `addToFramesArray` that if it is a valid frame it gets added. Valid frames =
        - A strike
        - A frame with 2 rolls
        - A frame with 3 rolls if its the final frame(10th) --> if a strike or spare are rolled 

<br>

- `Score`: expects to be initialized with a scorecard.
    - `calculateScore`: takes a 2d array from the scorecard and checks ecach frame to see how to score the frame in question. If needed it flattens the scorecard into a 1d array to score bonus points.
        - This is effective as it lets us properly track consecutives strikes, something which is hard if we keep it as a 2d array.
        - Using `#advanceIndex` the index of the 1d array is advanced depening on the frame being a strike or not in order to score all frames.
            - If a strike is rolled we need to advance the index by just 1 or else it is advanced by 2.
        ```
        #Example 2d scorecard
        [[10],[5,5],[2,2]] flattened --> [10,5,5,2,2]
        
        # Frame1 [10] - index = 0
        Splits 1d array into [10,5,5] to score 2 bonus rolls --> 20 total
        advances index by 1

        #Frame2 [5,5] - index = 1
        Splits 1d array into [5,5,2] to score first frame and  1 bonus roll --> 12 total
        advances index by 2

        #Frame3 [2,2] - index = 3
        No bonus points to score so doesn't check flattened array just sum of frame [2,2] --> (4 total)
        advances index by 2

        ```

<br>

- `Cli`: brings together all the classes into a simple command line iterface. 
    - User inputs rolls up until all 10 frames are filled
    - Shows the total score once 10 frames are all filled.
    ```
    Input roll: 10
    Input roll: 10
    Input roll: 10
    Input roll: 10
    ...
    Your score: 300
    ```

### TODO

- [ ] Currently assumes user will input correct data --> implement checks to avoid a hostile user.
