import Vue from 'vue'
import VueRouter from 'vue-router'

import myWalkBoardList from '@/views/board/myWalk/myWalkBoardList.vue'



Vue.use(VueRouter)

const boardRoutes = [
  { 
    path: '/myBoardList',
    name: 'myWalkBoardList',
    component: myWalkBoardList
  },
]

export default boardRoutes