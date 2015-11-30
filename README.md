Bowling Challenge
===============

This was my weekend challenge submission for Week 6 at Makers Academy; we were asked to code a program in Javascript that could calculate the score of a ten-pin bowling game.

I worked as part of a team of three; all of us were new to Javascript (we had been working with the language for a week and a half) and we found solving the bowling puzzle very challenging. The scoring logic is still not perfect; if the player keeps rolling strikes (unlikely as the score is generated randomly) the score will not currently reach 300. Makers Academy will soon release an exemplar video which I will  study closely in order to properly understand the logic required for the scoring to work perfectly.

I learned a lot in working on this project, not least the basics of object-oriented programming with Javascript (the program uses a Game constructor, a Frame constructor and a Player constructor), and the use of Jasmine to thoroughly test the structure and outcomes. I will be putting this experience to good use in the coming weeks, particularly as we move towards using Angular Javascript in the course.

This project also represented my first time using a more professional git flow within a team: we used development and master branches, along with individual branches for each new feature. This is not reflected in this specific repository as I had to re-fork the original challenge repository in order to make my own individual submission to Makers Academy (all three of members our team had to submit something). The original project can be found [here](https://github.com/ALRW/bowling_challenge).

Notes
------
* The program uses arrays to represent individual frames; these start off within the Frame object, and then at the end of each bowling frame they are moved into a larger two-dimensional array within the Game object.
* When the player rolls the ball a random number of pins are knocked down.
* As mentioned above, there is an issue with the calculation of bonus scores; if a player repeatedly bowls consecutive strikes this will not be reflected accurately. The problem owes to the design of the arrays and the algorithm that handles them.
* You will not be able to bowl more than ten frames. New frame arrays will no longer be created following the tenth.

How to use
----------
1. Fork this repository and then clone it using `git clone <url>`
2. The program can be run via Chrome's Developer Tools console. To do so, open the `SpecRunner.html` file from the root directory in Chrome, and then open your console.
3. Run the following commands to create the required objects:
```
game = new Game()
frame = new Frame(game)
player = new Player(frame)
```
4. To bowl the ball:
```
player.roll()
```
5. To return the score:
```
game.calculateTotalScore()
```
