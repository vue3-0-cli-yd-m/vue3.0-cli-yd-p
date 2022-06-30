<template>
  <div class="main">
    <ElConfigProvider :locale="zhCn">
      <router-view></router-view>
    </ElConfigProvider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  name: 'App',
  components: {
    [ElConfigProvider.name]: ElConfigProvider,
  },
  setup() {
    const methods = {}
    return {
      zhCn,
      ...methods,
    }
  },
  mounted() {},
})
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: #f3f4f6;
}
</style>
