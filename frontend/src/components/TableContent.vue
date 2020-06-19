<template>
    <div class="animated fadeIn">
      <div v-if="info2.length">
       <Loading v-if="isLoading" />
      <div v-if="!isLoading">
      <div  class="row py-4">
        <div class="col-md-12 d-none d-lg-block">
          <h5 v-if="formCaption && formTitle" class="text-center">Found {{totalResults}} results for "{{formCaption}}" divided into {{totalPages2}} pages. </h5>
           <h5 v-if="formCaption && !formTitle" class="text-center">Found {{totalResults}} results for "{{formCaption}}" divided into {{totalPages2}} pages. </h5>
          <h5 v-if="formTitle && !formCaption" class="text-center">Found {{totalResults}} results for "{{formTitle}}" divided into {{totalPages2}} pages. </h5>
        </div>
        <div class="col-sm-12 pt-5  d-sm-block d-md-none">
           <p v-if="formCaption && formTitle" class="text-center paraInfo">{{totalResults}} results  for "{{formCaption}}" in {{totalPages2}} pages. </p>
          <p v-if="formCaption && !formTitle" class="text-center paraInfo">{{totalResults}} results  for "{{formCaption}}" in {{totalPages2}} pages. </p>
          <p v-if="formTitle && !formCaption" class="text-center paraInfo">{{totalResults}} results  for "{{formTitle}}" in {{totalPages2}} pages.</p>
        </div>
        <div v-if="isOnePage">
          <div class="col-md-12 offset-md-6 d-none d-lg-block pl-5">
            <span class="text-center navButton pl-4">
              <button class="btn" :disabled='isPreviousDisable' @click="firstPage"><v-icon name="angle-double-left" scale="2"/></button>
              <button class="btn" :disabled='isPreviousDisable' @click="previousPage"><v-icon name="angle-left" scale="2"/></button>
              <span class="slide-font">Page {{currentPageServer}} </span>
              <button class="btn" :disabled='isNextDisable' @click="nextPage"><v-icon name="angle-right" scale="2"/></button>
              <button class="btn" @click="lastPage" :disabled='isNextDisable'><v-icon name="angle-double-right" scale="2"/></button>
            </span>
              <span class="navButton"><input type="number" @change="noNegativeNumber" name="pin" maxlength="3" size="3" v-model="selectedPageServer" class="inputNumber">
              <button @click="goToPageServer"><v-icon name="search" scale="1"/></button></span>
          </div> 
          <div class="col-sm-12  pb-2 d-sm-block d-md-none" >
            <div class="text-center navButtonsm ">
              <button class="btn" :disabled='isPreviousDisable' @click="firstPage"><v-icon name="angle-double-left" scale="2"/></button>
              <button class="btn" :disabled='isPreviousDisable' @click="previousPage"><v-icon name="angle-left" scale="2"/></button>
              <span class="paraInfo">Page {{currentPageServer}}</span>
              <button class="btn" :disabled='isNextDisable' @click="nextPage"><v-icon name="angle-right" scale="2"/></button>
              <button class="btn" @click="lastPage" :disabled='isNextDisable'><v-icon name="angle-double-right" scale="2"/></button>
              <span class="navButtonsm"><input type="number" @change="noNegativeNumber" class="inputSearch inputSearchSm" name="pin" maxlength="3" size="3" v-model="selectedPageServer">
              <button @click="goToPageServer"><v-icon name="search" scale="1"/></button></span>
            </div>
          </div> 
        </div>
        <b-button @click="resetar" class="resetButton" block variant="primary">New Search</b-button>   
      </div>
        <div  v-for="data in info2" v-bind:key="data.id">
            <div class="row py-2 bordaForm m-3">
              <br>
              <div class="col-md-4 pt-3">
                 <img class="img-thumbnail" :src="data.thumbnail"  alt="Card image cap">
              </div>
              <div class="col-md-6 d-none d-lg-block" style="padding-top: 40px !important">
                <p class="titleCard">Title:<a class="linkCard" :href="data.videoUrl" target="blank"> {{data.title}}</a></p>
                <p>Channel: {{data.uploader}}</p>
                <p>Uploaded on : {{data.dataUpload | moment("MM/DD/YYYY")}}</p>
                <P v-if="data.context">Context : <a class="linkCard" :href="data.videoUrl" target="blank">"{{data.context}}"</a></P>
              </div>
              <div class="col-md-6 d-sm-block d-md-none" style="padding-top: 20px !important">
                <p class="titleCardSm">Title:<a class="linkCard" :href="data.videoUrl" target="blank"> {{data.title}}</a></p>
                <p class="titleCardSm">Channel: {{data.uploader}}</p>
                <p class="titleCardSm">Uploaded on : {{data.dataUpload | moment("MM/DD/YYYY")}}</p>
                <P class="titleCardSm" v-if="data.context">Context : <a class="linkCard" :href="data.videoUrl" target="blank">"{{data.context}}"</a></P>
              </div>
            </div>
        </div>
        <div  class="row py-4">
        <div class="col-md-12 d-none d-lg-block">
          <h5 v-if="formCaption && formTitle" class="text-center">Found {{totalResults}} results for "{{formCaption}}" divided into {{totalPages2}} pages. </h5>
          <h5 v-if="formCaption && !formTitle" class="text-center">Found {{totalResults}} results for "{{formCaption}}" divided into {{totalPages2}} pages. </h5>
          <h5 v-if="formTitle && !formCaption" class="text-center">Found {{totalResults}} results for "{{formTitle}}" divided into {{totalPages2}} pages. </h5>
        </div>
        <div class="col-sm-12  d-sm-block d-md-none">
          <p v-if="formCaption && formTitle" class="text-center paraInfo">{{totalResults}} results  for "{{formCaption}}" in {{totalPages2}} pages. </p>
          <p v-if="formCaption && !formTitle" class="text-center paraInfo">{{totalResults}} results  for "{{formCaption}}" in {{totalPages2}} pages. </p>
          <p v-if="formTitle && !formCaption" class="text-center paraInfo">{{totalResults}} results  for "{{formTitle}}" in {{totalPages2}} pages.</p>
        </div>
        <div v-if="isOnePage">
        <div class="col-md-12 offset-md-6 d-none d-lg-block pl-5">
            <span class="text-center navButton pl-4">
              <button class="btn" :disabled='isPreviousDisable' @click="firstPage"><v-icon name="angle-double-left" scale="2"/></button>
              <button class="btn" :disabled='isPreviousDisable' @click="previousPage"><v-icon name="angle-left" scale="2"/></button>
              <span class="slide-font">Page {{currentPageServer}} </span>
              <button class="btn" :disabled='isNextDisable' @click="nextPage"><v-icon name="angle-right" scale="2"/></button>
              <button class="btn" @click="lastPage" :disabled='isNextDisable'><v-icon name="angle-double-right" scale="2"/></button>
            </span>
              <span class="navButton"><input type="number" @change="noNegativeNumber" name="pin" maxlength="3" size="3" v-model="selectedPageServer" class="inputNumber">
              <button @click="goToPageServer"><v-icon name="search" scale="1"/></button></span>
          </div> 
          <div class="col-sm-12  pb-2 d-sm-block d-md-none" >
            <div class="text-center navButtonsm ">
              <button class="btn" :disabled='isPreviousDisable' @click="firstPage"><v-icon name="angle-double-left" scale="2"/></button>
              <button class="btn" :disabled='isPreviousDisable' @click="previousPage"><v-icon name="angle-left" scale="2"/></button>
              <span class="paraInfo">Page {{currentPageServer}}</span>
              <button class="btn" :disabled='isNextDisable' @click="nextPage"><v-icon name="angle-right" scale="2"/></button>
              <button class="btn" @click="lastPage" :disabled='isNextDisable'><v-icon name="angle-double-right" scale="2"/></button>
              <span class="navButtonsm"><input type="number" @change="noNegativeNumber" class="inputSearch inputSearchSm" name="pin" maxlength="3" size="3" v-model="selectedPageServer">
              <button @click="goToPageServer"><v-icon name="search" scale="1"/></button></span>
            </div>
          </div> 
        </div> 
        <b-button @click="resetar" class="resetButton" block variant="primary">New Search</b-button>   
      </div>
      <div class="d-sm-block d-md-none">
        <br><br><br>
      </div>
      </div>
      </div>
      <div v-else class="row py-4">
        <div class="col-md-11 py-5">
           <h1 class="text-center d-none d-lg-block" >Nothing Found...Sorry <v-icon name="frown" scale="3"/></h1>
          <h4 class="text-center d-sm-block d-md-none py-3">Nothing Found...Sorry <v-icon name="frown" scale="2"/></h4>
           <b-button @click="resetar" class="resetButton" block variant="primary">New Search</b-button>   
        </div>
      </div>
     
    </div>
