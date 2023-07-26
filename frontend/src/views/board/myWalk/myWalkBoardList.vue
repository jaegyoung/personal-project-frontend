<template lang="html">
    <v-container class="boardList">
      
      <div style="display: flex; "><v-btn @click="goRegister">글쓰기</v-btn>
        <input type="text" v-model="keyword" style="background-color: white; margin-left: auto;border: 1px solid #ccc;">
        <v-btn color=primary style="margin-left: 10px;" @click="">검색</v-btn>
      </div>
     
      <br><br>
       
        <v-row v-if="boards && boards.length > 0">
            <v-col v-for="(item, index) in boards" :key="index" cols="3">
                <v-card class="card-item" @click="goRead(item.id)" style="height: 250px; width: 226px;"> 
                  <v-img :src="dynamicLink(item.imgPath)" height="66%" />
                    <v-card-text style="font-weight:900; height:20%;font-size: 20px;"  >
                        {{ item.boardTitle }}
                    </v-card-text>
                    <v-card-text style="text-align:center;font-weight:500; height:13%;font-size: 17px;"  >
                       View  {{ item.view }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        
        <div v-else>
           
        </div>
        <br>
      
    </v-container>
</template>
<script>
import router from '@/router';
const LINK = process.env.VUE_APP_S3_LINK
const BoardModule = 'BoardModule';
import { mapActions, mapState } from 'vuex';

export default {
    computed:{
        ...mapState(BoardModule,['boards'])
    },
    data() {
        return {
          link:LINK,
            prevBoards: [] ,
            keyword:'',
          
    
        }
    },
    methods: {
      dynamicLink(extraPath) {
      return `${this.link}/${extraPath}`;
    },
        ...mapActions(BoardModule, ['requestBoardListToSpring']),
        goRead(id) {
            router.push({
                name: 'myWalkBoardRead',
                params: { id }
            });},
        goRegister(){
          if (localStorage.getItem('userToken')==null) {
            alert("로그인 후 이용해 주시길 바랍니다.")            
          } else{
            router.push('/myBoardRegister')
          }
            
        },  
 
        
    },
    async created() {
        await this.requestBoardListToSpring()
  .then((data) => {
    // this.consoleBoard()
  })
  .catch((error) => {
    throw(error)
  });


    },
    
    
}
</script>
<style lang="css">

.card-item:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
    transition: box-shadow 0.3s, transform 0.3s;
}
.boardList{
    width: 1200px;
    
}

</style>