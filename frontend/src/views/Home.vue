<template>
  <div class="container">
      <b-col>
        <FormSearch class="animated fadeIn" @info-video="passData" v-if="ifNoData"/>
      </b-col>
      <b-col>
        <TableContent v-if="ifData" :info2="info" />
      </b-col>
    
  </div>
</template>

<script>
// @ is an alias to /src
import FormSearch from '@/components/FormSearch.vue'
import TableContent from '@/components/TableContent.vue'

export default {
  name: 'home',
  components: {
   FormSearch,
   TableContent
  },
  data(){
    return{
      ifData: false,
      ifNoData: true,
      info: null
    }
  },
  methods:{
    passData(data){
      this.info = data
      this.ifNoData = false;
      this.ifData = true
    }
  }
}
</script>