</template>
<script>
import axios from 'axios'
import Loading from './Loader'
export default {
   components:{
     Loading
   },
  props:['info2','page','limit','formTitle','formCaption','selected','formDateFrom','formDateEnd','totalPages2','urlFragment','totalResults'],
 data(){
   return{
     info: [],
      isLoading: false,
      nextPageServer: this.page + 1,
       previousPageServer:null,
      totalPagesServer: null,
      currentPageServer: 1,
      selectedPageServer:'',
      isNextDisable: false,
      isPreviousDisable: false,
      isOnePage: true
   }
 },
 methods:{
   nextPage(){
      this.isLoading = true
       console.log(this.selected)
      axios.post(`/coders/${this.urlFragment}`,{
          legenda: this.formCaption,
          title:this.formTitle,
          selected: this.selected,
          dateFrom: this.formDateFrom,
          dateEnd: this.formDateEnd
        },{params:{
          page: this.nextPageServer,
          limit: this.limit
        }})
        .then((data)=>{
           this.info2 = data.data.data
           this.totalPagesServer = data.data.totalPages  
            this.isLoading = false
            this.previousPageServer = data.data.previousPage
             this.selectedPageServer = ''
             this.isNextDisable = false
              this.isPreviousDisable = false
             this.totalPagesServer = data.data.totalPages
            if(this.nextPageServer >= data.data.totalPages){
              this.nextPageServer = data.data.totalPages
              this.currentPageServer = this.nextPageServer
              this.selectedPageServer = ''
              this.isNextDisable = true
              this.isPreviousDisable = false
            }else{
              this.nextPageServer = data.data.nextPage
              this.currentPageServer = this.nextPageServer -1
              this.selectedPageServer = ''
               this.isNextDisable = false
              this.isPreviousDisable = false
            }
         
        })
   },
   previousPage(){
      this.isLoading = true
      axios.post(`/coders/${this.urlFragment}`,{
          legenda: this.formCaption,
          title:this.formTitle,
          selected: this.selected,
          dateFrom: this.formDateFrom,
          dateEnd: this.formDateEnd
        },{params:{
          page: this.previousPageServer,
          limit: this.limit
        }})
        .then((data)=>{
           this.info2 = data.data.data
           this.totalPagesServer = data.data.totalPages
           this.nextPageServer = data.data.nextPage
            this.isLoading = false
             this.currentPageServer =1
             this.selectedPageServer = ''
              this.isNextDisable = false
              this.isPreviousDisable = false
           if(this.previousPageServer === 1){
             this.previousPageServer = 1
             this.isNextDisable = false
              this.isPreviousDisable = true
           }else{
             this.previousPageServer = data.data.previousPage
            this.currentPageServer =this.previousPageServer + 1
            this.selectedPageServer = ''
            this.isNextDisable = false
              this.isPreviousDisable = false
           }
        })
   },
   firstPage(){
      this.isLoading = true
      axios.post(`/coders/${this.urlFragment}`,{
          legenda: this.formCaption,
          title:this.formTitle,
          selected: this.selected,
          dateFrom: this.formDateFrom,
          dateEnd: this.formDateEnd
        },{params:{
          page: 1,
          limit: this.limit
        }})
        .then((data)=>{
           this.info2 = data.data.data
           this.totalPagesServer = data.data.totalPages
           this.nextPageServer = data.data.nextPage
           this.isLoading = false
           this.currentPageServer =1
            this.previousPageServer = 1
            this.isNextDisable = false
            this.isPreviousDisable = true
           
        })
   },
   lastPage(){
       this.isLoading = true
      axios.post(`/coders/${this.urlFragment}`,{
          legenda: this.formCaption,
          title:this.formTitle,
          selected: this.selected,
          dateFrom: this.formDateFrom,
          dateEnd: this.formDateEnd
        },{params:{
          page: this.totalPages2,
          limit: this.limit
        }})
        .then((data)=>{
          this.info2 = data.data.data
          this.totalPagesServer = data.data.totalPages
          this.previousPageServer = data.data.previousPage
          this.nextPageServer = this.totalPagesServer 
          this.currentPageServer = this.nextPageServer
          this.isLoading = false
          this.isNextDisable = true
          this.isPreviousDisable = false
        })
   },
  goToPageServer(){
    this.isLoading = true
    if(parseInt(this.selectedPageServer) >= this.totalPages2){
          this.selectedPageServer = this.totalPages2
          this.nextPageServer = this.totalPages2
          this.isNextDisable = true
          this.isPreviousDisable = false
            
          }else if(parseInt(this.selectedPageServer)<= 1){
            this.selectedPageServer = 1
            this.previousPageServer = 1
             this.isNextDisable = false
              this.isPreviousDisable = true

          }
          else{
            this.isNextDisable = false
            this.isPreviousDisable = false
          }
    axios.post(`/coders/${this.urlFragment}`,{
          legenda: this.formCaption,
          title:this.formTitle,
          selected: this.selected,
          dateFrom: this.formDateFrom,
          dateEnd: this.formDateEnd
        },{params:{
          page: this.selectedPageServer,
          limit: this.limit
        }})
        .then((data)=>{
          this.isLoading = false
          this.info2 = data.data.data
          this.totalPagesServer = data.data.totalPages
          this.nextPageServer = data.data.nextPage
          this.currentPageServer = this.selectedPageServer
          this.previousPageServer = data.data.previousPage
          console.log(this.currentPageServer)
          this.selectedPageServer = ''
          
        })
  },
   resetar(){
         window.location.reload()
      },

      noNegativeNumber(){
        if(this.selectedPageServer < 1){
          this.selectedPageServer = 1
        }
      }
   
 },
 mounted(){
 if(this.info2.length < this.limit){
   this.isOnePage = false
 }
 this.isPreviousDisable = true
 }
 
}
</script>