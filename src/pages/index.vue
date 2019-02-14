<template>
  <div class="main">
    <button @click="requestWay(0)">GET</button>
    <button @click="requestWay(1)">POST</button>
    <button @click="requestWay(2)">PUT</button>
    <button @click="requestWay(3)">DELETE</button>
  </div>
</template>

<script>
  import APIjs from "@/script/axios";
  export default {
    name: "plugin_axois",
    data() {
      return {};
    },
    created() {},
    methods: {
      requestWay(val) {
        switch (val) {
          case 0: {
            //默认get,查询已有的数据
            APIjs.rpc("/demo/demo0", {}, "get")
              .then(res => {
                console.log(res);
              })
              .catch(err => {
                console.log(err);
              });
            break;
          }
          case 1: {
            //post，修改数据
            APIjs.rpc("/demo/demo1", {}, "post")
              .then(res => {
                console.log(res);
              })
              .catch(err => {
                console.log(err);
              });
            break;
          }
          case 2: {
            //put，新建数据
            APIjs.rpc("/demo/demo2", {}, "put")
              .then(res => {
                console.log(res);
              })
              .catch(err => {
                console.log(err);
              });
            break;
          }
          case 3: {
            //delete，删除数据
            APIjs.rpc("/demo/demo3", {}, "delete")
              .then(res => {
                console.log(res);
              })
              .catch(err => {
                console.log(err);
              });
            break;
          }
        }
      }
    }
  };
</script>

<style lang="scss">
  .main {
  }
</style>
