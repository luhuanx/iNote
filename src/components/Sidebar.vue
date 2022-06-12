<template>
  <div id="sidebar">
    <avatar />
    <div class="icons">
      <router-link to="/note"
                   title="笔记"><i class="iconfont icon-note"></i></router-link>
      <router-link to="/notebooks"
                   title="笔记本"><i class="iconfont icon-notebook"></i></router-link>
      <router-link to="/trash"
                   title="笔记"><i class="iconfont icon-trash"></i></router-link>
    </div>
    <div class="logout">
      <i class="iconfont icon-logout"
         @click="onLogout"></i>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import avatar from './Avatar.vue'

export default {
  components: { avatar },

  methods: {
    ...mapActions(['logout']),

    onLogout () {
      this.logout({ path: '/login' })
    }
  }
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
