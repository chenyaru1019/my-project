<template>
  <div id="example">
    <button @click="decrement">-</button>
    <span>用计算属性接收</span>{{count}}
    <span>用data接收</span>{{dataCount}}
    <button @click="increment">+</button>
    <br>
    <div>{{getName}}</div>
    <div>============================</div>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
    <span>{{fullName}}</span>
  </div>

</template>
<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        dataCount: this.$store.state.count, // 用data接收
        firstName: 'hello',
        lastName: 'vue'
      }
    },
    computed: {
      count () {
        return this.$store.state.count // 用computed接收
      },
      ...mapState(['setUser']),
      getName () {
        return this.users
      },
      fullName () {
        return this.firstName + this.lastName
      }
    },
    watch: {
      count (newVal, oldVal) {
        console.log(newVal, oldVal)
      },
      lastName(newVal, oldVal){
        console.log(newVal, oldVal)
      }
    },
    methods: {
      increment () {
        this.$store.commit('increment')
      },
      decrement () {
        this.$store.commit('decrement')
      }
    }
  }
</script>
