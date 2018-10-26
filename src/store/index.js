import Vue from "vue"
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    userInfo: {
      address: "",
      count: "",
      disabled:"",
      education: "",
      header: "",
      hometown: "",
      id: "",
      jobRank: "",
      joinPartyTime: "",
      lastPayTime: "",
      leadPerson: "",
      nation: "",
      partyStatus:"",
      phone: "",
      qqNum: "",
      salary: "",
      sex:"",
      totalScore: "",
      username: "",
      wxNum: "",
    }
  },
  mutations: {
    "CHANGE_userInfo"(state, payload) {
      state.userInfo = payload
    }
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        setItem: (key, value) =>
          sessionStorage.setItem(key, value),
        removeItem: key => sessionStorage.removeItem(key),
      },
    }),
  ],
})

export default store