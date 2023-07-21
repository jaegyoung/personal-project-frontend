<template lang="">
   <v-container> 
    <h1 id="welcomeUi">{{nickName}}님, 환영합니다!</h1>
    <br>
    <v-row><v-col v-for="(item,index) in myPageMenu" :key="index" cols="6">
        <v-card><v-card-text style="font-weight:700;" @click="goMyPage(item.link)">{{item.title}}</v-card-text></v-card>
    </v-col></v-row>
   <br><br>
    <v-card style="width:800px;height:400px;margin:auto;" v-if="showCard">
    <h2 style="text-align:center; padding-top:10px">비밀 번호를 확인 합니다.</h2>

    <div style="margin:auto">
        <v-icon right color="black">mdi-lock-outline</v-icon>
    <input type="text" class="inputValue" v-model="password" placeholder="Password">
    <v-btn @click="checkPassword">확인</v-btn>

    </div>  
                           
                    
    </v-card>
    <v-card style="width:800px;height:400px;margin:auto;" v-if="!showCard">
        <p>초기 화면</p>
    </v-card>
  


</v-container>
       

</template>
<script>
import router from "@/router"
export default {
    data() {
        return {
            showCard:false,
            nickName:'햄토리',
            myPageMenu:[
                {title:"프로필 관리" ,link:'/MyProfile'},
                {title:"게시물 관리",link:'/MyBoardManage'}
            ]
        }
    },
    methods: {
       async goMyPage(id){
            this.showCard=true
        //    await router.push(id)
        }
    },
}
</script>
<style scoped lang="css">
h1{
    text-align: center;
}
input.inputValue {
        outline: none;
        font-size: 14px;
        color: gray;
        width: 320px;
        font-weight: 300;
        padding: 8px 10px;
    }
    td{
        text-align: center;
    }
</style>