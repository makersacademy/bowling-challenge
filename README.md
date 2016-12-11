
# Bowling Challenge
[![Build Status](https://travis-ci.org/GeorgeSeeger/bowling-challenge.svg?branch=master)](https://travis-ci.org/GeorgeSeeger/bowling-challenge)


This program calculates a score for a bowling game

## Getting started

To use this program simply clone or fork this repo and add the following path to ```bowling.js``` for any html document you're using
```html
<script src='path/to/bowling.js'></script>
```

From there, you can create a new bowling game with
```JS
var bowling = new Bowling([a,r,r,a,y, ,o,f,S,c,o,r,e,s]);
```
and then the score will be returned with
```JS
bowling.score();
```

### Running my automated tests

Open the SpecRunner.html document in the base directory

An example of the tests would be
``` JavaScript
var bowling = new Bowling([10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,10,10]);

//it should calculate 300 for a perfect game
bowling.score(); // 300
```


## Contributing

Don't bother :^)

## Authors
* **George Seeger** - [GeorgeSeeger](https://github.com/georgeseeger)
