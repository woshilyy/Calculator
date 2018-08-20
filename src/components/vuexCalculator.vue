<!--  -->
<template>
  <div class="app">
      <div class="results">{{result}}</div>
      <div class="enter">{{enter===""?0:enter}}</div>
      <div class="keys">
          <div class="list">
              <keyb v-for="item in keys" :value="item" :key="item.id"></keyb>
          </div>
      </div>
  </div>
</template>

<script>
// 引入vuex
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
const store=new Vuex.Store({
    state:{
        result:'',
        enter:''
    },
    mutations:{
        cal(state,value){
            if(value==='='){
                state.result=eval(state.enter);
                state.enter+=value
            }else if(value==='clear'){
                state.result=state.enter=''
            }else{
                state.enter+=value
            }
        }
    }
})
Vue.component('keyb',{
    props: ['value'],
    template:`<div @click="getchange" class="keyb" :data-value="value">{{value}}</div>`,
    methods:{
        getchange(event){
            let value=event.target.dataset.value;
            this.$store.commit('cal',value)
        }
    }
})
console.log(" 欢迎调试代码");
export default {
  data(){
    return{
        keys:[
            'clear','+','-','*',
            '7','8','9','/',
            '4','5','6','0',
            '1','2','3','='
        ]
    }
  },store,
  computed:{
      result(){
          return this.$store.state.result;
      },
      enter(){
          return this.$store.state.enter;
      }
  }
}
</script>
<style lang='scss' scoped>
.app{
    width: 350px;
    margin: 0 auto;
    border:#ccc 1px solid;
    border-radius: 15px 15px 0 0;
} 

.keyb{
    width: 25%;
    height: 80px;
    line-height: 50px;
    // border:1px solid #ccc;
    box-shadow: 0 1px 0 5px #ccc inset;
    font-size: 24px;
    float: left;
    color: #666;
    box-sizing: border-box;
    line-height: 80px;
}
.results,.enter{
    padding: 10px;
    text-align: right;
}
.keyb:first-child{
    color: orangered;
}
.keyb:last-child{
    background-color: orangered;
    color: #fff;
}
.results,.enter{
    height: 50px;
    line-height: 50px;
    font-size: 30px;
    color: #666;
}
.results{
    color: orangered;
}
</style>