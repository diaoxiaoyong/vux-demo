<template>
<div>
  <divider v-for="(count , index) in count" :key="count.id"><div  @click="msg($event)">{{count.classname}}{{index}}</div></divider>
</div>
</template>

<script>
import { Divider } from 'vux'
import { mapState ,mapMutations } from 'vuex'
export default {
  components: {
    Divider
  },
  computed:{
    ...mapState([
      'count'
    ])
  },
  methods:{
    msg:function(e){
      this.$store.commit('increment',e.target.innerText)
      console.log(e.target.innerText);
      //this.$router.push({ name: 'HelloWorld', params: { userId: e.target.innerText }})
      this.$router.push({ name: 'HelloWorld'})
    },
    // ...mapMutations([
    //   "increment"
    // ])
  }
}
</script>