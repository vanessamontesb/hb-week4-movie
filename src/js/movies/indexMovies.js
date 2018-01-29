import Grid from './grid.js'
import data from './dataMovies.js'
import FilterButtons from './filterButtons.js'

/* eslint-disable */
new FilterButtons(document.querySelector('.buttons-container'), data)
new Grid(document.querySelector('.buttons-container'), document.querySelector('.cards-container'), data)

/*
filter (data) {
    const filterf = data.map((date) => {
      return new Callback(date)
    })

    filterf.forEach((filterD) => {
      this.node.appendChild(filterD.node)
    })
*/
/*export class Callback {
  constructor (node, date) {
    this.node = node
    this.filterD(date)
  }
  filterD (date) {
    const buttons = this.node.querySelectorAll('.controls-container__button')
    for (const button of buttons) {
      button.addEventListener('click', this.moviesSelect.bind(this, date))
    }
  }
}
export default Callback*/
