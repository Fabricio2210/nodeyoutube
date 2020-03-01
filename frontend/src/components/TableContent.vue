<template>
    <div class="animated fadeIn">
      <div v-if="info2.length">
      <div  class="row py-4">
        <div class="col-md-12 d-none d-lg-block">
          <h5 class="text-center">Found {{info2.length}} results divided into {{totalPages}} pages. </h5>
        </div>
        <div class="col-sm-12 pt-5  d-sm-block d-md-none">
          <p class="text-center paraInfo">Found {{info2.length}} results divided into {{totalPages}} pages. </p>
        </div>
        <div class="col-md-12 offset-md-4 d-none d-lg-block pl-5">
          <span class="text-center navButton pl-4">
            <button @click="first"><<</button>
            <button @click="prev"><</button>
            <span>{{currentPage}} </span>
            <button @click="next">></button>
            <button @click="last">>></button>
           </span>
            <p class="navButton pPadding"><input type="number" name="pin" maxlength="3" size="3" v-model="selectPage" class="inputNumber">
            <button @click="goToPage"><v-icon name="search" scale="1"/></button></p>
        </div> 
         <div class="col-sm-12  pb-2 d-sm-block d-md-none" >
          <div class="text-center navButtonsm ">
            <button @click="first"><<</button>
            <button @click="prev"><</button>
            <span class="paraInfo">{{currentPage}} </span>
            <button @click="next">></button>
            <button @click="last">>></button>
            <span class="navButtonsm"><input type="text" class="inputSearch" name="pin" maxlength="3" size="3" v-model="selectPage">
            <button @click="goToPage"><v-icon name="search" scale="1"/></button></span>
          </div>
        </div>  
        <b-button @click="resetar" class="resetButton" block variant="primary">New Search</b-button>   
      </div>
        <div  v-for="data in filteredPosts" v-bind:key="data.id">
            <div class="row py-2 bordaForm m-3 ">
              <br>
              <div class="col-md-4 pt-3">
                 <img class="img-thumbnail" :src="data.thumbnail"  alt="Card image cap">
              </div>
              <div class="col-md-6 d-none d-lg-block" style="padding-top: 40px !important">
                <p class="titleCard">Title:<a class="linkCard" :href="data.videoUrl" target="blank"> {{data.title}}</a></p>
                <p>Uploader : {{data.uploader}}</p>
                <p>Uploaded on : {{data.dataUpload | moment("MM/DD/YYYY")}}</p>
                <P v-if="data.context">Context : <a class="linkCard" :href="data.videoUrl" target="blank">"{{data.context}}"</a></P>
              </div>
              <div class="col-md-6 d-sm-block d-md-none" style="padding-top: 20px !important">
                <p class="titleCardSm">Title:<a class="linkCard" :href="data.videoUrl" target="blank"> {{data.title}}</a></p>
                <p class="titleCardSm">Uploader : {{data.uploader}}</p>
                <p class="titleCardSm">Uploaded on : {{data.dataUpload | moment("MM/DD/YYYY")}}</p>
                <P class="titleCardSm" v-if="data.context">Context : <a class="linkCard" :href="data.videoUrl" target="blank">"{{data.context}}"</a></P>
              </div>
            </div>
        </div>
        <div  class="row py-4">
        <div class="col-md-12 d-none d-lg-block">
          <h5 class="text-center">Found {{info2.length}} results divided into {{totalPages}} pages. </h5>
        </div>
        <div class="col-sm-12  d-sm-block d-md-none">
          <h6>Found {{info2.length}} results divided into {{totalPages}} pages. </h6>
        </div>
        <div class="col-md-12 offset-md-4 d-none d-lg-block pl-5">
          <span class="text-center navButton pl-4">
            <button @click="first"><<</button>
            <button @click="prev"><</button>
            <span>{{currentPage}} </span>
            <button @click="next">></button>
            <button @click="last">>></button>
           </span>
            <p class="navButton pPadding"><input type="number" name="pin" maxlength="3" size="3" v-model="selectPage" class="inputNumber">
            <button @click="goToPage"><v-icon name="search" scale="1"/></button></p>
        </div> 
         <div class="col-sm-12  pb-2 d-sm-block d-md-none" >
          <div class="text-center navButtonsm ">
            <button @click="first"><<</button>
            <button @click="prev"><</button>
            <span class="paraInfo">{{currentPage}} </span>
            <button @click="next">></button>
            <button @click="last">>></button>
            <span class="navButtonsm"><input type="text" class="inputSearch" name="pin" maxlength="3" size="3" v-model="selectPage">
            <button @click="goToPage"><v-icon name="search" scale="1"/></button></span>
          </div>
        </div>   
        <b-button @click="resetar" class="resetButton" block variant="primary">New Search</b-button>   
      </div>
      <div class="d-sm-block d-md-none">
        <br><br><br>
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
export default {
  props:['info2'],
 data(){
   return{
     teste:'sword',
     info: [],
     currentPage: 1,
      postsPerPage: 20,
      selectPage: ''
   }
 },
 methods:{
   next () {
    	if ( this.currentPage < this.totalPages) {
        this.currentPage++
        this.selectPage = ''
      }
    },
    prev () {
     
    	if (this.currentPage > 1) {
        this.currentPage--
         this.selectPage = ''
      }
    },
    last(){
     this.currentPage = this.totalPages
      this.selectPage = ''
    },
    first(){
      this.currentPage = 1
       this.selectPage = ''
    },
     resetar(){
         window.location.reload()
      },
      goToPage(){
        
        if(this.selectPage > this.totalPages){
          this.currentPage = this.totalPages
        }else{
          this.currentPage = this.selectPage
        }
      }
 },
 computed:{
   allPosts () {
    	return Object.keys(this.info2).map(pid => this.info2[pid])
    },
  	filteredPosts () {
      return  this.allPosts.slice((this.currentPage - 1) * this.postsPerPage, this.currentPage * this.postsPerPage )
    },
		totalPages () {
    	return Math.ceil(this.allPosts.length / this.postsPerPage)
    }
 }
}
</script>