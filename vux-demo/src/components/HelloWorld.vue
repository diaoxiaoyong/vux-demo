<template>
  <div class="hello" >
    <x-header :left-options="{backText: 'hello'}">你好</x-header>
    <div @click="msg">
   {{text}}
   {{list.text}}

   </div>
   <div></div>
  </div>
</template>

<script>
import {XHeader,} from 'vux'
import { mapState ,mapMutations } from 'vuex'
export default {
  name: 'HelloWorld',
  components:{
    XHeader,
  },
  computed:{
    ...mapState([
      "text",
      "list"
    ]),
    ...mapMutations([
      'ajax'
    ])
  },
  methods:{
    msg(){
      this.$router.push({name:'home'})
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
