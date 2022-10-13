import singleChoice from './singleChoice/index.js'
import multipleChoice from './multipleChoice/index.js'
import tfQuestion from './tfQuestion/index.js'
import fillInBlank from './fillInBlank/index.js'
import subjectiveQuestion from './subjectiveQuestion/index.js'

const components = [
  singleChoice,
  multipleChoice,
  tfQuestion,
  fillInBlank,
  subjectiveQuestion
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  singleChoice,
  multipleChoice,
  tfQuestion,
  fillInBlank,
  subjectiveQuestion,
  install
}
export {
  singleChoice,
  multipleChoice,
  tfQuestion, 
  fillInBlank, 
  subjectiveQuestion,
  install
}