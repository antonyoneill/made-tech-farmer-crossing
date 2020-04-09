export default function tripValidator(
  numberOfCorn,
  numberOfGeese,
  numberOfFoxes
) {
  if (numberOfCorn > 0 && numberOfGeese > 0 && numberOfFoxes > 0) {
    return numberOfCorn === 1 && numberOfGeese === 1 && numberOfFoxes === 1;
  }

  return (
    canLeavePreyWithPredator(numberOfCorn, numberOfGeese) &&
    canLeavePreyWithPredator(numberOfGeese, numberOfFoxes)
  );
}

function canLeavePreyWithPredator(numberOfPrey, numberOfPredators) {
  if (numberOfPrey <= 2 && numberOfPredators <= 1) {
    return true;
  }

  if (numberOfPrey <= 1 && numberOfPredators <= 2) {
    return true;
  }

  if (numberOfPrey == 0 || numberOfPredators == 0) {
    return true;
  }

  return false;
}
