<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      input-align="center"
    />
    <van-tree-select
      height="calc(100vh - 104px)"
      :items="items"
      :main-active-index.sync="active"
      @click-nav="changeCategory"
    >
      <template #content>
        <img width="100%" :src="bannerImg" >
        <van-grid :column-num="3">
          <van-grid-item v-for="(item, index) in subCategoryList" :key="index" :icon="item.icon" :text="item.text" 
          :to="'/categoryList/' + item.id" />
        </van-grid>
      </template>
    </van-tree-select>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar";
// import axios from "axios"
// import api from "...api.js"
export default {
  components: {
    TabBar,
  },
  data() {
    return {
      value: "请输入搜索关键词",
      active: 0,
      data: {},
      bannerImg: "https://yanxuan.nosdn.127.net/da11c0ad681fa61e0a75103ecb08e32c.jpg?type=webp&imageView&quality=75&thumbnail=0x196"
      //   items: [{ text: "分组 1" }, { text: "分组 2" }],
    };
  },
  async created() {
    //  let res = axios.get("api.GoodsCategory")
    // let data = res.data.data
    // this.data = data
    // this.bannerImg = this.data....
  },
  computed: {
    items() {
      return [
        { text: "推荐专区" },
        { text: "新品专区" },
        { text: "居家生活" },
        { text: "服饰鞋包" },
        { text: "美食酒水" },
        { text: "个护清洁" },
        { text: "母婴亲子" },
        { text: "运动旅行" },
        { text: "数码家电" },
        { text: "严选全球" },
      ];
    },
    subCategoryList() {
    //   return this.items[this.active].subCategoryList;
    // 也可以根据父类id去查询子类数据
    return [
        {id: 1001, icon: "https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView", text: "员工精选"},
        {id: 1002, icon: "https://yanxuan.nosdn.127.net/036640056a47089a8a437cb14dc127e8.png?quality=75&type=webp&imageView", text: "人气好物"},
        {id: 1003, icon: "https://yanxuan.nosdn.127.net/6d31d3860181bc7b85870625961abee7.png?quality=75&type=webp&imageView", text: "服饰特卖"},
        {id: 1004, icon: "https://yanxuan.nosdn.127.net/e68c4e30745b5a9cf15be6109a4b8ffc.png?quality=75&type=webp&imageView", text: "暖冬美食"},
        {id: 1005, icon: "https://yanxuan.nosdn.127.net/399ebf7e89ae29f91066a94bc2ea8dd2.png?quality=75&type=webp&imageView", text: "暖冬电器"},
        {id: 1006, icon: "https://yanxuan.nosdn.127.net/08df36faf430bd9e81aef4e1685660dd.png?quality=75&type=webp&imageView", text: "回购好物"},
        {id: 1007, icon: "https://yanxuan.nosdn.127.net/d4c7c457ba0d9836d3b94dab6950999a.png?quality=75&type=webp&imageView", text: "秋冬床品"},
        {id: 1008, icon: "https://yanxuan.nosdn.127.net/1daf43d9a69e50f32cf858b36980b38b.png?quality=75&type=webp&imageView", text: "99专区"}
    ]
    },
  },
  methods: {
    changeCategory(index) {
      console.log(index);
      this.active = index;
    },
  },
};
</script>