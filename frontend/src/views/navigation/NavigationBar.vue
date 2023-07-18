<template>
    <nav>
    <v-app-bar color="white" style="height: 20px;width: 100%; justify-content: center; align-items: center;" app >
    <v-toolbar-title>
  </v-toolbar-title>
    
  <v-spacer></v-spacer>
   <v-toolbar-items>  
    <p @click="myPage" >{{nickName }}</p>
      <p class="paragraph" v-if="!isAuthenticated" text @click="signUp">회원가입</p>
      <p v-if="!isAuthenticated" text @click="signIn">로그인</p>
      <p v-if="isAuthenticated" text @click="signOut">로그아웃</p> 
   </v-toolbar-items >
 
    </v-app-bar>
    
  <v-parallax
      dark style="height: 150px; max-width: 1000px; justify-content:center;margin-left: auto; margin-right: auto;"
      src="@/assets/park.svg" @click="goHome"
    >
      <v-row align="center" justify="center">
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="text-h1 font-weight-bold mb-4">
            WALKING!
          </h1>
          <h4 class="subheading">
            
          </h4>
        </v-col>
      </v-row>
    </v-parallax> 
     <v-toolbar class="center-toolbar" style="width: 1000px; height: 35px;" title="menu">
  <v-toolbar-items class="items" style="margin: 8px; border-radius: 4px;">
    <span class="items-text">공인 산책로</span>
    <span class="items-text" @click="goList">내 산책로</span>
    <span class="items-text">마실</span>
    <span class="items-text">게시판</span>
    <span class="items-text" @click="myPage">마이페이지</span>
  </v-toolbar-items>
</v-toolbar>
  </nav> 
  </template>
  
  <script>
import router from '@/router';

  
export default {
    data() {
        return {
            drawer:false,
            isAuthenticated:false,
            nickName:'',
            userToken:null
        }
    },
    methods: {
      goHome(){
        if (this.$route.path !== '/') {
        router.push('/');}
      },
      signIn(){
        router.push('login')
        .catch(()=>{})
        this.userToken = localStorage.getItem('userToken')
        if(this.userToken=null){
          this.isAuthenticated=false
        }
      
      },
      signOut(){
        this.isAuthenticated=false
        localStorage.removeItem('userToken')
        localStorage.removeItem('nickname')
      },
      signUp() {
      // 현재 경로가 "/signup"이 아닌 경우에만 이동
      if (this.$route.path !== '/signup') {
        router.push('/signup');
      }
    }, 
    goList(){
          router.push('/myBoardList')
        },
     
    myPage(){
      router.push('/myPage')
    }
    },
    mounted() {
      this.nickName=localStorage.getItem('nickname')
      if(localStorage.getItem('userToken')===!null){
        this.isAuthenticated=true
      }
    },

}
  </script>
  <style scoped>
  .center-toolbar{
  margin: 0 auto;
}
.items{
  display: flex;
  justify-content: space-between;
  width: 100%;}
.items-text{
  text-align: center;
  display: flex;;
}
.paragraph {
   max-width: 1000px;
   margin: 0 auto;
  }
</style>