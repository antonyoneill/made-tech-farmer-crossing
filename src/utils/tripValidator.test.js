import tripValidator from "./tripValidator";

describe("tripValidator", () => {
  describe("singular items", () => {
    const testData = [
      {
        corn: 1,
        goose: 0,
        fox: 0,
        expect: true,
      },
      {
        corn: 0,
        goose: 1,
        fox: 0,
        expect: true,
      },
      {
        corn: 0,
        goose: 0,
        fox: 1,
        expect: true,
      },
    ];
    executeTest(testData);
  });

  describe("with corn and foxes", () => {
    const testData = [
      {
        corn: 1,
        goose: 0,
        fox: 1,
        expect: true,
      },
      {
        corn: 10,
        goose: 0,
        fox: 1,
        expect: true,
      },
      {
        corn: 1,
        goose: 0,
        fox: 10,
        expect: true,
      },
      {
        corn: 10,
        goose: 0,
        fox: 10,
        expect: true,
      },
    ];
    executeTest(testData);
  });
  describe("with corn and geese", () => {
    const testData = [
      {
        corn: 1,
        goose: 1,
        fox: 0,
        expect: true,
      },
      {
        corn: 1,
        goose: 2,
        fox: 0,
        expect: true,
      },
      {
        corn: 2,
        goose: 1,
        fox: 0,
        expect: true,
      },
      {
        corn: 10,
        goose: 1,
        fox: 0,
        expect: false,
      },
      {
        corn: 1,
        goose: 10,
        fox: 0,
        expect: false,
      },
    ];
    executeTest(testData);
  });
  describe("with geese and foxes", () => {
    const testData = [
      {
        corn: 0,
        goose: 1,
        fox: 1,
        expect: true,
      },
      {
        corn: 0,
        goose: 1,
        fox: 2,
        expect: true,
      },
      {
        corn: 0,
        goose: 2,
        fox: 1,
        expect: true,
      },
      {
        corn: 0,
        goose: 1,
        fox: 10,
        expect: false,
      },
      {
        corn: 0,
        goose: 10,
        fox: 1,
        expect: false,
      },
    ];
    executeTest(testData);
  });
  describe("with geese, foxes, and corn", () => {
    const testData = [
      {
        corn: 1,
        goose: 1,
        fox: 1,
        expect: true,
      },
      { corn: 2, goose: 1, fox: 1, expect: false },
      { corn: 1, goose: 2, fox: 1, expect: false },
      { corn: 1, goose: 1, fox: 2, expect: false },
      {
        corn: 10,
        goose: 1,
        fox: 1,
        expect: false,
      },
      {
        corn: 1,
        goose: 10,
        fox: 1,
        expect: false,
      },
      {
        corn: 1,
        goose: 1,
        fox: 10,
        expect: false,
      },
    ];
    executeTest(testData);
  });
  function executeTest(testData) {
    testData.forEach((data) => {
      it(`with ${data.corn} corn, ${data.goose} goose, ${data.fox} fox is ${
        data.expect ? "" : "not"
      } valid`, () => {
        expect(tripValidator(data.corn, data.goose, data.fox)).toEqual(
          data.expect
        );
      });
    });
  }
});
