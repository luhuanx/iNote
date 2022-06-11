<template>
  <span :title="username">{{slug}}</span>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  created () {
    this.setUser()
  },

  methods: {
    ...mapActions({
      setUser: 'checkLogin'
    })
  },

  computed: {
    ...mapGetters([
      'username',
      'slug'
    ]),

    slug () {
      return this.username.charAt(0)
    }
  }
}
</script>

<style scoped>
span {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 32px;
  border-radius: 50%;
  background: #f2b81c;
  color: #fff;
  text-shadow: 1px 0 1px #795c19;
  font-weight: 18px;
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 15px;
}
</style>
