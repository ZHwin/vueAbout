import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class extends Vue {
  @Prop() parentText:any;
  msg: string = "55";
  mounted() {
    setTimeout(() => {
      this.msg = "99";
    }, 3000);
  }
  submit() {
    this.msg = "66";
  }
}
