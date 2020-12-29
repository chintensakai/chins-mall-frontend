<template>
  <div id="home">
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      input-align="center"
    />
    <van-swipe :autoplay="3000" :width="375" :height="200">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img class="swiper-img" v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="5">
      <van-grid-item
        v-for="(item, index) in channel"
        :key="index"
        :icon="item.icon"
        :text="item.text"
      />
    </van-grid>

    <!-- 新人专享 -->
    <van-cell-group>
      <van-cell title="新人专享" />
    </van-cell-group>
    <van-grid :column-num="2">
      <van-grid-item v-for="(item, index) in brandList" :key="index">
        <van-image :src="item.img_url" />
      </van-grid-item>
    </van-grid>
    <tab-bar></tab-bar>
    
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import TabBar from "@/components/TabBar";

export default {
  name: "Home",
  data() {
    return {
      value: "请输入搜索关键词",
      data: {}
    };
  },
  computed: {
    images() {
      if (this.data.banner) {
        return this.data.banner;
      } else {
        return [
          "https://yanxuan.nosdn.127.net/8a50bafb4bc92ddc9104bddd292a5caa.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
          "https://yanxuan.nosdn.127.net/3c548a330191dacb33f5a1a8b5e4e505.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
          "https://yanxuan.nosdn.127.net/8d4e680c3e3efed178aa74c57164d905.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        ];
      }
    },
    channel() {
      if (this.data.channel) {
        return this.data.channel;
      } else {
        return [
          {
            icon:
              "https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
            text: "新品首发",
          },
          {
            icon:
              "https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png",
            text: "居家生活",
          },
          {
            icon:
              "https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png",
            text: "服饰鞋包",
          },
          {
            icon:
              "https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png",
            text: "美食酒水",
          },
          {
            icon:
              "https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png",
            text: "数码家电",
          },
        ];
      }
    },
    brandList() {
      if (this.data.brandList) {
        return this.data.brandList;
      } else {
        return [
          {
            img_url:
              "//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png",
          },
        ];
      }
    },
  },
  components: {
    TabBar
  },
  async mounted() {
    await axios.get("").then((response) => {
      console.log(response.data);
      this.data = response.data;
    });
  },
};
</script>

<style scoped>
#home .swiper-img {
  width: 375px;
  height: 200px;
}
</style>
