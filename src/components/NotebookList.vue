<template>
  <div id="notebook-list">
    <h1>{{msg}}</h1>
    <ul>
      <li>
        <router-link to="/note/1" />
      </li>
      <li>
        <router-link to="/note/2" />
      </li>
    </ul>
  </div>
</template>

<script>
import Auth from '@/apis/auth'

export default {
  name: 'NotebookList',
  data () {
    return {
      msg: '笔记本列表'
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
  color: red;
}
</style>
