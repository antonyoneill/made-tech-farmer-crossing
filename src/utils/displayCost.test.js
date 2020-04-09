import displayCost from './displayCost'

describe('displayCost', () => {
    it('Renders £0.00 when 0', () => {
        expect(displayCost(0)).toEqual("£0.00")
    })
    it('Renders £1.00 when 100', () => {
        expect(displayCost(100)).toEqual("£1.00")
    })
    it('Renders £1.25 when 125', () => {
        expect(displayCost(125)).toEqual("£1.25")
    })
})