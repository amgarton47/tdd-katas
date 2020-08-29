const { expect } = require("chai");
const twoSum = require("./twoSum");

describe("twoSum", () => {
  it("is a function", () => {
    expect(typeof twoSum).to.equal("function");
  });

  it("returns an array", () => {
    expect(twoSum([], 0)).to.be.an("array");
  });

  it("returns an empty array if an array with less than two elements is provided", () => {
    expect(twoSum([], 0)).to.deep.equal([]);
    expect(twoSum([2], 0)).to.deep.equal([]);
  });

  it("correctly identifies two numbers that sum to the target", () => {
    expect(twoSum([1, 2, 3], 5)).to.deep.equal([2, 3]);
    expect(twoSum([41, 3, -10], 41)).to.deep.equal([]);
    expect(twoSum([46, 1, -47], 47)).to.deep.equal([46, 1]);
  });

  it("returns an empty array if no two numbers sum to target", () => {
    expect(twoSum([1, 2, 3], 6)).to.deep.equal([]);
    expect(twoSum([41, 0, -10], 4)).to.deep.equal([]);
  });
});
