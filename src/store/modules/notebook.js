import Notebooks from '@/apis/notebooks'

const state = {
  notebooks: []
}

const getters = {
  notebooks: state => state.notebooks
}

const mutations = {
  setNotebooks (state, payload) {
    state.notebooks = payload.notebooks
  },

  addNotebook (state, payload) {
    state.notebooks.unshift(payload.notebook)
  },

  updateNotebook (state, payload) {
    let notebook = state.notebooks.find(notebook => notebook.id === payload.notebookId) || {}
    notebook.title = payload.title
  },

  deleteNotebook (state, payload) {
    state.notebooks = state.notebooks.filter(notebook => notebook.id !== payload.notebookId)
  }
}

const actions = {
  getNotebooks ({ commit }) {
    Notebooks.getAll()
      .then(res => {
        commit('setNotebooks', {notebooks: res.data})
      })
  },

  addNotebook ({commit}, payload) {
    Notebooks.addNotebook({title: payload.title})
      .then(res => {
        commit('addNotebook', {notebook: res.data})
      })
  },

  updateNotebook ({commit}, payload) {
    Notebooks.updateNotebook(payload.notebook, {title: payload.title})
      .then(res => {
        commit('updateNotebook', {notebookId: payload.notebookId, title: payload.title})
      })
  },

  deleteNotebook ({commit}, payload) {
    Notebooks.deleteNotebook(payload.notebookId)
      .then(res => {
        commit('deleteNotebook', {notebookId: payload.notebookId})
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
