// import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

// Vuex is auto installed on the web
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    noteData:[],
    note:{},
    index: 0
  },
  getters,
  mutations,
  actions,
})
