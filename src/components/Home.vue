<template>
  <div>
    <!-- 子页面组件显示处 -->
    <nav-menu></nav-menu>
    <router-view />
  </div>
</template>

<script>
import NavMenu from './common/NavMenu.vue'
export default {
  name: 'Home',
  components: { NavMenu }
}
</script>

<style scoped></style>
