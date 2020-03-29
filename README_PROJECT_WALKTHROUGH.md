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

  ```
  describe('Bowling Game', function(){
    var game;

    beforeEach(function(){
      game = new BowlingGame();
    });

    describe('the diferent scenarios', function(){
      it('Scores 0 points in a gutter game, 20 rolls with 0 pins down', function(){
        for (let i=20; i < 20; i++) {
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

   ![Test state](https://github.com/rafahg/bowling-challenge/blob/media/First_test.png)

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

  ![Test_2](picture_2)

  ![Test_3](picture 3)

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

![Test4](picture_4)

Time for one commit at this point.
----------------------------------------------------------------------------------------------------
