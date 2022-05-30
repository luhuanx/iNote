<template>
  <div id="sidebar">
    <avatar />
    <div class="icons">
      <router-link to="/note/1"
                   title="笔记"><i class="iconfont icon-note"></i></router-link>
      <router-link to="/notebooks"
                   title="笔记本"><i class="iconfont icon-notebook"></i></router-link>
      <router-link to="/trash/2"
                   title="笔记"><i class="iconfont icon-trash"></i></router-link>
    </div>
    <div class="logout"
         @click="onLogout">
      <i class="iconfont icon-logout"></i>
    </div>
  </div>
</template>

<script>
import avatar from './Avatar.vue'
export default {
  components: { avatar }

}
</script>

<style lang="less" scoped>
#sidebar {
  position: relative;
  width: 56px;
  text-align: center;
  background-color: #2c333c;

  .icons {
    margin-top: 15px;

    a {
      padding: 15px 0;
      display: block;
    }

    .router-link-active {
      background-color: #5e6266;
    }
  }

  .logout {
    position: absolute;
    bottom: 30px;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
  .iconfont {
    color: #fff;
  }
}
</style>
