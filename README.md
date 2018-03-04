README Edit: My approach and code review
=================

My approach
------
Pre-code:
* I read through the Getting Started section of ESLint in order to ensure consistency and code quality throughout the project. Following some recommendations, I decided the use the AirBnB style guide for JS. More information about ESLint can be found here: https://eslint.org/docs/user-guide/getting-started
* Next, due to the complexity of the project, I spent quite a good amount of time on diagramming and designing the app, in order to optimise my workflow later on and have a clear picture on how different features and app bits are linked.

Regarding the development process, I tried to stick by this flow as much as possible:
* Unit Tests (Frame and Class)
* Implementation
* Feature Tests (visually) on the browser, running the debugger when necessary
* Refactoring

One note on refactoring: ESLint was extremely helpful in this process. Also, I do not regret having spent some time on setting up the Jasmine plugin. I loaded the AirBnB style guide within ESLint by default, I find it extremely solid and coherent.

For this challenge, I decided to implement functionalities one at a time.
To sum it up, this was the process I followed for the business logic, dividing it into four main parts:

PART 1:
- Created Frame Class that takes up to 2 rolls
- Pass the Frame object to the Game Class (<i>frames</i> array with 10 objects, one per game frame)
- Sum them to calculate total score
<i>Notice that no bonuses from Strikes or Spares are taken into account for now.</i>

PART 2:
After making sure the basic business logic and functionalities are working, it was time to work on the bonuses applied due to Strikes and Spares.
- This was probably the hardest part of the app. The biggest struggle was getting to organise my ideas regarding which class was responsible for each app behaviour, as there are many different factors when bonuses need to be applied to the previous frame.

Other key functionality aspects were added too:
* The 10th frame
- I had to split this feature into two parts: 1) Make sure a third roll is pushed to the rolls hash in the Frame class for the last frame, and; 2) Make sure the right bonuses are added.

PART 3:
* Design
- Before moving on to refactoring to make my code more elegant, I decided to start designing the view layer, in case I realised some logic changes were necessary.

Next focus
------
This is where PART 4 from the previous section comes into play. I would divide this section in different parts:

1. Business logic:
* Definitely the <i>finalScore</i> method in Game.js needs refactoring. This is a top priority for the next focus. Some private methods can be added to make the Game class more elegant and readable.
* I am aware that there is a short way of writing prototype pattern methods for a class, I would look into that as well, even though I am aware that is not really a priority.

* Functionality / Edge cases:
- Because of the view layer (when I intentionally hid buttons when a roll is not possible), not all the logic needs to be perfect, but it should be. For example, I am aware that two 9's could be potentially rolled in the same frame without the view layer. Also a method needs to be added to check if the player tries to add more than 10 frames to an instance of Game.
The strike is not correctly set in the 10th frame, and it's not crucial because there's no 11th frame, but it is definitely an issue that needs to be fixed.
I would have liked to make the Game class responsible for all sort of calculations, even those running within a frame (currentScore), I would look into that too, but that is not a priority.

2. Tests:
* Some unit tests can be also refactored, especially these in the frameSpec.js file. Some before blocks could come in handy to have a better experience when running and working on more tests.

Personal code review
------

Overall, I am very happy with my approach and skills used for this project.

1. Things I learned:
* Parameters are not compulsory in JS, contrary to Ruby (one of the many issues raised by RSpec). Realising about that was really helpful
* Adding a comma after that last data in a JSON file breaks everything!
* It is not possible to use arrows as callback functions in jQuery if we are using the keyword <i>This</i> because of some binding issues. I used the arrow instead of the keyword <i>function</i> in the logic though, following the recommendation by AirBnB.
* As I used ESLint with different plugins (Jasmine, jQuery...) I learned a lot about npm and package.json files, and, also, about .lock.json files.

2. Things I did well:
* Making assumptions is the most serious mistake that could be made to develop this app, I am glad I realised soon enough and used ```console.log``` a lot.
* I was led by TDD at all times in this project, I am becoming much more confident with it and aware of its multiple benefits.

3. Things I wish I had done better:
* A better use of **debugger** would have saved me a lot of time, as I mainly used **console.log**, which is not ideal for all the situations.
* I think I spent a lot of time on diagramming and, even though that saved me a lot of time later on, I could have thought a bit more on edge cases and maybe prevented them from happening in my app, as I described in the previous section.
* Perhaps the interface.js file could be also refactored to make it clearer, even though it seems to follow a logical order for me, but maybe not for other coders reading through my files.
 
Technologies used
------
* CSS Flexbox
* ESLint
* Jasmine
* Javascript
* jQuery
* Visual Studio Code

Installation Instructions
------
You do not need to install anything to run this app. Just open ```index.html``` in your browser.

How to run the tests
------
Everything required to run Jasmine is within the <i>lib</i> folder. You just need to open ```SpecRunner.html``` in your browser to run the tests.

Screenshots
------
![Frames](/images/sc-1.png?raw=true)
![Perfect Game](/images/sc-2.png?raw=true)
![Gutter Game](/images/sc-3.png?raw=true)

=================
=================

Bowling Challenge
=================


* Challenge time: rest of the day and weekend.
* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or student, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9am Monday week

## The Task

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am.  And since next week is lab week you have a full extra week to work on this.

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

Also, don't generate random rolls. Trust us on this one.

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

You might even want to start with ESLint early on in your work — to help you
learn Javascript conventions as you go along.

## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## Code Review

In code review we'll be hoping to see:

* All tests passing
* The code is elegant: every class has a clear responsibility, methods are short etc.

Reviewers will potentially be using this [code review rubric](docs/review.md).  Note that referring to this rubric in advance may make the challenge somewhat easier.  You should be the judge of how much challenge you want.
