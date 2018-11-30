# Ten Pin Bowling Scorecard

A front end web app to record scores for a game of bowling, developed using JavaScript.
```
1/  7/  4/  ..
/5  /3  /-  ..
06  14  04      24
```

### Planned approach

The interface will have HTML buttons for input, to ensure only valid scores are entered.

Initial development will focus on recording simple scores per frame for a single player, without considering bonuses for strikes and spares. When the bonuses are implemented it will likely be through the use of temporary 'monitors'; each monitor object will record the frame for which it was created (to which it will add the bonus score), its remaining lifespan (beginning at 2, reducing by 1 on each subsequent roll), and the accumulated bonus. At the end of each roll, the game should iterate through the monitors to update them, committing the bonus and removing the object when each one expires.

Scores will be stored in a JS object. Later goals may be to replace this with JSON and use cookies for persistence.
