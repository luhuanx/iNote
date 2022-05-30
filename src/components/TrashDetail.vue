<template>
  <div id="trash-detail">
    <h1>{{msg}}:{{$route.params.noteId}}</h1>
  </div>
</template>

<script>
export default {
  name: 'TrashDetail',
  data () {
    return {
      msg: '回收站笔记本详情页'
    }
  }
}
</script>

<style scoped>
h1 {
  color: green;
}
</style>
