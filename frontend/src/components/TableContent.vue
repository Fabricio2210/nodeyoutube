<template>
    <div id="up" class="animated fadeIn text-white">
      <div v-if="info2.length">
       <Loading v-if="isLoading" />
      <div v-if="!isLoading">
      <div class="row py-4">
        <div class="col-md-12 d-none d-lg-block textMenuButtons">
          <h5 v-if="formCaption && formTitle" class="text-center">Found {{totalResults}} results for "{{formCaption}}" divided into {{totalPages2}} pages. </h5>
           <h5 v-if="formCaption && !formTitle" class="text-center">Found {{totalResults}} results for "{{formCaption}}" divided into {{totalPages2}} pages. </h5>
          <h5 v-if="formTitle && !formCaption" class="text-center">Found {{totalResults}} results for "{{formTitle}}" divided into {{totalPages2}} pages. </h5>
        </div>
        <div class="col-sm-12 pt-5  d-sm-block d-md-none textMenuButtons">
           <p v-if="formCaption && formTitle" class="text-center paraInfo">{{totalResults}} results  for "{{formCaption}}" in {{totalPages2}} pages. </p>
          <p v-if="formCaption && !formTitle" class="text-center paraInfo">{{totalResults}} results  for "{{formCaption}}" in {{totalPages2}} pages. </p>
          <p v-if="formTitle && !formCaption" class="text-center paraInfo">{{totalResults}} results  for "{{formTitle}}" in {{totalPages2}} pages.</p>
        </div>
        <div v-if="isOnePage">
          <div class="col-md-12 offset-md-6 d-none d-lg-block pl-5">
            <span class="text-center navButton pl-4">
              <button class="btn" :disabled='isPreviousDisable' @click="firstPage"><v-icon name="angle-double-left" scale="2"/></button>
              <button class="btn" :disabled='isPreviousDisable' @click="previousPage"><v-icon name="angle-left" scale="2"/></button>
              <span class="slide-font textMenuButtons">Page {{currentPageServer}} </span>
              <button class="btn" :disabled='isNextDisable' @click="nextPage"><v-icon name="angle-right" scale="2"/></button>
              <button class="btn" @click="lastPage" :disabled='isNextDisable'><v-icon name="angle-double-right" scale="2"/></button>
            </span>
              <span class="navButton spanInput"><input @focus="checkInInput" @blur="checkOutInput" type="number" @change="noNegativeNumber" name="pin" maxlength="3" size="3" v-model="selectedPageServer" class="inputNumber">
              <button :disabled="isInputEmpty" class="buttonSearch" @click="goToPageServer"><v-icon :class="{searchIconDisabled:isInputEmpty}" name="search" scale="1"/></button></span>
          </div> 
          <div class="col-sm-12  pb-2 d-sm-block d-md-none" >
            <div class="text-center navButtonsm ">
              <button class="btn" :disabled='isPreviousDisable' @click="firstPage"><v-icon name="angle-double-left" scale="2"/></button>
              <button class="btn" :disabled='isPreviousDisable' @click="previousPage"><v-icon name="angle-left" scale="2"/></button>
              <span class="paraInfo textMenuButtons">Page {{currentPageServer}}</span>
              <button class="btn" :disabled='isNextDisable' @click="nextPage"><v-icon name="angle-right" scale="2"/></button>
              <button class="btn" @click="lastPage" :disabled='isNextDisable'><v-icon name="angle-double-right" scale="2"/></button>
              <span class="navButtonsm spanInputSm"><input  @focus="checkInInput" @blur="checkOutInput" type="number" @change="noNegativeNumber" class="inputSearch inputSearchSm" name="pin" maxlength="3" size="3" v-model="selectedPageServer">
              <button :disabled="isInputEmpty" class="buttonSearch" @click="goToPageServer"><v-icon :class="{searchIconDisabled:isInputEmpty}" name="search" scale="1"/></button></span>
            </div>
          </div> 
        </div>
        <b-button @click="resetar" class="resetButton" block variant="primary">New Search</b-button>   
      </div>
        <div  v-for="data in info2" v-bind:key="data.id">
            <div class="row py-2 bordaForm m-3">
              <br>
              <div class="col-md-4 py-2">
                 <img class="img-thumbnail" :src="data.thumbnail"  alt="Card image cap">
              </div>
              <div class="col-md-8 d-none d-lg-block py-2">
                <p class="titleCard">Title:<a class="linkCard" :href="data.videoUrl" target="blank"> {{data.title}}</a></p>
                <p>Channel: {{data.uploader}}</p>
                <p>Uploaded on : {{data.dataUpload | moment("MM/DD/YYYY")}}</p>
                <p v-if="data.context">Context: "{{data.context}}"</p>
                <p v-if="data.timeStamp">Timestamp: <a class="linkCard" :href="data.videoUrl" target="blank">"{{checkTimeStamp(data.timeStamp)}}"</a></p>
              </div>
              <div class="col-md-6 d-sm-block d-md-none" style="padding-top: 20px !important">
                <p class="titleCardSm">Title:<a class="linkCard" :href="data.videoUrl" target="blank"> {{data.title}}</a></p>
                <p class="titleCardSm">Channel: {{data.uploader}}</p>
                <p class="titleCardSm">Uploaded on: {{data.dataUpload | moment("MM/DD/YYYY")}}</p>
                <p class="titleCardSm" v-if="data.context">Context: "{{data.context}}"</p>
                <p class="titleCardSm" v-if="data.timeStamp">Timestamp: <a class="linkCard" :href="data.videoUrl" target="blank">"{{checkTimeStamp(data.timeStamp)}}"</a></p>
              </div>
            </div>
        </div>
        <div  class="row py-4">
        <div class="col-md-12 d-none d-lg-block textMenuButtons">
          <h5 v-if="formCaption && formTitle" class="text-center">Found {{totalResults}} results for "{{formCaption}}" divided into {{totalPages2}} pages. </h5>
          <h5 v-if="formCaption && !formTitle" class="text-center">Found {{totalResults}} results for "{{formCaption}}" divided into {{totalPages2}} pages. </h5>
          <h5 v-if="formTitle && !formCaption" class="text-center">Found {{totalResults}} results for "{{formTitle}}" divided into {{totalPages2}} pages. </h5>
        </div>
        <div class="col-sm-12  d-sm-block d-md-none textMenuButtons">
          <p v-if="formCaption && formTitle" class="text-center paraInfo">{{totalResults}} results  for "{{formCaption}}" in {{totalPages2}} pages. </p>
          <p v-if="formCaption && !formTitle" class="text-center paraInfo">{{totalResults}} results  for "{{formCaption}}" in {{totalPages2}} pages. </p>
          <p v-if="formTitle && !formCaption" class="text-center paraInfo">{{totalResults}} results  for "{{formTitle}}" in {{totalPages2}} pages.</p>
        </div>
        <div v-if="isOnePage">
        <div class="col-md-12 offset-md-6 d-none d-lg-block pl-5">
            <span class="text-center navButton pl-4">
              <button class="btn" :disabled='isPreviousDisable' @click="firstPage"><v-icon name="angle-double-left" scale="2"/></button>
              <button class="btn" :disabled='isPreviousDisable' @click="previousPage"><v-icon name="angle-left" scale="2"/></button>
              <span class="slide-font textMenuButtons">Page {{currentPageServer}} </span>
              <button class="btn" :disabled='isNextDisable' @click="nextPage"><v-icon name="angle-right" scale="2"/></button>
              <button class="btn" @click="lastPage" :disabled='isNextDisable'><v-icon name="angle-double-right" scale="2"/></button>
            </span>
              <span class="navButton  spanInput"><input @focus="checkInInput" @blur="checkOutInput" type="number" @change="noNegativeNumber" name="pin" maxlength="3" size="3" v-model="selectedPageServer" class="inputNumber">
              <button :disabled="isInputEmpty" class="buttonSearch" @click="goToPageServer"><v-icon :class="{searchIconDisabled:isInputEmpty}" name="search" scale="1"/></button></span>
          </div> 
          <div class="col-sm-12  pb-2 d-sm-block d-md-none" >
            <div class="text-center navButtonsm ">
              <button class="btn" :disabled='isPreviousDisable' @click="firstPage"><v-icon name="angle-double-left" scale="2"/></button>
              <button class="btn" :disabled='isPreviousDisable' @click="previousPage"><v-icon name="angle-left" scale="2"/></button>
              <span class="paraInfo textMenuButtons">Page {{currentPageServer}}</span>
              <button class="btn" :disabled='isNextDisable' @click="nextPage"><v-icon name="angle-right" scale="2"/></button>
              <button class="btn" @click="lastPage" :disabled='isNextDisable'><v-icon name="angle-double-right" scale="2"/></button>
              <span class="navButtonsm spanInputSm"><input @focus="checkInInput" @blur="checkOutInput" type="number" @change="noNegativeNumber" class="inputSearch inputSearchSm" name="pin" maxlength="3" size="3" v-model="selectedPageServer">
              <button :disabled="isInputEmpty" class="buttonSearch" @click="goToPageServer"><v-icon :class="{searchIconDisabled:isInputEmpty}" name="search" scale="1"/></button></span>
            </div>
          </div> 
        </div> 
        <b-button id="down" @click="resetar" class="resetButton" block variant="primary">New Search</b-button>   
      </div>
      
      </div>
      </div>
      <div v-else class="row py-4">
        <div class="col-md-11 py-5 text-dark">
           <h1 class="text-center d-none d-lg-block" >Nothing Found</h1>
          <h4 class="text-center d-sm-block d-md-none py-3">Nothing Found</h4>
           <b-button @click="resetar" class="resetButton" block variant="primary">New Search</b-button>   
        </div>
      </div>
     <div v-if="showScrollButton" class="d-none d-lg-block">
       <a v-scroll-to="'#up'" class="btn bottomButtonTop"><v-icon name="angle-up" scale="3"/></a>
        <a v-scroll-to="'#down'" class="btn bottomButtonBottom"><v-icon name="angle-down" scale="3"/></a>
     </div>
     <div v-if="showScrollButton" class="d-sm-block d-md-none">
       <a  v-scroll-to="'#up'"  class="btn bottomButtonTopSm"><v-icon name="angle-up" scale="2"/></a>
        <a v-scroll-to="'#down'" class="btn bottomButtonBottomSm"><v-icon name="angle-down" scale="2"/></a>
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
  props:['info2','page','limit','formTitle','formCaption','selected','dateFrom','dateEnd','totalPages2','urlFragment','totalResults'],
 data(){
   return{
     info: [],
      isLoading: false,
      showScrollButton: true,
      nextPageServer: this.page + 1,
       previousPageServer:null,
      totalPagesServer: null,
      currentPageServer: 1,
      selectedPageServer:'',
      isNextDisable: false,
      isPreviousDisable: false,
      isOnePage: true,
      isInputEmpty: true
   }
 },
 methods:{
   nextPage(){
      this.isLoading = true
      this.showScrollButton = false
       console.log(this.selected)
      axios.post(`/coders/${this.urlFragment}`,{
          legenda: this.formCaption,
          title:this.formTitle,
          selected: this.selected,
          dateFrom: this.dateFrom,
          dateEnd: this.dateEnd
        },{params:{
          page: this.nextPageServer,
          limit: this.limit
        }})
        .then((data)=>{
           this.info2 = data.data.data
           this.totalPagesServer = data.data.totalPages  
            this.isLoading = false
            this.showScrollButton = true
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
      this.showScrollButton = false
      axios.post(`/coders/${this.urlFragment}`,{
          legenda: this.formCaption,
          title:this.formTitle,
          selected: this.selected,
          dateFrom: this.dateFrom,
          dateEnd: this.dateEnd
        },{params:{
          page: this.previousPageServer,
          limit: this.limit
        }})
        .then((data)=>{
           this.info2 = data.data.data
           this.totalPagesServer = data.data.totalPages
           this.nextPageServer = data.data.nextPage
            this.isLoading = false
            this.showScrollButton = true
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
      this.showScrollButton = false
      axios.post(`/coders/${this.urlFragment}`,{
          legenda: this.formCaption,
          title:this.formTitle,
          selected: this.selected,
          dateFrom: this.dateFrom,
          dateEnd: this.dateEnd
        },{params:{
          page: 1,
          limit: this.limit
        }})
        .then((data)=>{
           this.info2 = data.data.data
           this.totalPagesServer = data.data.totalPages
           this.nextPageServer = data.data.nextPage
           this.isLoading = false
           this.showScrollButton = true
           this.currentPageServer =1
            this.previousPageServer = 1
            this.isNextDisable = false
            this.isPreviousDisable = true
           
        })
   },
   lastPage(){
       this.isLoading = true
       this.showScrollButton = false
      axios.post(`/coders/${this.urlFragment}`,{
          legenda: this.formCaption,
          title:this.formTitle,
          selected: this.selected,
          dateFrom: this.dateFrom,
          dateEnd: this.dateEnd
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
          this.showScrollButton = true
          this.isNextDisable = true
          this.isPreviousDisable = false
        })
   },
  goToPageServer(){
    this.isLoading = true
    this.showScrollButton = false
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
          dateFrom: this.dateFrom,
          dateEnd: this.dateEnd
        },{params:{
          page: this.selectedPageServer,
          limit: this.limit
        }})
        .then((data)=>{
          this.isLoading = false
          this.showScrollButton = true
          this.isInputEmpty = true,
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
      },
      checkInInput(){
        this.isInputEmpty = false
      },
      checkOutInput(){
        if(this.selectedPageServer){
          this.isInputEmpty = false
        }else{
          this.isInputEmpty = true
        }
      },
      checkTimeStamp(timeStamp){
        if(timeStamp.includes(':')){
          return timeStamp
        }else{
           return new Date(timeStamp * 1000).toISOString().substr(11, 8)
        }
      }
   
 },
 mounted(){
 if(this.info2.length < this.limit){
   this.isOnePage = false
 }
 this.isPreviousDisable = true
 this.isInputEmpty = true
 }
}
</script>
