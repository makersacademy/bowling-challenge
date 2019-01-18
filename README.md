# Bowling Scorecard

## Description

* A bowling scorecard app created using HTML, CSS, JavaScript and JQuery, tested in Jasmine.
* Created for Makers Academy.

## How to use

* Fork and clone this repo.
* Type `jasmine` into the command line to run tests (you must uncomment line 1 in game.js to do this)
* `open index.html` to open the application
* Enter the value of each roll and click submit.
* Click 'Restart Game' to play again.

## My Approach

* I have aimed to follow principles of object oriented design in JavaScript, keeping functions to a single responsibility and separating concerns between the frame and game classes, and the UI logic in script.js
* Each game has ten frames, and can report on its current frame, its running total, and its completion status. Each game can call the roll function of its current frame.
* A frame accepts a value if it is an integer between 1 and 10, and if sufficient pins remain.
* If a frame accepts a value, then the user will be permitted to record a roll with that value.
* Strikes and spares add 1 and 2 bonus rolls to a frame, respectively. These are expended after each roll, with the value of that roll added to any frame due a bonus.
  - Bonus values are not added to the tenth frame, as in this frame the bonus comes via additional roles guaranteed via the completion logic.
* Ordinary frames are complete after two rolls, or after hitting ten pins: whichever comes first.
* The tenth frame is complete after two rolls if there are no bonus rolls earned for that frame; otherwise after three rolls.

## Self-evaluation
* If I had more time with this project, I would improve the styling by making the UI closer to a real-life bowling scorecard, and adding a visual representation of the number of pins standing. With even more time, I would remake the project using React.
