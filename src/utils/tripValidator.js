export default function tripValidator(numberOfCorn, numberOfGeese) {
    
  if (numberOfCorn <= 2 && numberOfGeese <= 1) {
    return true;
  }

  if (numberOfCorn <= 1 && numberOfGeese <= 2) {
    return true;
  }

  if (numberOfCorn == 0 || numberOfGeese == 0) {
    return true;
  }

  return false;
}
