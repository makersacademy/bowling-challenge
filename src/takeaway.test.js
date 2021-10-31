const Takeaway = require('./takeaway')

describe('takeaway', () => {
  const takeaway = new Takeaway()

  describe('readMenu', () => {
    it('prints dishes with prices', () => {
      console.log = jest.fn()
      const dishesWithPrices = [
        ['spring roll: £0.99'],
        ['char sui bun: £3.99'],
        ['pork dumpling: £2.99'],
        ['peking duck: £7.99'],
        ['fu-king fried rice: £5.99']
      ]

      takeaway.readMenu()

      expect(console.log.mock.calls).toEqual(dishesWithPrices)
    })
  })

  describe('addDish', () => {
    const springRoll = { 'spring roll': 0.99 }

    it('adds a dish to the basket', () => {
      takeaway.addDish('spring roll')

      expect(takeaway.basket[takeaway.basket.length - 1]).toEqual(springRoll)
    })

    it('prints error message if item is not on menu', () => {
      console.log = jest.fn()
      takeaway.addDish('bacon')

      expect(console.log).toHaveBeenCalledWith('item not on menu')
    })
  })
})
