<template>
 <nav>
    <n-button-group size="large">
      <n-button :type="buttonType(name)" @click="$router.push(value.target)" round v-for="(value, name) in navigationOptions" :key="name">{{value.text}}</n-button>
    </n-button-group>
  </nav>
</template>

<script>
import { NButton, NButtonGroup } from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar',
  components: {
    NButton,
    NButtonGroup
  },
  data () {
    return {
      navigationOptions: {
        start: {
          text: 'Start',
          target: '/'
        },
        showcase: {
          text: 'ShowCase',
          target: '/showcase'
        },
        contact: {
          text: 'Contact',
          target: '/contact'
        }
      }
    }
  },
  methods: {
    buttonType (routeName) {
      if (this.$route.name === routeName) {
        return 'primary'
      } else {
        return 'default'
      }
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
