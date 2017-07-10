import TwTable from './tw-table/index.js'

const components = [
  TwTable
]

const install = function(Vue, opts = {}) {
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  TwTable
}

// module.exports = {
//   aaaa: 1111
// }
