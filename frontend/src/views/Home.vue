<template>
  <div class="container">
      <b-col>
        <FormSearch class="animated fadeIn" @info-video="passData" v-if="ifNoData"/>
      </b-col>
      <b-col>
        <TableContent v-if="ifData" :info2.sync="info" :page="page" :limit="limit" :formTitle="formTitle" :formCaption="formCaption" :selected="selected" :dateFrom="dateFrom" :dateEnd="dateEnd" :totalPages2="totalPages" :urlFragment="urlFragment" :totalResults="totalResults" :searchParams="searchParams" />
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
      info: null,
      page: null,
      limit: null,
      formTitle: null,
      formCaption: null,
      selected: null,
      dateFrom: null,
      dateEnd: null,
      totalPages: null,
      totalResults: null,
      urlFragment: null,
      searchParams: null
    }
  },
  methods:{
    passData(...data){
      console.log(...data)
      this.info = data[0];
      this.page = data[1];
      this.limit = data[2];
      this.formTitle = data[3];
      this.formCaption = data[4];
      this.selected = data[5];
      this.dateFrom = data[6];
      this.dateEnd = data[7];
      this.totalPages = data[8],
      this.totalResults = data[9],
      this.urlFragment = data[10]
      this.searchParams = data[11]
      this.ifNoData = false;
      this.ifData = true;
    }
  }
}
</script>
