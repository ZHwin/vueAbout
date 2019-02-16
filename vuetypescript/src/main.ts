import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;
//引用aggrid样式文件，暂时没有cdn
import 'ag-grid-enterprise';//引用企业版,功能更
 import "ag-grid-community/dist/styles/ag-grid.css";
 import "ag-grid-community/dist/styles/ag-theme-balham.css";
new Vue({
  render: h => h(App)
}).$mount("#app");
