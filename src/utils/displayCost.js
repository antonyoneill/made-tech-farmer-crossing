export default function displayCost(pence) {
    return `£${Number.parseFloat(pence/100).toFixed(2)}`
}