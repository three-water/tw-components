import TwTable from './index.vue';
console.log(TwTable)

TwTable.install = function(Vue) {
  Vue.component(TwTable.name, TwTable);
};

export default TwTable;