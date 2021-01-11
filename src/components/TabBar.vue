<template>
  <div>
    <van-tabbar v-model="active" @change="onChange" :route="true">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/about">专题</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onChange(index) {
        this.active = index
    }
  },
  computed: {
  },
  // watch: {
  //   $route: function() {
  //     switch(this.$route.path) {
  //       case "/category": 
  //         this.active = 2;
  //         break;
  //       case "" :

  //     }
  //   }
  // }
  
};
</script>