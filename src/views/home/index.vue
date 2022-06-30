<template>
  <div class="warp">首页嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻！！！！ 把登录页不要的删除重新自己写就可以了</div>
</template>

<script  lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'HomeIndex',
  props: {},
  components: {},
  setup() {
    const state = reactive({})

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style lang="scss" scoped>
.warp {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
}
</style>
