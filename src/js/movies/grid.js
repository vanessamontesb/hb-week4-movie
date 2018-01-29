export class Grid {
  constructor (node, nodeMovie, data) {
    this.node = node
    this.nodeMovie = nodeMovie
    this.gridCards(data)
    this.filterCallback(data)
    this.eventRotate(data)
  }
  gridCards (data) {
    const imagesHTML = data.map(Grid.movies).join('')
    this.nodeMovie.innerHTML = imagesHTML
    this.eventRotate(data)
  }
  static movies (movie) {
    return (
      `<div class="card">
      <div class="card__oneSide">
          <img class="card__oneSide__img" src="${movie.image}">
      </div>
      <div class="card__twoSide">
          <h3 class="card__twoSide__title">${movie.title}</h3>
          <h5 class="card__twoSide__review">${movie.review}</h5>
      </div>
      </div>`)
  }
  filterCallback (data) {
    const buttons = this.node.querySelectorAll('.buttons-container__button')
    for (const button of buttons) {
      button.addEventListener('click', this.moviesSelect.bind(this, data))
    }
  }
  moviesSelect (data, event) {
    if (event.currentTarget.id === 'Reset') {
      this.gridCards(data)
    } else {
      const moviesFilter = data.filter(this.moviesChoose.bind(this, event.currentTarget.id))
      this.gridCards(moviesFilter)
    }
  }
  moviesChoose (divId, movie) {
    if (movie.category === divId) {
      return 1
    }
  }
  eventRotate (data) {
    const moviesContainer = this.nodeMovie.querySelectorAll('.card')
    for (const movieContainer of moviesContainer) {
      movieContainer.addEventListener('click', function () {
        for (const movieContainer of moviesContainer) {
          movieContainer.classList.remove('card--information')
        }
        movieContainer.classList.toggle('card--information')
      })
    }
  }
}
export default Grid
