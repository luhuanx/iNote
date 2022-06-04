<template>
  <div id="note-detail">
    <h1>{{msg}}:{{$route.params.noteId}}</h1>
  </div>
</template>

<script>
import Auth from '@/apis/auth'

export default {
  name: 'NoteDetail',
  data () {
    return {
      msg: '笔记本详情页'
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
h1 {
  color: blue;
}
</style>
