import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n';
import axios from 'axios'
import list from './englishList/list'
Vue.use(Vuex)
const state = {
    count :[
        {text:'aaaaa',id:1},
        {text:'bbbbb',id:2},
        {text:'ccccc',id:3},
        {text:'ddddd',id:4},
        {text:'eeeee',id:5},
        {text:'wwwww',id:6},
    ],
    text:''
}
const getters = {

}
const mutations = {
    increment (state,n) {
        console.log(n)
        state.text = n
    },
    ajax(state) {
        var a = 'acca'
        axios.get('http://data.toutiaojk.com/extend/list/appclassid.php', {
            params: {
             
            }
        })
        .then(function (response) {
            console.log(response);
            state.count = response.data
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
const store = new Vuex.Store({
    state,
    mutations,
    modules: {
        list:list,
        i18n: vuexI18n.store
    }
  });
  Vue.use(vuexI18n.plugin, store);
export default store