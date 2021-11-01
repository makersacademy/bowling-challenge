Bowling Challege Javascript
==================
Introduction
---------
The bowling game is made in Javascript 

Approach
-------
1. The function totalScore(score_sheet) takes an array of bowling scores and calculates a total.  The array is put through the .reduce method and all scoring is done in this method.

2. Each index of this array(score_sheet) is a "roll".  If there is a strike, the frame goes up +1.  Otherwise the frame goes up + 0.5 for each roll.  For example in the third frame: the first roll would be kept in frame 3, and the second roll would kept in frame 3.5. 

3. There is also a function bowl(pins) which adds scores to the array 'my_score_sheet'.  This array can be put in the totalScore method for each roll.

4. Example commands would be like this:  
```
bowl(8)
bowl(2)
bowl(5)
bowl(3)
console.log(my_score_sheet)
console.log('Current Score: ' + totalScore(my_score_sheet))
```
And the console shows:
```
[ 8, 2, 5, 3 ]
Current Score: 23
```


**Improvements that are possible**

* Break down code into smaller classes for readability
* The tests could be improved for edge cases such as: when the user inputs pin scores above 10, when the game doesn't end after 10 frames
* Build cli, and web app


