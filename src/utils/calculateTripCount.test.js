import calculateTripCount from "./calculateTripCount";

describe("calculateTripCount", () => {
  it("gives 0 trips for 0 corn 0 geese", () => {
    expect(calculateTripCount(0, 0)).toEqual(0);
  });
  it("gives 1 trip for 1 corn 0 geese", () => {
    expect(calculateTripCount(1, 0)).toEqual(1);
  });
  it("gives 3 trips for 2 corn 0 geese", () => {
    expect(calculateTripCount(2, 0)).toEqual(3);
  });
  it("gives 19 trip for 10 corn 0 geese", () => {
    expect(calculateTripCount(10, 0)).toEqual(19);
  });

  it("gives 1 trip for 0 corn 1 geese", () => {
    expect(calculateTripCount(0, 1)).toEqual(1);
  });
  it("gives 3 trips for 0 corn 2 geese", () => {
    expect(calculateTripCount(0, 2)).toEqual(3);
  });
  it("gives 19 trip for 0 corn 10 geese", () => {
    expect(calculateTripCount(0, 10)).toEqual(19);
  });

  it("gives 1 trip for 0 corn 0 geese 1 foxes", () => {
    expect(calculateTripCount(0, 0, 1)).toEqual(1);
  });
  it("gives 3 trips for 0 corn 0 geese 2 foxes", () => {
    expect(calculateTripCount(0, 0, 2)).toEqual(3);
  });
  it("gives 19 trip for 0 corn 0 geese 10 foxes", () => {
    expect(calculateTripCount(0, 0, 10)).toEqual(19);
  });

  it("gives 3 trips for 1 corn 1 geese", () => {
    expect(calculateTripCount(1, 1)).toEqual(3);
  });

  it("gives 7 trips for 1 corn 2 geese", () => {
    expect(calculateTripCount(1, 2)).toEqual(7);
  });
  it("gives 7 trips for 2 corn 1 geese", () => {
    expect(calculateTripCount(2, 1)).toEqual(7);
  });
  it("gives 7 trips for 2 geese 1 fox", () => {
    expect(calculateTripCount(0, 2, 1)).toEqual(7);
  });
  it("gives 7 trips for 1 geese 2 fox", () => {
    expect(calculateTripCount(0, 1, 2)).toEqual(7);
  });
  it("gives 7 trips for 1 corn, 1 geese, 1 fox", () => {
    expect(calculateTripCount(1, 1, 1)).toEqual(7);
  });
});
