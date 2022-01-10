# Bowling Challenge

A simple bowling game scorecard program built with JavaScript.
(Translation from my previous scorecard built with Ruby)

## Getting Started

### Installation

1. Clone the repo
```
  % git clone https://github.com/Riky5/bowling-challenge-ruby.git
```
2. Install dependencies
```
  % npm install
```
3. Run test
```
  % jest
```
## Usage

In the terminal run
```
  % node cli.js
```
### Example:  

```
WELCOME TO Bowling.JS

-----> Score: 0 <-----

Enter first roll: 
```
It will prompt you to enter how many pins you hit in each rolls.  
It will ask for a bonus roll each time but that can be skipped by pressing 'Enter' and will only work for the 10th frame anyway.
```
Enter first roll: 2
Enter second roll: 4
Enter bonus roll: 

-----> Score: 6 <-----
```
Normal frame. No Spare. No Strike.

---
```
Enter first roll: 6
Enter second roll: 4
Enter bonus roll: 

-----> Score: 16 <-----
```
In this frame we have a SPARE.
Previous score (6) + current spare score (10) = 16.  
The bonus will be added in the next frame.

---
```
Enter first roll: 5
Enter second roll: 5
Enter bonus roll: 

-----> Score: 31 <-----
```
In this frame we score a SPARE again.
In this case the bonus is (5).  
Previous score (16) + current frame score (10) + bonus (5) = (31)

---
```
Enter first roll: 10
Enter second roll: 0
Enter bonus roll: 

-----> Score: 51 <-----
```
In this frame we score a STRIKE.  
The bonus for the previous spare is (10).  
Previous score (31) + current score (10) + spare bonus (10) = (51)

---
```
Enter first roll: 2
Enter second roll: 6
Enter bonus roll: 

-----> Score: 67 <-----
```
The bonus for the previous Strike is (8).  
Previous score (51) + current score (8) + strike bonus (8) = (67)

---
10th frame:
```
Enter first roll: 9
Enter second roll: 1
Enter bonus roll: 6

Final Score ---> 129
GAME OVER! 
```
We score a SPARE in the first 2 rolls of the last frame, so we can finally add the bonus roll.  
GAME OVER. The cli will quit automatically.

ps: no consecutive strike bonus implemented.