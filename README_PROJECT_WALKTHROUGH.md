## PROJECT WALKTHROUGH ##

In this readme i will explain step by step my development proccess for this challenge.

## PROJECT SETTING.

First of all i set up the directorie organization for the project and the  test environment, in this project i will be using Jasmine framework for testing.

I ve just dowloaded the files pack and the current version of the framework is 3.5.0

[jasmine](https://jasmine.github.io/pages/getting_started.html)
[jasmine download](https://github.com/jasmine/jasmine/releases)

Once downloaded i have placed the structure in the project root and configured the files en SpecRunner.html. The thing to do is to link the files of the project in here

 - SpecRunner.html :

    ```
    <!-- include source files here... -->
    <script src="src/Game.js"></script>

    <!-- include spec files here... -->
    <script src="spec/GameSpec.js"></script>


    ```

  Once that is done it is possible to run the html file and observe this page in the web explorer of your choice.

  At this point of the proccess i make the first commit and start the developtment from this moment.
  - First commit.
--------------------------------------------------------------------------------

## PROJECT DSTEPS ##

# FIRST STEP.

  First thing to do is stablish the domain model of the project. I am gonna follow the next plan:

# DOMAIN MODEL.

    CLASS
    - BowlingGame
    METHODS.
    The class Bowling game has the following main methods.
    - Score = Is the method in charge of the accountability of the points in the different cases.
    - play = Is the method in charge to go through the diferent rolls and frames.

    TESTING.

    This development is going to be made following the TDD model, step by step trying to test any possible scenario since the beggining.

    TESTING SCENARIOS:  

    - Gutter Game : The test will check that the score is 0 points when a complete game of 20 rolls have been made without any pin down (sad, but it could happens.)

    - Game without any bonus = This test will check that within a game of 20 rolls with 1 pin down for each roll the score is equal to 20 points.

    - Game with a spare = This test will check that a spare is correctly sum with its proper bonus. Example of this : 6/4 - 7/2 , in the first two frames should score 26 points.

    - Game with a strike = This test will check that a strike has been made and the point are correctly scored, bonus included. Example = 10/- , 2/3, in the first two frames, it should score 20 points.

    - The perfect game = This test will check the perfect game wich is to make 10 strikes and 2 more thanks to the bonus , that should have an outcome of 300 points.


--------------------------------------------------------------------------------

## SECOND STEP. DEVELOPMENT.

  1. CREATING THE FIRST TEST.

  ```javascript
  describe('Bowling Game', function(){
    var game;

    beforeEach(function(){
      game = new BowlingGame();
    });

    describe('the diferent scenarios', function(){
      it('Scores 0 points in a gutter game, 20 rolls with 0 pins down', function(){
        for (let i=0; i < 20; i++) {
          game.play(0);
        }
        expect(game.score()).toEqual(0);
      });
    });

  });

```
   - Explanation :

   1. I create the environment for the test with the first describe.
   2. A variable game; is created empty at the moment.
   3. I stablish a beforeEach condition for using the object BowlingGame everytime
   in the test. I assing the object BowlingGame to the variable.
   4. Another describe to contain all the different testing scenarios.
   5. The first test will recreate the gutter game, for to do that i need to play
   20 times. I create a 20 times loop (in ruby 20.times do) for the play method and this method has an argument of 0, meaning 0 pins down in the 20 rolls. I set an expectation of 0 points for the score at the end.

   Test state at the moment:

   ![Test_1](https://github.com/rafahg/bowling-challenge/blob/media/First_test.png)

   Of course that test is failing, it is necesary the implementation in the Game.js file to make this work.

   That task will be done in the next step.
   I am going to commit here. It will be the second one.
   I do a third one to implement better images in this README file.

   -----------------------------------------------------------------------------------

  2. FIRST IMPLEMENTATION.
  I am gonna create the class BowlingGame and the methods play and score.
  Like that:

   ```javascript
   var BowlingGame = function() {};


   BowlingGame.prototype.play = function() {
     //code here.
   };

   BowlingGame.prototype.score = function() {
     //code here.
   };
   ```

  once i do that what i have in the test is this:

  ![Test_2](https://github.com/rafahg/bowling-challenge/blob/media/2.BowlingGameClass_created.png)

  ![Test_3](https://github.com/rafahg/bowling-challenge/blob/media/3.methods_created.png)

  That shows that at the moment evertything is working properly, it is logic the fail due to i dont have any code within the methods.

  To have logic within the methods i implement the following:

  ```javascript
  BowlingGame.prototype.play = function(pins) {
    this._tempScore += pins;
    //this is equivalent of this._tempScore = this._tempScore + pins;
  };

  BowlingGame.prototype.score = function() {
    return this._tempScore;
  };
 ```

What i am doing here is basically add an attribute to the class which will be in charge of storage
the temporary score, and without any other logic at the moment the way to do it is control the points which are down in a row. Thats why now the method play have a parameter called (pins), those pins mean that for every roll, i ve knock down that number of pins.

So we iterate 20 times in the test the method play with the parameter of our choice and of course if 0 is chosen the outcome is gonna be 0 points.

The method score at the moment only storage the attribute updated. For the first test the attribute is gonna remain at 0 points, so piece of cake.


 Implementing that code, as explained, the test pass.

![Test4](https://github.com/rafahg/bowling-challenge/blob/media/4.gutter_passed.png)

Time for one commit at this point.
----------------------------------------------------------------------------------------------------

3. Next tests and spare and strike logic.

The next test i need to create is the one when 20 pins are down in 20 roll, 1 per roll, with a nice outcome of 20 points.

The test look like that :

```javascript
describe('Bowling Game', function(){
  var game;

  beforeEach(function(){
    game = new BowlingGame();
  });

  describe('the diferent scenarios', function(){
    it('Scores 0 points in a gutter game, 20 rolls with 0 pins down', function() {
      for (let i=0; i < 20; i++) {
        game.play(0);
      };
      expect(game.score()).toEqual(0);
    });

    it('Scores 20 points in a play when 1 pin has been down each roll', function() {
      for (let i=0; i<20; i++) {
        game.play(1);
      };
      expect(game.score()).toEqual(20);
    });

  });

});
```
As long as no spares of strikes are made at this moment the logic implemented is totally useful, that's why when i run the test at this moment i obtain this green which make my hart warm.

![Test_5](https://github.com/rafahg/bowling-challenge/blob/media/5.20_points_test_passed..png)

Time for the spare case test.

First i am going to do a little refactoring in the test, i am goin a create a helper function to simplify the code in the tests. I refactor the code like that:

```javascript
describe('Bowling Game', function(){
  var game;

  beforeEach(function(){
    game = new BowlingGame();
  });

  describe('the diferent scenarios', function(){
    it('Scores 0 points in a gutter game, 20 rolls with 0 pins down', function() {
      rolls(0, 20);
      expect(game.score()).toEqual(0);
    });

    it('Scores 20 points in a play when 1 pin has been down each roll', function() {
      rolls(1, 20);
      expect(game.score()).toEqual(20);
    });



  });//second describe end.

  function rolls(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      game.play(pins);
    };
  };
  //first describe end.
});
```
 The helper function roll(pins, rolls) now takes care of testing several rolls and pins down in each of those rolls. It is a simple refactor of the two lines that i had before, now depending of the rolls and the pins, as it is possible to see in the loop.
 So selecting 0 pins in 20 rolls and 1 pin in 20 rolls, the result on the test should be the same, and thankfully , it is.

 ![Test_6](https://github.com/rafahg/bowling-challenge/blob/media/6.refactor_test.png)

 Now, i am gonna write the spare test, like that :

 ```javascript
 it('the score is correct after a spare, the bonus is correctly calculated', function(){
   game.play(6);
   game.play(4);
   game.play(3);
   rolls(0,17);
   expect(game.score ()).toEqual(16);
 });
 ```
  This test is checking that a spare has been done, 6 + 4 plays in the 2 firs rolls, and 3 pins down in the 3 roll, then i just assume that the player has not made any other point in the game.
  The score we are expecting following the bowling rules is : 6 + 4 + 3(bonus of the third roll) + 3 (third roll itself) + 0 points for the rest of the game, so, it should be 16 points.

  When i run the test, it is going to fail, there is no spare logic at all. it give us, a boring no logical 13 points score.

  ![Test_7](https://github.com/rafahg/bowling-challenge/blob/media/7.spare_test_failed.png)

   Let's implement the spare logic for make that test pass.

   First of all i have to change the code to get ready for the spare logic:

   ```javascript
   var BowlingGame = function() {
     this._rollsPinsDown = [];
   };


   BowlingGame.prototype.play = function(pins) {
     return this._rollsPinsDown.push(pins);
     //this is equivalent of this._tempScore = this._tempScore + pins;
   };

   BowlingGame.prototype.score = function() {
     var score = 0; //Initial score, set at 0 points.
     var rollNumber = 0; //this is the index of the array this._rollsPinsDown
     //in the below loop frameNumber means the number of frames available, maximum 10.
     for (let frameNumber = 0; frameNumber < 10; frameNumber++) {
     var frameScore = this._rollsPinsDown[rollNumber] + this._rollsPinsDown[rollNumber + 1];
     score += frameScore
     rollNumber +=2;
     };
     return score;
   };
```
  i have changed the methods to do exactly what they are doing until now but going through the whole game.

  Explaining the changes step by step :

    - The attribute ``` this._tempScore```has been changed for ```this._rollsPinsDown```
    which is an array to get the accountability of the 20 rolls and 10 frames.

    - play method now is in charge of getting the pins dows of each roll in the array.

    - Score method now is a proper calculator method. I set up the score as 0 and the roll number at 0, the game has not started yet.
    The the loop goes through the array simulating the frames until the 10th frame.
    The score is calculated selecting in the first iteration the first 2 elements of the array and adding them to the score variable and so on.
    - Finally the rollNumber(simply the array index) is aumented 2 positions to take us to the third element of the array which is the beggining of the 2 frame, and so on.
    - Finally we get the final score of the game in the function return outcome.

   This seems really good but there is no spare logic at all at the moment so the test still will be failing, but it is good to run it to check that the changes has not afected the general logic.
   The result is the expected one:

   ![Test_8](https://github.com/rafahg/bowling-challenge/blob/media/8.methods_play_and_score_changed_testFailed.png)

   Time for finally implement the spare logic, we are almost there.

   I code this :

   ```javascript
   BowlingGame.prototype.score = function() {
     var score = 0; //Initial score, set at 0 points.
     var rollNumber = 0; //this is the index of the array this._rollsPinsDown
     //in the below loop frameNumber means the number of frames available, maximum 10.
     for (let frameNumber = 0; frameNumber < 10; frameNumber++) {
     var frameScore = this._rollsPinsDown[rollNumber] + this._rollsPinsDown[rollNumber + 1];
     //spare logic------------------------------------------->>
      if (frameScore === 10) {
       score += 10 + this._rollsPinsDown[rollNumber + 2];
    //-------------------------------------------------------<<

     } else {
     score += frameScore
     }
     rollNumber += 2;
     };
     return score;
   };
 ```
   The spare logic is the new if within the method.
   The way it works is the following:
     - If the frame score is equal to 10 points means that the player got a spare
     so the new way to calculate the score for that point of the game is
     10 + the previous score + plus the first roll of the next frame. More clearly explained
     in our array: ```this._rollsPinsDown``` now we have [6,4,3,0,0,0...0] so what we are doing is
     sum 10 + 0 (previous score) + 3. The if conditional in the method  stops here for this iteration, and in the next iteration the code looks for the 3 which is in the rollNumber = 2 now. So the final sum is 10 + 0 + 3 + 3 + 0 + 0 ..... + 0 = 16. That outcome will make pass the test.

     And it does!

     ![Test_9](https://github.com/rafahg/bowling-challenge/blob/media/9.spare_logic_test_passed.png)

     Time for other commit at this point.
--------------------------------------------------------------------------------------------------------
