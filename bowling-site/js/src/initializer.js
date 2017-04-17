thrower = new Thrower();
frameTerminator = new FrameTerminator();
frameHandler = new FrameHandler(thrower,frameTerminator);
game = new Game(frameHandler);
