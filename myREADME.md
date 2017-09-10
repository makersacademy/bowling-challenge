Bowling Challenge Beta (FreddieCodes)
=====================================

```

 ```

Instructions
---------
Program requires a browser that runs javascript
You can also run this program in node.

```
$  node

game.roll()
game.calculateScore()
game.score

```
To start the program `require "./lib/order.rb"`, `"./lib/menu.rb"` and `"./lib/app.rb"` as shown above.

* To start an order `order1 = Order.new`   
* To add an item to your order `order.add_order(item, quantity) `
* To edit a selection `order1.edit_selection(item, quantity)`
* To remove a selection `order1.remove_selection(item)`
* To show basket `order1.show_basket`
* To complete order `order1.complete_order(price)`

Airports cannot land or takeoff during stormy weather. The weather at an airport is determined using a random number generator (found in weather.rb).

Planes cannot depart from a different airport to the one it landed at.

Rules of Bowling
-----


```


```

Although the code implements all of the rules it is still in beta.

Scheduled updates:
* fully functioning web interface
* ensuring the maximum total in a 2 roll frame is 10

The final release will be arriving in the near future.

Files
---------
`bowling.js`
`interface.js`
`index.html`

The Journey
---------
* TDD - using unit tests to guide implementation
* Using functions and prototypes to implement the game logic
* Refactoring
* Testing for edge cases
