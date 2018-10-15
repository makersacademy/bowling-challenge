Bowling Challenge
=================

This is a "bowling scorecard", rather than a complete bowling game, as was instructed.

This challenge was attempted over 2 Fridays and weekends.

My initial first Friday thoughts were scrapped and I decided early on that the simplest way to tackle the logic for the bowling and scoring was to house the pins in a 20 zero array and populate by index position. Also, having just one Bowling game class with just a "roll" and "score" prototype methods kept things straightforward in my mind.

Also, I was always going to tackle the anomaly scoring of the 10th frame once I had worked out the logic for frames 1-9. My thought being that I could push an extra zero on the array if certain 10th frame scoring conditions were met.

After completing the logic for frames 1-9 my code looked relatively simple and short, so at about this time I set up the front end with jQuery and HTML. This was a good point to do this as it gave me a working visual picture of what I wanted and also helped me foresee further game logic.

The 10th frame work seemed to make the volume of my code double as there were more logic for this than expected. This is when I started to think about separate classes and/or methods (see ToDo list below). As things stand, and on Code Review, my methods are a "single monolithic object(s) that does everything" - this would need a complete refactoring.

Ultimately, in terms of an MVP, a little more work is needed on the 10th frame and Game Over scenario.


Instructions on running
-----------------------
Run straight from copying HTML file path into browser :
```
bowlingDisplay.html
```
This front end should be pretty self explanatory with buttons and entry fields. And you are prompted if you try to bowl more than 10 pins in any one ball. "Game Over" message also instructs you to press the "Reset" button.


Gems used
---------
Sinatra
Rspec


Jasmine testing


Languages
---------
JS
jquery
HTML/CSS


Credits
-------
Speaking to other Makers, post completing my initial logic - ie tips on passing in a number into a variable
Multiple YouTube videos!
JS online course.


ToDo
----
- Lint and TravisCI installation?
- Perhaps separate into separate classes - bowl and scoring (and possibly separate out the 10th frame or bonus score logic within).
- Too many "if-else" conditionals.
- 10th frame logic looks a bit "iffy" - needs looking at again.
- add a raise error message if a 2 ball frame score of over 10 is attempted - currently it is limited to 1-10 pins "per bowl" via HTML coed/parameters.
- possible further tests needed.
- CSS, as currently just centred and text based - maybe pics and "Strike" effects
- Use JS-Bootstrap!!!... https://getbootstrap.com/


Author
------
DamoH - Github
