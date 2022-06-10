<template>
  <div class="note-sidebar">
    <span class="btn add-note"
          @click="onAddNote">添加笔记</span>
    <el-dropdown class="notebook-title"
                 @command="handleCommand"
                 placement="bottom">
      <span class="el-drop-link">
        {{curBook.title}} <i class="iconfont icon-down"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="notebook in notebooks"
                          :key="notebook.id"
                          :command="notebook.id">{{notebook.title}}</el-dropdown-item>
        <el-dropdown-item command="trash">回收站</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="menu">
      <div>更新时间</div>
      <div>标题</div>
    </div>
    <ul class="notes">
      <li v-for="note in notes"
          :key="note.id">
        <router-link :to="`/note?noteId=${note.id}&notebookId=${curBook.id}`">
          <span class="date">{{note.updatedAtFriendly}}</span>
          <span class="title">{{note.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'NoteSidebar',
  data () {
    return {
    }
  },

  props: ['curNote'],

  created () {
    this.getNotebooks()
      .then(() => {
        this.$store.commit('setCurBook', { curBookId: this.$route.query.notebookId })
        this.getNotes({ notebookId: this.curBook.id })
      })
  },

  computed: {
    ...mapGetters([
      'notebooks',
      'notes',
      'curBook'
    ])
  },

  methods: {
    ...mapActions([
      'getNotebooks',
      'getNotes',
      'addNote'
    ]),

    handleCommand (notebookId) {
      if (notebookId === 'trash') {
        return this.$router.push({ path: '/trash' })
      }
      this.$store.commit('setCurBook', { curBookId: notebookId })
      this.getNotes({ notebookId })
    },

    onAddNote () {
      this.addNote({ notebookId: this.curBook.id })
    }
  }
}

</script>

<style lang="less" >
@import url(../assets/css/note-sidebar.less);
</style>
