import calculateCost from './calculateCost';

describe('calculateCost', () => {
    it('outputs 0 for 0 corn', () => {
        expect(calculateCost(0)).toEqual(0)
    })
    it('outputs 25 for 1 corn', () => {
        expect(calculateCost(1)).toEqual(25)
    })
    it('outputs 75 for 2 corn', () => {
        expect(calculateCost(2)).toEqual(75)
    })
    it('outputs 475 for 10 corn', () => {
        expect(calculateCost(10)).toEqual(475)
    })
})