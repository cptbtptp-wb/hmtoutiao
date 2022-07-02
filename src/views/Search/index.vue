<template>
  <div>
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        background="#3296fa"
        @cancel="$router.go(-1)"
        @search="onSearch"
        autofocus
        @focus="isSearch = false"
      />
    </form>
    <SearchHistory v-if="searchText === ''" @search="onSearch"></SearchHistory>
    <template v-else>
      <SearchResult v-if="isSearch" :searchText="searchText"></SearchResult>
      <SearchSuggest
        v-else
        :searchText="searchText"
        @search="onSearch"
      ></SearchSuggest>
    </template>
  </div>
</template>

<script>

import SearchHistory from './components/SearchHistory.vue'
import SearchSuggest from './components/SearchSuggest.vue'
import SearchResult from './components/SearchResult.vue'

export default {

  created () { },
  data () {
    return {
      searchText: '',
      isSearch: false
    }
  },
  methods: {
    // 需求：在搜索框按下回车与点击搜索建议效果一样，都弹出搜索结果的页面
    onSearch (str) {
      this.searcgText = str
      this.isSearch = true
      this.$store.commit('setSearchHistoryList', str)
    }
  },
  computed: {},
  watch: {
  },
  filters: {},
  components: {
    SearchHistory,
    SearchResult,
    SearchSuggest
  }
}
</script>

<style scoped lang='less'>
</style>
