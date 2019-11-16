<template>
  <div class="characters">
     <h5>Characters</h5>
  </div>
</template>

<script>
// @ is an alias to /src
import api from '../../services/api.js'
export default {
  name: 'characters',
  components: {
  },
  mounted: function () {
    api.test()
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
