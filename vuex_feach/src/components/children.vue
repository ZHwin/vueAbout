<template>
    <el-dialog  title="图片" :visible.sync="$store.state.ChildrenStore.show" width="30%">
<lottie :options="options2" :height="200" :width="200" v-on:animCreated="handleAnimation2" />
  <el-switch
  @change='swtchchange'
  v-model="switch1"
 active-color="#13ce66"
    inactive-color="#ff4949">
</el-switch>
    </el-dialog>
    
</template>

<script>
import * as animationData2 from '../assets/waimai.json';
export default {
  name: 'ChildrenComp',
  data() {
    return {
       switch1:false,
      options2: {
        animationData: animationData2
      },
      
    };
  },
  methods: {
    handleAnimation2: function(anim) {
      this.anim = anim;
      console.log(anim); //这里可以看到 lottie 对象的全部属性
    },
    swtchchange(){
      this.$store.state.swticvible=this.switch1
    }
  },
  mounted() {}
};
</script>
<style scoped>
</style>
