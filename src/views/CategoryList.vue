<template>
  <div>
    <van-tabs v-model="tabActive">
      <van-tab v-for="(item, index) in cList" :key="index" :title="item.title"
        >{{ item.title }}
        <van-grid :border="false" :column-num="2">
          <van-grid-item v-for="(item, index) in subProdList" :key="index" icon="photo-o" text="文字">

          </van-grid-item>
        </van-grid>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// import axios from "axios"

export default {
  props: ["id"],
  data() {
    return {
      tabActive: 2,
      cList: [],
    };
  },
  created() {
    //   console.log(this.id);
    // axios.get(..tthis.id..)
    // this.clist = xxxxx axios响应
    this.cList = [
      { title: "员工精选" },
      { title: "人气好物" },
      { title: "服饰特卖" },
      { title: "暖冬美食" },
      { title: "暖冬电器" },
      { title: "回购好物" },
      { title: "秋冬床品" },
      { title: "99专区" },
    ];
    this.getSubListById(0, 1)
  },
  // watch: {
  //   tabActive: async function(index) {
  //     console.log(index)
  //     let id = this.cList[index].id
  //     let page = 1
  //     let size = 20 
  //     this.getSubListById(id, page)
  //   }
  // },
  methods: {
    getSubListById(id, page) {

    },
  }
};
</script>