import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    searchHistoryList: []
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setSearchHistoryList (state, payload) {
      let arr = state.searchHistoryList // 数组去重
      arr.unshift(payload)
      arr = [...new Set(arr)]// 数组去重,将旧的去掉，新的放在最前面
      state.searchHistoryList = arr
    },
    // 根据点击对应索引删除
    delHistory (state, index) {
      state.searchHistoryList.splice(index, 1)
    },
    // shanchu syou
    delAllHistory (state) {
      state.searchHistoryList = []
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    vuexLocal.plugin
  ]
})
