
#Bowling Challenge


###Task

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

The aim of this challenge was to use and develop our new knowledge of JavaScript, creating a fairly complex algorithm in a relatively unchartered language.


###Approach

My approach was to diagram all the logic first, to save myself time in the future. I wrote all the tests and the code for a normal game with the assumption that the 10th frame acted the same as the previous 9. This made it easier to implement the basic scoring logic first, and allowed me to save the difficult part until the rest was working.

It took me a long time to work out how to get the 10th frame logic to work, and the code itself is very long and un-refactored. I have also only used one constructor function for the whole logic, but I would like to eventually get round to extracting the various responsibilities into different constructor functions, such as Frame or Score.

It took so long for me to get the algorithm working, that I have not been able to refactor as of yet, however I am very happy that I at least managed to get the algorithm working.

There is a lot more work to be done to this code, however it currently passes all of tests in the extensive test file. This was very much a TDD project.

27/05/18 Update:

I have now refactored all of the Bowling methods fairly extensively, and now no longer need the comments explaining what each line does, as it reads a lot more like english now! Still aiming to extract a Frame constructor function with its own logic into a separate file.

12/07/18 Update:

I have created a UI for this application, using HTML, CSS and jquery.


### Instructions

Clone this repository
```
$ git clone git@github.com:samworrall/bowling-challenge.git
```

Check that all tests are passing
```
$ open SpecRunner.html
```

Run the application in the browser
```
$ open bowling.html
```
