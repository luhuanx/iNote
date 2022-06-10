<template>
  <div class="detail"
       id="notebook-list">
    <header>
      <a href="#"
         class="btn"
         @click.prevent="onCreate"><i class="iconfont icon-plus"></i>新建笔记本</a>
    </header>
    <main>
      <div class="layout">
        <h3>笔记本列表({{notebooks.length}})</h3>
        <div class="book-list">
          <router-link v-for="notebook in notebooks"
                       :key="notebook.id"
                       :to="`/note?notebookId=${notebook.id}`"
                       class="notebook">
            <div>
              <span class="iconfont icon-notebook"></span>{{notebook.title}}
              <span>{{notebook.noteCounts}}</span>
              <span class="action"
                    @click.stop.prevent="onEdit(notebook)">编辑</span>
              <span class="action"
                    @click.stop.prevent="onDelete(notebook)">删除</span>
              <span class="date">{{notebook.friendlyCreatedAt}}</span>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Auth from '@/apis/auth'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'NotebookList',
  data () {
    return {}
  },
  created () {
    Auth.getInfo()
      .then(res => {
        if (!res.isLogin) {
          this.$router.push({ path: '/login' })
        }
      })

    this.$store.dispatch('getNotebooks')
  },

  computed: {
    ...mapGetters(['notebooks'])
  },

  methods: {
    ...mapActions([
      'getNotebooks',
      'addNotebook',
      'updateNotebook',
      'deleteNotebook'
    ]),

    onCreate () {
      this.$prompt('请输入笔记本标题', '创建笔记本', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^.{1,30}$/,
        inputErrorMessage: '标题不能为空，且不超过30个字符'
      }).then(({ value }) => {
        this.addNotebook({ title: value })
      })
    },
    onEdit (notebook) {
      this.$prompt('请输入笔记本标题', '修改笔记本', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^.{1,30}$/,
        inputValue: notebook.title,
        inputErrorMessage: '标题不能为空，且不超过30个字符'
      }).then(({ value }) => {
        this.updateNotebook({ notebookId: notebook.id, title: value })
      })
    },
    onDelete (notebook) {
      this.$confirm('确认删除笔记本吗?', '删除笔记本', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteNotebook({ notebookId: notebook.id })
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../assets/css/notebook-list.less);
</style>
