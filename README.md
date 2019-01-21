
#Bowling Challenge#

![bowling ASCII](https://user-images.githubusercontent.com/43742795/51447391-9ef6bd80-1d15-11e9-9878-96abb0d39038.png)


The challenge is to build a bowling scorecard (not a game), in Javascript.

## The rules ##

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins.<br/>
In every frame the player can roll one or two times. The actual number depends on strikes and spares.<br/>
The score of a frame is the number of knocked down pins plus bonuses for strikes and spares.
After every frame the 10 pins are reset.<br/>

* Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame.<br/>
The frame ends immediately (no second roll due to no pins to hit left).<br/>
The bonus for that frame is the number of pins knocked down by the next two rolls.<br/>
That would be the next frame, unless the player rolls another strike.

* Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame.<br/>
The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

* 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus.<br/>
But they can never roll more than 3 balls in the 10th frame.<br/>
The additional roll only count for the bonus not for the regular frame count.

* Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

* Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame).<br/>
The Perfect Game scores 300 points.

In the image below you can find some score examples.

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## How to use ##

1. clone the repo<br/>
Under the repo name click *clone or download*<br/>
Click on *use HTTPs*, copy the clone URL of the repo<br/>
In the terminal go on the working directory where you want the cloned directory to be<br/>
Use the `git clone` command and paste the clone URL then press enter :

```shell
$ git clone https://github.com/your-username/your-repositary.git
```

2. On your local machine go inside of the *bowling-challenge* directory :

```shell
$ cd bowling-challenge
```
3. You can see the different files by using the `ls` command :<br/>

```shell
$ ls
```

4. You can open the *.js* file that you want to read and change the code in your text editor or using `vim` :

```shell
$ vim wanted_file.js
```
Or you can just read the contains of it from the command line with `cat` :

```shell
$ cat wanted_file.js
```

## Run the tests ##

1. On your command line, from your root directory, use the `pwd` command to see the path of your *html* file:

```shell
$ pwd
$ /Users/yourUsername/Desktop/directory-of-your-project/bowling-challenge
```

2. In your browser copy and past this path, and add at the end of it */SpecRunner.html* <br/>
The page will be displayed on your browser.

3. If you use google chrome you can also open the page on your browser directly from your command line from your root directory, by using the command `open -a “Google Chrome” SpecRunner.html` :

```shell
$ open -a “Google Chrome” SpecRunner.html
```
The page with the test results will be opened on your browser.
