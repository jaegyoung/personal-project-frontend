<template>
    <v-container>
     <h1>Daum Map 테스트</h1>
      <vue-daum-map
        :appKey="appKey"
        :center.sync="center"
        :level.sync="level"
        :mapTypeId="mapTypeId"
        :libraries="libraries"
  
        @load="onLoad"
        @center_changed="onMapEvent('center_changed', $event)"

  
        style="width:500px;height:400px;">
      </vue-daum-map>
  
      <h2>Options</h2>
      <table>
        <colgroup>
          <col width="60" />
          <col />
        </colgroup>
        <tr>
          <th>Level</th>
          <td><input type="range" min="1" max="14" v-model.number="level"> {{level}}</td>
        </tr>
        <tr>
          <th>Lat</th>
          <td><input type="number" v-model.number="center.lat" step="0.0001"></td>
        </tr>
        <tr>
          <th>Lng</th>
          <td><input type="number" v-model.number="center.lng" step="0.0001"></td>
        </tr>
      </table>  
    </v-container>
  </template>
  
  <script>
  import VueDaumMap from 'vue-daum-map';
  
  export default {
    name: 'HelloWorld',
   components: {VueDaumMap},
   data: () => ({
    appKey: "185c27ae2c3a87993d3cf6235d2507ba",
    center: {lat:37.541, lng:126.986},
    level: 3,
    mapTypeId: VueDaumMap.MapTypeId.HYBRID,
    libraries: [],
    mapObject: null
   }),
   methods: {
    onLoad (map) {
     this.mapObject = map;
    },
    onMapEvent (event, params) {
     var msg = event + params;
     if(event == 'click') {
      this.$dialog.confirm({
           text: "<center>Wild<br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Siberischer_tiger_de_edit02.jpg/800px-Siberischer_tiger_de_edit02.jpg' height=200/><input value='input'></input><br/></center>"+msg, title: 'Information'});
     }
    }
   }
  };
  </script>