export default function calculateCost(numberOfCorn) {

    let numberOfTrips ;

    if (numberOfCorn === 0) {
        numberOfTrips = 0;
    } else if (numberOfCorn === 1) {
        numberOfTrips = 1;
    } else if (numberOfCorn > 1) {
        numberOfTrips = (numberOfCorn * 2) - 1;
    }

    return numberOfTrips * 25
}