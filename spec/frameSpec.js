"use strict";

describe("Frame", () => {
  let frame;

  describe("Frames 1 to 9", () => {
    beforeEach(() => {
      frame = new Frame();
    });

    it("initializes as not final frame", () => {
      expect(frame.isFinalFrame()).toEqual(false);
    });

    it("does not create 3rd roll", () => {
      expect(frame.rollThree()).toBeUndefined();
    });

    it("can add a valid roll", () => {
      frame.add(3);
      expect(frame.rollOne()).toEqual(3);
    });

    it("cannot add an invalid roll: out of range number", () => {
      frame.add(11);
      expect(frame.rollOne()).toBeNull();
    });

    it("cannot add an invalid roll: not an integer", () => {
      frame.add("a");
      expect(frame.rollOne()).toBeNull();
    });

    it("can add two valid rolls", () => {
      frame.add(3);
      frame.add(4);
      expect(frame.rollTwo()).toEqual(4);
    });

    it("cannot add two rolls that exceed maximum pin number", () => {
      frame.add(3);
      frame.add(8);
      expect(frame.rollTwo()).toBeNull();
    });

    it("sets 2nd roll to zero if strike", () => {
      frame.add(10);
      expect(frame.rollTwo()).toEqual(0);
    });

    it("is not full if only contains one roll under 10", () => {
      frame.add(9);
      expect(frame.isFull()).toBeFalsy();
    });

    it("is full after a strike", () => {
      frame.add(10);
      expect(frame.isFull()).toBeTruthy();
    });

    it("cannot add two strikes to same frame", () => {
      frame.add(10);
      frame.add(10);
      expect(frame.rollTwo()).toEqual(0);
    });

    it("is full if two valid rolls added", () => {
      frame.add(3);
      frame.add(2);
      expect(frame.isFull()).toBeTruthy();
    });

    describe("Frame array generation", () => {
      it("generates array of 10 frame objects", () => {
        console.log("here:", frame.generateFramesArray());
        expect(frame.generateFramesArray().length).toEqual(10);
      });

      it("sets first to ninth array objects as normal frames", () => {
        expect(frame.generateFramesArray()[0].isFinalFrame()).toEqual(false);
        expect(frame.generateFramesArray()[8].isFinalFrame()).toEqual(false);
      });

      it("sets tenth array object as final frame", () => {
        expect(frame.generateFramesArray()[9].isFinalFrame()).toEqual(true);
      });
    });
  });

  describe("Frame 10", () => {
    beforeEach(() => {
      frame = new Frame(true);
    });

    it("initializes as final frame", () => {
      expect(frame.isFinalFrame()).toEqual(true);
    });

    it("initializes with _rollThree", () => {
      expect(frame.rollThree()).toBeNull();
    });

    it("allows a valid first roll", () => {
      frame.add(5);
      expect(frame.rollOne()).toEqual(5);
    });

    it("is full after two rolls totalling less than 10", () => {
      frame.add(3);
      frame.add(2);
      expect(frame.rollTwo()).toEqual(2);
      expect(frame.isFull()).toBeTruthy();
    });

    it("can accept two strikes in the first two rolls", () => {
      frame.add(10);
      frame.add(10);
      expect(frame.rollTwo()).toEqual(10);
    });

    it("allows third roll if first two rolls total more than 10", () => {
      frame.add(3);
      frame.add(7);
      frame.add(9);
      expect(frame.rollThree()).toEqual(9);
      expect(frame.isFull()).toBeTruthy();
    });

    it("will not allow third roll if first two rolls total less than 10", () => {
      frame.add(3);
      frame.add(2);
      frame.add(9);
      expect(frame.rollThree()).toBeNull();
      expect(frame.isFull()).toBeTruthy();
    });

    it("can accept three strikes in final frame", () => {
      frame.add(10);
      frame.add(10);
      frame.add(10);
      expect(frame.rollThree()).toEqual(10);
      expect(frame.isFull()).toBeTruthy();
    });
  });
});
