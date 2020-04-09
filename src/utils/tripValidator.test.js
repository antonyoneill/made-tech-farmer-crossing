import tripValidator from './tripValidator';

describe("tripValidator", () => {
  it("is valid if any number of corn but no geese", () => {
    expect(tripValidator(10, 0)).toEqual(true);
  });
  it("is valid if no corn but any number of geese", () => {
    expect(tripValidator(0, 10)).toEqual(true);
  });
  it("is valid if one corn and two geese", () => {
    expect(tripValidator(1, 2)).toEqual(true);
  });
  it("is valid if two corn and one goose", () => {
    expect(tripValidator(2, 1)).toEqual(true);
  });
  it("is valid if one corn and one goose", () => {
    expect(tripValidator(1, 1)).toEqual(true);
  });
  it("is valid if no corn and no geese", () => {
    expect(tripValidator(0, 0)).toEqual(true);
  });
  it("is invalid if more than 2 corn and 1 goose", () => {
    expect(tripValidator(3, 1)).toEqual(false);
  });
  it("is invalid if 1 corn and more than 2 geese", () => {
    expect(tripValidator(1, 3)).toEqual(false);
  });
});
