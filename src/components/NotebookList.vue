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
                       to="/note/1"
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
import Notebooks from '@/apis/notebooks'
import { friendlyDate } from '@/helpers/util'

export default {
  name: 'NotebookList',
  data () {
    return {
      notebooks: []
    }
  },
  created () {
    Auth.getInfo()
      .then(res => {
        if (!res.isLogin) {
          this.$router.push({ path: '/login' })
        }
      })

    Notebooks.getAll()
      .then(res => {
        this.notebooks = res.data
      })
  },

  methods: {
    onCreate () {
      let title = window.prompt('创建笔记本')
      if (title.trim() === '') {
        alert('笔记本名不能为空')
        return
      }
      Notebooks.addNotebook({ title })
        .then(res => {
          res.data.friendlyCreatedAt = friendlyDate(res.data.createdAt)
          this.notebooks.unshift(res.data)
          alert(res.msg)
        })
    },
    onEdit (notebook) {
      let title = window.prompt('修改标题', notebook.title)
      Notebooks.updateNotebook(notebook.id, { title })
        .then(res => {
          alert(res.msg)
          notebook.title = title
        })
    },
    onDelete (notebook) {
      let isConfirm = window.confirm('你确定要删除吗')
      if (isConfirm) {
        Notebooks.deleteNotebook(notebook.id)
          .then(res => {
            this.notebooks.splice(this.notebooks.indexOf(notebook), 1)
            alert(res.msg)
          })
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../assets/css/notebook-list.less);
</style>
