<template>
  <div id="app">
        <hello-world></hello-world>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld'; 
@Component({
  components: {
    "hello-world":HelloWorld
  },
})
export default class  extends Vue {

}
</script>

<style lang="less">
</style>
