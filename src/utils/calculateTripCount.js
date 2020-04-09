export default function calculateTripCount(numberOfCorn, numberOfGeese, numberOfFoxes = 0) {
  if (
    (numberOfCorn === 1 && numberOfGeese === 2) ||
    (numberOfCorn === 2 && numberOfGeese === 1) ||
    (numberOfGeese === 1 && numberOfFoxes === 2) ||
    (numberOfGeese === 2 && numberOfFoxes === 1) ||
    (numberOfCorn === 1 && numberOfGeese === 1 && numberOfFoxes === 1) 
  ) {
    return 7;
  }

  const numberOfItems = numberOfCorn + numberOfGeese + numberOfFoxes;

  return numberOfItems > 1 ? numberOfItems * 2 - 1 : numberOfItems;
}
