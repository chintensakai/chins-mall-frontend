import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import { Search, Swipe, SwipeItem, Lazyload, Grid, GridItem, Cell, 
  CellGroup, Image as VanImage, Tabbar, TabbarItem, TreeSelect, Tab, Tabs } from 'vant';

Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(TreeSelect);
Vue.use(Tab);
Vue.use(Tabs);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
