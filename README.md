Bowling Challenge
=================

This is my solution to the Makers Academy week 6 weekend challenge. 
The challenge itself can be found in the CHALLENGE.md file.

## To use

Clone the repo and run
```
> npm install
> node cli.js
```
then input your scores one by one.

## Demo

```
  _          _   _        _____         ____                _ _             _ 
 | |        | | ( )      / ____|       |  _ \              | (_)           | |
 | |     ___| |_|/ ___  | |  __  ___   | |_) | _____      _| |_ _ __   __ _| |
 | |    / _ \ __| / __| | | |_ |/ _ \  |  _ < / _ \ \ /\ / / | | '_ \ / _` | |
 | |___|  __/ |_  \__ \ | |__| | (_) | | |_) | (_) \ V  V /| | | | | | (_| |_|
 |______\___|\__| |___/  \_____|\___/  |____/ \___/ \_/\_/ |_|_|_| |_|\__, (_)
                                                                       __/ |  
                                                                      |___/   
         .-.
      .-.\ /    .-.
      \ /|=|    \ /
      |=|   \   |=|
     /   \ ---./   \
     |   / ..  \   |
     |  |#  '   |  |
      '._\     /_.'
          '---'

Frame 1. How many pins did you knock down on roll 1? 10
   _____ _        _ _        _ 
  / ____| |      (_) |      | |
 | (___ | |_ _ __ _| | _____| |
  \___ \| __| '__| | |/ / _ \ |
  ____) | |_| |  | |   <  __/_|
 |_____/ \__|_|  |_|_|\_\___(_)

Frame 2. How many pins did you knock down on roll 1? 5
And how many did you knock down on roll 2? 5
Woo, a spare!
Frame 3. How many pins did you knock down on roll 1? 4
And how many did you knock down on roll 2? 4
Your current score is 42
Frame 4. How many pins did you knock down on roll 1? 4
And how many did you knock down on roll 2? 4
Your current score is 50
Frame 5. How many pins did you knock down on roll 1? 4
And how many did you knock down on roll 2? 4
Your current score is 58
Frame 6. How many pins did you knock down on roll 1? 4
And how many did you knock down on roll 2? 4
Your current score is 66
Frame 7. How many pins did you knock down on roll 1? 4
And how many did you knock down on roll 2? 4
Your current score is 74
Frame 8. How many pins did you knock down on roll 1? 4
And how many did you knock down on roll 2? 4
Your current score is 82
Frame 9. How many pins did you knock down on roll 1? 4
And how many did you knock down on roll 2? 4
Your current score is 90
Last frame! How many pins did you knock down on roll 1? 10
   _____ _        _ _        _ 
  / ____| |      (_) |      | |
 | (___ | |_ _ __ _| | _____| |
  \___ \| __| '__| | |/ / _ \ |
  ____) | |_| |  | |   <  __/_|
 |_____/ \__|_|  |_|_|\_\___(_)

How many pins did you knock down on the bonus roll? 10
How many pins did you knock down on your bonus roll? 10
Your final score is 120!!
   _____                                            _ 
  / ____|                                          | |
 | |  __  __ _ _ __ ___   ___    _____   _____ _ __| |
 | | |_ |/ _` | '_ ` _ \ / _ \  / _ \ \ / / _ \ '__| |
 | |__| | (_| | | | | | |  __/ | (_) \ V /  __/ |  |_|
  \_____|\__,_|_| |_| |_|\___|  \___/ \_/ \___|_|  (_)
  ```

## To Do

- Tests for the game class
- Edge cases - right now, a user can input any old thing and the game will carry on as if everything is fine, but everything will not be fine, it will all be broken. For example:
```
Frame 1. How many pins did you knock down on roll 1? banana
And how many did you knock down on roll 2? 12984172834
Your current score is NaN
Frame 2. How many pins did you knock down on roll 1? can I have a double espresso please?
And how many did you knock down on roll 2? You know the thing about a shark? He's got lifeless eyes, black eyes, like a doll's eyes. When he come at ya, don't seem to be livin'. Till he bites ya. And those black eyes roll over white, and then, oh, then you hear that terrible high-pitch screamin', the ocean turns red, and in spite of all the poundin' and the hollerin', they all come in and they rip you to pieces.
Your current score is NaN
Frame 3. How many pins did you knock down on roll 1? 10
   _____ _        _ _        _ 
  / ____| |      (_) |      | |
 | (___ | |_ _ __ _| | _____| |
  \___ \| __| '__| | |/ / _ \ |
  ____) | |_| |  | |   <  __/_|
 |_____/ \__|_|  |_|_|\_\___(_)

Frame 4. How many pins did you knock down on roll 1?
```
- I'd like the game to return a breakdown of the scores, just like an actual scorecard, rather than just the total score
- The game class has some really chonky methods that could do with refactoring