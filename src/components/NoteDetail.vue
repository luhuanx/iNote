<template>
  <div id="note"
       class="detail">
    <note-sidebar></note-sidebar>
    <div id="note-detail">
      <h1>{{msg}} : {{ $route.params.noteId }}</h1>
    </div>
  </div>
</template>

<script>
import Auth from '@/apis/auth'
import NoteSidebar from '@/components/NoteSidebar'

export default {
  components: {
    NoteSidebar
  },

  data () {
    return {
      msg: '笔记详情列表'
    }
  },

  created () {
    Auth.getInfo()
      .then(res => {
        if (!res.isLogin) {
          this.$router.push({ path: '/login' })
        }
      })
  }
}
</script>

<style scoped>
#note {
  display: flex;
  align-items: stretch;
  background-color: #fff;
  flex: 1;
}
</style>
