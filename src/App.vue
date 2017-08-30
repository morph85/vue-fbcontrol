<template>
  <div id="app">
    hello
  </div>
</template>

<script>
import FBControl from './'
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    sample (data) {
    }
  },
  created () {
    FBControl.logPageView()
  },
  mounted () {
  }
}
</script>

<style>
</style>
