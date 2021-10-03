# Bowling Scorecard

This is an application in which a user can input scores from their game of bowling, and receive a score as an output.

---

## Preview

![](https://github.com/EMDevelop/public_resources/blob/main/gifs/Bowling/BowlingUI.gif)

---

## How to run

- Clone this repository `git clone https://github.com/EMDevelop/BowlingScorecardJS.git`
- Open the command line withing the `BowlingScorecardJs` file
- Run `open index.html`

---

## Rules

- A game consists of 10 Frames
- Each frame has 2 rolls each, except the 10th frame which has 3.
- Scores are summed as adding each roll together
- Bonus points are awarded for a
  - Strike
    - You hit all 10 pins in the first roll of a frame
    - Your score of that frame is incremented by the scores on your next 2 rolls
  - Spare
    - You hit all 10 pins over 2 consecutive rolls within the same frame
    - Your score of that frame score of your next roll
- If you score a Perfect game (all 21 x 10 scores), you are told
- If you score a Gutter game (all 20 x 0 scores), you are told

## Input / Output Table

| Input                                                               | Output                   |
| ------------------------------------------------------------------- | ------------------------ |
| [[1]]                                                               | 1                        |
| [[1,1]]                                                             | 2                        |
| [[1,1],[1]]                                                         | 3                        |
| [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]       | 20                       |
| [[10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]        | 30                       |
| [[10],[10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]         | 49                       |
| [[10],[10],[10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]          | 77                       |
| [[1,9],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]       | 29                       |
| [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[10],[10, 10, 10]] | 76                       |
| [[10],[10],[10],[10],[10],[10],[10],[10],[10,10,10]]                | 300, "perfect game1"     |
| [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]       | 0, "gutter game!"        |
| []                                                                  | "Enter at least 1 score" |
