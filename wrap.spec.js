const { expect } = require("chai");

const wrap = require("./wrap");

describe("wrap", () => {
  it("is a function", () => {
    expect(typeof wrap).to.equal("function");
  });

  it("returns a string", () => {
    expect(typeof wrap("", 0)).to.equal("string");
  });

  it("returns an empty string if string input is empty", () => {
    expect(wrap("", 10)).to.equal("");
  });

  it("returns input if lineLength is greater than input length", () => {
    expect(wrap("This string is 34 characters long.", 47)).to.equal(
      "This string is 34 characters long."
    );

    expect(wrap("14 characters.", 20)).to.equal("14 characters.");
  });

  it("returns input if lineLength is 0 or less", () => {
    expect(wrap("Random string.", 0)).to.equal("Random string.");

    expect(wrap("Negative line length!", -47)).to.equal(
      "Negative line length!"
    );
  });

  it("correctly wraps input of any length with a provided line length", () => {
    expect(
      wrap(
        "Lolita, light of my life, fire of my loins. My sin, my soul. Lo-lee-ta: the tip of the tongue taking a trip of three steps down the palate to tap, at three, on the teeth. Lo. Lee. Ta.",
        20
      )
    ).to.equal(
      "Lolita, light of my\nlife, fire of my\nloins. My sin, my\nsoul. Lo-lee-ta: the\ntip of the tongue\ntaking a trip of\nthree steps down the\npalate to tap, at\nthree, on the teeth.\nLo. Lee. Ta."
    );

    expect(
      wrap(
        "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.",
        20
      )
    ).to.equal(
      "Lorem ipsum dolor sit\neu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula."
    );

    expect(wrap("Test input string of arbitrary length", 10)).to.equal(
      "Test input\nstring of\narbitrary\nlength"
    );
  });
});
