export class FilterButtons {
  constructor (node) {
    this.node = node
    this.setControls()
  }

  setControls () {
    const Terror = '<button class="buttons-container__button" id="Terror"> Terror </button>'
    const Romance = '<button class="buttons-container__button" id="Romance"> Romance </button>'
    const Action = '<button class="buttons-container__button" id="Action"> Action </button>'
    const Comedy = '<button class="buttons-container__button" id="Comedy"> Comedy </button>'
    const Reset = '<button class="buttons-container__button" id="Reset"> Reset </button>'
    this.node.innerHTML = Comedy.concat(Terror).concat(Romance).concat(Action).concat(Reset)
  }
}

export default FilterButtons
