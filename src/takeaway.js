class Takeaway {
  constructor() {
    this.basket = []
    this.menu = {
      'spring roll': 0.99,
      'char sui bun': 3.99,
      'pork dumpling': 2.99,
      'peking duck': 7.99,
      'fu-king fried rice': 5.99
    }
  }

  readMenu() {
    for (let [key, value] of Object.entries(this.menu)) {
      console.log(`${key}: £${value}`)
    }
  }

  addDish(dish) {
    if (Object.keys(this.menu).includes(dish)) {
      this.basket.push(this._filterMenuBydish(dish))
    }
    else {
      console.log('item not on menu')
    }
  }
  _filterMenuBydish(dish) {
    return Object.fromEntries(
      Object.entries(this.menu).filter(([key, value]) => key === dish)
    )
  }
}
module.exports = Takeaway;
