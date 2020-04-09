export default function calculateTripCount(numberOfCorn, numberOfGeese) {
  if (
    (numberOfCorn === 1 && numberOfGeese === 2) ||
    (numberOfCorn === 2 && numberOfGeese === 1)
  ) {
    return 7;
  }

  const numberOfItems = numberOfCorn + numberOfGeese;

  return numberOfItems > 1 ? numberOfItems * 2 - 1 : numberOfItems;
}
