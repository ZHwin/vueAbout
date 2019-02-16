import Vue from 'vue';
import Vuex from 'vuex';
import ChildrenStore from './children_store'; //引入某个store对象
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ChildrenStore: ChildrenStore
  },
  state: {
    swticvible:false
  }
  //   mutations: {
  //     //mutations 中的方法是不分组件的, 假如你在 dialog_stroe.js 文件中的定义了
  //     // switch_dialog 方法, 在其他文件中的一个 switch_dialog 方法, 那么
  //     // $store.commit('switch_dialog') 会执行所有的 switch_dialog 方法。
  //     //  mutations里的操作必须是同步的。
  //     switch_dialog() {
  //       console.log('打开了！');
  //     }
  //   }
});

export default store;
