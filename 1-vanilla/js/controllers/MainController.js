import FormView from "../views/FormView"

const tag = `[mainController]`

export default {
  init() {
    console.log(tag, 'init()')
    FormView.setup(document.querySelector('form'))
  }
}