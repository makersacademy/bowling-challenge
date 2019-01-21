
```
_ 0
o'-/-\--------------------------------------------
  |\                                           . o
  / |       '.                             . o . o
             .'                              o . o
            '                                    o
__________________________________________________
```




Bowling Challenge
=================

## Technologies used

Javascript - implementation of the scorecard

Jasmine - testing framework

ESlint - linter



## Instructions

Clone this GitHub repo and open the index.html in a web browser.

### Using the Scorecard
```
$ git clone git@github.com:jjaywayawyaj/bowling-challenge.git
$ cd bowling-challenge
$ open index.html
```

### Running the Test Suite
```
$ git clone git@github.com:jaywayawyaj/bowling-challenge.git
$ cd bowling-challenge
$ open SpecRunner.html
```


## Project Review

This is an unfinished piece of work, and as such there are many areas for improvement. Full strike functionality is working, along with bonus points for the final frame, although I havent tested it with various results so there's a chance of bugs.

### Implementation

- The entire program is currently based in one, gigantic `Game` class. I would split this into at least two, if not three classes (`Frame` and `Score`)
- The longwinded `if`/`else`/`else if` are not ideal - I would refactor these into various functions accross the classes
- There is currently nothing to stop more than 10 pins being input for each roll, this is problematic for the rules of 10 pin bowling

### Testing 

- Testing perhaps not quite as robust as I'd like - I feel like there's scope for errors in the logic at the moment (full strike functionality only finalised at 9am on Monday)
- No tests exist for certain edge cases, however: too many pins knocked down, final frame with a spare, perhaps more

### Delivery

- I would build a user interface so that this app could be displayed and interacted with by the user in a browser, rather than the command line
- I would like to create a case for data persistance using a database so that a user would be able to see their history

#### Reflections

I feel like this code looks more like something I was producing in the precourse of Makers (so many if statements etc), but despite this I enjoyed the challenge. I really struggled with JS, and I hope one day I like it, but the logic and problem solving elements of this challenge were excellent. It is something I would like to return to when I have a better command of the language so I can focus on the challenge a bit more.

      |"""""|
         |iIjIi|
        //     \\
       //       \\
      //         \\
     //           \\
    //             \\
   //               \\
  //                 \\
 //                   \\
//   /  /   |   \  \   \\

  ___
 /o o\
|  o  |
 \___/


## Appendix

```


                                       (O)           (O)
                                       ||     (O)    ||
  .----.                               ||     ||     ||
 /   O O\                             /  \    ||    /  \
 '    O  '                           :    :  /  \  :    :
 \      /                            |    | :    : |    |
__`----'______________________________\__/__|    |__\__/____    
                                             \__/

```

* Challenge time: rest of the day and weekend.
* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or student, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9am Monday week

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am.  And since next week is lab week you have a full extra week to work on this.

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

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

```


         ,ad88ba,
       ,dP'    `Yb,
       8"        "8
       8          8
       8          8
       Y,        ,P
       `b        d' 
        8        8
        8        8
        8aaaaaaaa8
       ,8aaaaaaaa8,
      ,dP        Yb,
     ,8P          Y8,
    ,dP            Yb,
   ,8P              Y8,
  ,dP                Yb,
 ,8P                  Y8,
 dP                    Yb
 8I                    I8,
I8'                    `8I
I8                      8I
I8                      8I
`8                      8'
 Yb                    dP              
 `8b                  d8'
  `8baaaaaaaaaaaaaaaad8'
   `8baaaaaaaaaaaaaad8'
    `8b,          ,d8'  
     `8b,        ,d8'   
      `Y8baaaaaad8P'
      
      
```
