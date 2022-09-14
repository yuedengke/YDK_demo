import Vue from 'vue'
import Vuex from 'vuex'
import route from './route'

Vue.use(Vuex)

export default function () {
  const store = new Vuex.Store({
    modules: {
      route
    },
    strict: false
  })
  return store
}
