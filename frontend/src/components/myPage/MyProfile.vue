<template lang="">
    <v-container>
        <v-card v-if="checkPassword" id="profileVcard" justify-center>
        <h3>회원 프로필</h3>
        <div>
            <v-card-text>
                <form @submit.prevent="onSubmit" id="Info">
                <table id="profileTable">
                    <tr>
                        <td>Email</td>
                        <td class="input">
                            <input type="text" class="inputValue" v-model="myAccount.email" readonly>
                        </td>
                    </tr>
                    <tr>
                        <td>Paassword</td>
                        <td class="input">
                            <input type="text" class="inputValue" v-model="myAccount.password" readonly>
                        </td>
                    </tr>
                    <tr>
                        <td>Nickname</td>
                        <td class="input">
                            <input type="text" class="inputValue" v-model="myAccount.nickname" readonly >
                        </td>
                    </tr>
                    <tr>
                        <td>Adress</td>
                        <td class="input">
                          <br/>
                          <input type="text" class="inputValue" v-model="myAccount.totalAddress" readonly/>
                         
                        </td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td class="radio">
                           <input type="text" class="inputValue" v-model="myAccount.memberType"> 
            
                        </td></tr>
                </table>
                </form>
                <!-- <div id="proFileSubmitBtn">
                    <v-btn type="submit"  width="130px" text-align="center" height="50" color="white" @click="onSubmit" >수정</v-btn> 
                    <v-btn @click="memberDelete"  width="130px" text-align="center" height="50" color="white" >탈퇴</v-btn> 
                </div> -->
            </v-card-text>
        </div>
    </v-card>
    <v-card style="margin-top: 100px;width:650px; height:250px; justify-content:center" v-if="!checkPassword">
    <v-card-text style="text-align:center">
        <h2>비밀번호 검증</h2><br><br><br><br>
        <input type="password"  placeholder="비밀번호를 입력하세요." v-model="myPassword"><v-btn @click="check">확인</v-btn>
    </v-card-text></v-card>
    </v-container>
</template>
<script>
import { mapActions, mapState } from 'vuex';

const ProfileModule= 'ProfileModule'
export default {
    computed:{
        ...mapState(ProfileModule,['myAccount'])
    },
    mounted() {
       this.mappingAccount()
    },
    data() {
        return {
            user:'',
            email:'',
            memberType:'',
            address:'',
            nickname:'',
            password:'',
            checkPassword:false,
            myPassword:'',
            userToken:''

        }
    },
    methods: {
        ...mapActions(ProfileModule,['requestMyAccountToSpring','requestcheckPasswordToSpring']),
       async mappingAccount(){
            const payload ={userToken:localStorage.getItem('userToken')}
            
            await this.requestMyAccountToSpring(payload)
            console.log(this.myAccount)
        },
       async check(){
            this.userToken=localStorage.getItem('userToken')
            const payload = {
                password:this.myPassword,
                userToken:this.userToken
            }
            this.checkPassword= await this.requestcheckPasswordToSpring(payload)

           
        }
    },
}
</script>
<style scoped>
 .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #profileVcard {
        width: 700px;
        height: 650px;
        margin-top: 60px;
        padding-top: 20px;
    }
    #proFileSubmitBtn {
        padding-top: 220px;
        padding-left: 260px;
    }
    #Info {
        height: 200px;
    }
    #profileTable {
        width: 600px;
        height: 80px;
        padding-left: 20px;
        border-spacing: 10px;
    }
    input.inputValue {
        outline: none;
        color: gray;
        width: 240px;
        font-weight: 300;
        padding: 8px 10px;
    }
    #profileTable td.input {
        border-bottom: 1px solid;
        border-color: lightgray;
        padding-bottom: 4px;
        font-size: 12px;
    }
    #profileTable td{
        padding-bottom: 4px;
        font-size: 11px;
        font-weight: 600;
    }
    #profileVcard h3 {
        text-align: center;
        font-weight: 800;
        font-size: 32px;
        padding-top: 20px;
        padding-bottom: 10px;
    }

</style>
