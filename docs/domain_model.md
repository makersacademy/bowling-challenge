# Domain model

## CRC cards
Below are the initial CRC cards. Please notice that these do not represent the final design, rather the initial conceptualisation based on the first brief.

<table>
  <tr>
    <td colspan="2"><b>Frame</b></td>
  </tr>
  <tr>
    <td>Knows whether it is complete</td>
    <td></td>
  </tr>
  <tr>
    <td>Knows the frame score</td>
    <td></td>
  </tr>
  <tr>
    <td>Can be updated with a new roll</td>
    <td></td>
  </tr>
  <tr>
    <td>Knows if a roll is valid or not</td>
    <td></td>
  </tr>
</table>

<table>
  <tr>
    <td colspan="2"><b>ScoreManager</b></td>
  </tr>
  <tr>
    <td>Keeps track of the overall score in a game</td>
    <td>Frame</td>
  </tr>
  <tr>
    <td>Knows how many frames there are in one game</td>
    <td></td>
  </tr>
</table>

<table>
  <tr>
    <td colspan="2"><b>bonusChecker</b></td>
  </tr>
  <tr>
    <td>Knows how to apply bonus points</td>
    <td>Frame</td>
  </tr>
  <tr>
</table>

## User stories - Client/side logic

These stories are from the point of view of the interface, in other words they outline the features the user interface requires in order to show the increasing score to the user.

```
As the user interface
So I can show which frame the game is on
I want to be able to ask what frame the game is on

As the user interface
So I can show the current score
I want to be able to ask what the score is

As the user interface
So I can show all previous rolls
I want to be able to retrieve a running game digest that includes subtotals and rolls

As the user interface
So I can move the game forwards
I want to be able to update the current score with a new roll

As the user interface
So I can declare the total score
I want to be able to find out if the game is finished

As the user interface
So I can let the user know if they entered an invalid roll
I want to be able to find out if a roll is valid
```
