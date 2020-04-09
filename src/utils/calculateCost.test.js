import calculateCost from './calculateCost';

describe('calculateCost', () => {
    it('outputs 0 for 0 trips', () => {
        expect(calculateCost(0)).toEqual(0)
    })
    it('outputs 25 for 1 trip', () => {
        expect(calculateCost(1)).toEqual(25)
    })
    it('outputs 50 for 2 trips', () => {
        expect(calculateCost(2)).toEqual(50)
    })
    it('outputs 475 for 19 trips', () => {
        expect(calculateCost(19)).toEqual(475)
    })
})