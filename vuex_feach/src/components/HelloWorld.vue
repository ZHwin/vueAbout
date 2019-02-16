<template>
 <div>

  <div style="float:left;">
    <div>
<lottie :options="options1" :height="200" :width="200" v-on:animCreated="handleAnimation1" />
    </div>
    <div v-if="$store.state.swticvible">
<lottie :options="options2" :height="200" :width="200" />
    </div>
 
   
  </div>
 


   
  


   <el-button @click="openPic">打开图片</el-button>
   <children-comp></children-comp>
 </div>
</template>

<script>
import * as animationData1 from '../assets/loadjing.json';
import * as animationData2 from '../assets/check.json';
import ChildrenComp from './children';
export default {
  name: 'HelloWorld',
  components: {
    'children-comp': ChildrenComp
  },
  data() {
    return {
      options1: {
        animationData: animationData1
      },
      options2: {
        animationData: animationData2
      }
    };
  },
  methods: {
    handleAnimation1: function(anim) {
      this.anim = anim;
      console.log(anim); //这里可以看到 lottie 对象的全部属性
    },
    openPic() {
      this.$store.dispatch('switch_dialog');
    }
  },
  mounted() {
    console.log(this.$store);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
