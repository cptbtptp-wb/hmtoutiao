<template>
  <div>
    <!-- 固定当前浏览页面 -->
    <keep-alive :include="['Home']">
      <router-view class="main" />
    </keep-alive>

    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">
        首页 <i class="toutiao toutiao-shouye" slot="icon"></i>
        <!-- 官方推荐写法 -->
        <!-- <template>
        <i class="toutiao toutiao-shouye"></i>
      </template> -->
      </van-tabbar-item>
      <van-tabbar-item replace to="/video" icon="search">
        视频<i class="toutiao toutiao-shipin" slot="icon"></i>
      </van-tabbar-item>
      <van-tabbar-item replace to="/question" icon="search">
        问答<i class="toutiao toutiao-wenda" slot="icon"></i>
      </van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="search">
        我的<i class="toutiao toutiao-wode" slot="icon"></i>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.toutiao {
  font-size: 40px;
}
.van-tabbar-item__text {
  font-size: 20px !important;
}
// .main{
//   padding-bottom: 100px;
// }
</style>
