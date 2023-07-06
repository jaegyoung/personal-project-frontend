<template lang="html">
    <v-container>
        <h3 style="text-align: center;">나만의 산책로</h3>
         <v-row>
           
            <v-col v-for="(item, index) in board" :key="index" cols="3">
                <v-card class="card-item" @click="goRead" style="height: 250px; width: 250px;"> <v-img src="@/assets/park.svg" height="66%"></v-img>
                    <v-card-text height="34%">{{ item }}</v-card-text></v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import router from '@/router';

export default {
    data() {
        return {
            board : [
                1,2,3,4,5,6,7,8,9,10 ]
        }
    },
    methods: {
        goRead(){
            router.push(`/read/:myBoardId`)
        }
    },
    
}
</script>
<style lang="css">

.card-item:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
    transition: box-shadow 0.3s, transform 0.3s;
}
</style>
</style>