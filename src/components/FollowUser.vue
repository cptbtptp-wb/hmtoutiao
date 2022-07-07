<template>
  <!-- 原版写法 -->
  <!-- <van-button
    class="follow-btn"
    type="info"
    color="#3296fa"
    round
    size="small"
    :icon="is_followed ? '' : 'plus'"
    :plain="is_followed"
    >{{ is_followed ? "已关注" : "关注" }}</van-button
  > -->
  <!--  @click="$emit('input', !value)" -->
  <!-- 建议写法 -->
  <van-button
    :disabled="isAjax"
    :loading="isAjax"
    class="follow-btn"
    type="info"
    color="#3296fa"
    round
    size="small"
    :icon="value ? '' : 'plus'"
    :plain="value"
    @click="onClick"
    >{{ value ? "已关注" : "关注" }}</van-button
  >
</template>

<script>
import { addUser, delUser } from '@/api/article'
export default {
  // 此组件全局注册
  name: 'FollowUser',
  props: {
    // is_followed: {
    //   type: Boolean,
    //   required: true
    // }
    value: {
      type: Boolean,
      required: true
    },
    target: {
      type: [Number, String],
      required: true
    }
  },
  created () { },
  data () {
    return {
      isAjax: false
    }
  },
  methods: {
    async onClick () {
      this.isAjax = true
      // 如果当前已关注，调用取消关注接口
      if (this.value) {
        try {
          await delUser(this.target)
          this.$emit('input', !this.value)
        } catch (err) {
          console.log(err)
        }
      } else {
        try {
          await addUser(this.target)
          this.$emit('input', !this.value)
        } catch (err) {
          console.log(err)
        }
      }
      this.isAjax = false
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
