<template>
  <div class="hello">
    <ll-button :parent-text="parentText"></ll-button>
    <el-button @click="click">{{msg}}</el-button>
    <ag-grid-vue style="width: 500px; height: 500px;"
                 class="ag-theme-balham"
                 :columnDefs="columnDefs"
                 :rowData="rowData">
    </ag-grid-vue>
    <div id="x-spreadsheet-demo"></div>
  </div>
</template>

<script src="./HelloWorld.ts"></script>
<style  lang="less" src="./HelloWorld.less"></style>

