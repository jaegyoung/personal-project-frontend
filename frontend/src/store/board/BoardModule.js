import Vue from 'vue'
import Vuex from 'vuex'

import actions from "@/store/board/actions.js"
import states from "@/store/board/states"

Vue.use(Vuex)

const BoardModule = {
    namespaced: true,
    actions,
    states
}

export default BoardModule