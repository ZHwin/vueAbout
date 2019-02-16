import { Component, Prop, Vue } from "vue-property-decorator";
import button from "./button/button";
// 引入组件
import {AgGridVue} from 'ag-grid-vue';
@Component({
  components: {
    "ll-button": button,
    "ag-grid-vue":AgGridVue
  }
})
export default class HelloWorld extends Vue {
  msg: string = "66";
  parentText: string = "父组件";
  columnDefs: any = null;
  rowData: any = null;
  click(e: any) {
    console.log(e);
    this.msg = "6";
  }
  beforeMount() {
    console.log(1)
    console.log(1)  
    console.log(1) 
     console.log(1) 
      console.log(1) 
       console.log(1) 
        console.log(1)  
        console.log(1)
    this.columnDefs = [
      { headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" }
    ];

    this.rowData = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 }
    ];
  }
}
