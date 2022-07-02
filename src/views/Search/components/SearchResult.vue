<template>
  <div class="container">
    <!-- 刷新2.0 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <!-- 分页1.0 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ArticleItem
          v-for="(item, index) in list"
          :key="index"
          :article="item"
        ></ArticleItem>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getSearchResult } from '@/api/search'
import ArticleItem from '@/components/ArticleItem'
export default {
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  created () {
    this.getSearchResult()
  },
  data () {
    return {
      page: 1,
      per_page: 20,
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  methods: {
    // 请求数据
    async getSearchResult () {
      try {
        const res = await getSearchResult({ page: this.page, per_page: this.per_page, q: this.searchText })
        // console.log(res)
        // this.list = res.data.data.results
        // 1.2 判断数据加载完后，显示“没有更多数据”
        if (res.data.data.results.length === 0) {
          this.finished = true
          return
        }
        // 1.3 新旧数据合并在一起，且不要去掉取数据
        this.list.push(...res.data.data.results)
        this.loading = false
        // 2.2获取新数据后，加载更多消失
        this.refreshing = false
      } catch (err) {
        console.log(err)
      }
    },
    // 分页效果（1.1）
    onLoad () {
      this.page++ // 页数+1
      this.getSearchResult() // 请i求下一页数据
    },

    // 刷新页面2.1
    onRefresh () {
      // 重新获取数据
      this.list = []
      this.page = 1
      this.getSearchResult()
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    ArticleItem
  }
}
</script>

<style scoped lang='less'>
.container {
  overflow: auto;
  height: calc(100vh - 108px);
}
</style>
