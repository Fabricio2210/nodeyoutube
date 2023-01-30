<template>
<div>
  <Loading v-if="isLoading" />
  <b-row v-if="!isLoading" class="centerDiv">
    <b-col md="12" offset-md="2" class="pt-5">
       <p class="subTitulosm d-sm-block d-md-none pb-3"></p>
      <b-form> 
        <b-form-group id="input-group-4">
          <b-row>
            <b-col  class="d-none d-lg-block">
             <b-form-checkbox-group size="lg"  id="checkboxes-4">
              <b-form-checkbox  @change="byCaption" :disabled="bytitleCheck"  v-model="caption" value="caption" >Search by Keyword</b-form-checkbox>
            </b-form-checkbox-group>
          </b-col>
           <b-col class="d-sm-block d-md-none pl-3">
             <b-form-checkbox-group size="sm"  id="checkboxes-4">
              <b-form-checkbox  @change="byCaption" :disabled="bytitleCheck"  v-model="caption" value="caption" >Keyword</b-form-checkbox>
            </b-form-checkbox-group>
          </b-col>    
          <b-col  class="d-none d-lg-block">
             <b-form-checkbox-group size="lg">
              <b-form-checkbox @change="byTitle" :disabled="captionCheck"  v-model="bytitle" value="bytitle">Search by Title Only</b-form-checkbox>
            </b-form-checkbox-group>
          </b-col>
          <b-col  class="d-sm-block d-md-none smcheck">
             <b-form-checkbox-group size="sm">
              <b-form-checkbox @change="byTitle" :disabled="captionCheck"  v-model="bytitle" value="bytitle">Title</b-form-checkbox>
            </b-form-checkbox-group>
          </b-col>
          </b-row>
        </b-form-group>
        <b-col md="6" offset-md="1">
          <b-form-group
            id="input-group-1"
            :label="descricao"
            label-for="input-1"
            v-if="bytitle"
          >
            <div class="bordaForm p-3 mb-2 animated fadeIn">
              <b-form-input
              id="input-1"
              v-model="form.title"
              type="text"
              required
              placeholder="Title: (Required)"
              class="my-2"
               :class="[{animated:isError},{shake: isError}]"
            ></b-form-input> 
            <b-form-select class="mb-3" v-model="selected" :options="options"></b-form-select>
            <b-row class="d-flex justify-content-between">
            <b-col md="6" class="mb-3">
              <label class="labelDate">Start Date(Optional)</label>
              <b-form-input placeholder="teste" size='sm'  type="date" v-model="form.dateFrom"></b-form-input>
                </b-col>
                <b-col md="6" class="mb-3">
                  <label class="labelDate">End Date(Optional)</label>
                  <b-form-input placeholder="teste" size='sm'  type="date" v-model="form.dateEnd"></b-form-input>
                </b-col>
              </b-row>
            </div>
            <b-button block @click="onSubmitTitle" type="submit" variant="primary" class="resetButton animated fadeIn">Search</b-button>
          </b-form-group>
        </b-col>
      <b-col md="6" offset-md="1">
          <b-form-group
        id="input-group-2"
        :label="descricao"
        label-for="input-2"
        v-if="caption"
      >
         <div class="bordaForm p-3 mb-2 animated fadeIn">
          <b-form-input
            id="input-2"
            v-model="form.caption"
            type="text"
            required
            placeholder="Keyword: (Required)"
            class="my-3"
            :class="[{animated:isError},{shake: isError}]"
          ></b-form-input>
          
          <b-form-input
            id="input-1"
            v-model="form.title"
            type="text"
            placeholder="Video Title: (Optional)"
            class="my-3"
          ></b-form-input>
          <b-form-select class="mb-3" v-model="selected"  :options="options"></b-form-select>
           <b-row class="d-flex justify-content-between">
            <b-col md="6" class="mb-3">
              <label class="labelDate text-light">Start Date(Optional)</label>
              <b-form-input placeholder="teste" size='sm'  type="date" v-model="form.dateFrom"></b-form-input>
                </b-col>
                <b-col md="6" class="mb-3">
                  <label class="labelDate text-light">End Date(Optional)</label>
                  <b-form-input placeholder="teste" size='sm'  type="date" v-model="form.dateEnd"></b-form-input>
                </b-col>
              </b-row>
         </div>
         <b-button  block @click="onSubmitSubtitle" type="submit" variant="primary" class="resetButton animated fadeIn">Search</b-button>
      </b-form-group>
      </b-col>
    </b-form>
    </b-col>
  </b-row>
</div>
  
</template>

<script>
  import axios from 'axios' 
  import Loading from './Loader'
  import moment from 'moment'
  export default {
    components:{
      Loading
    },
    data() {
      return {
        form: {
          title: '',
          caption: '',
          info: '',
          dateFrom:'',
          dateEnd:''
        },
        selected: '',
        options:[
          { value: '', text: 'Please select a channel: (Optional)' },
          { value: 'Academind', text: 'Academind' },
          { value: 'Dev Ed', text: 'Dev Ed' },
          { value: 'The Net Ninja', text: 'The Net Ninja' },
          { value: 'Traversy Media', text: 'Traversy Media' },
          { value: 'Make Apps with Danny', text: 'Make Apps with Danny' },
          { value: 'Fireship', text: 'Fireship' },
          { value: 'Programming with Mosh', text: 'Programming with Mosh' },
          { value: 'DesignCourse', text: 'DesignCourse' },
          { value: 'Derek Banas', text: 'Derek Banas' },
          { value: 'DarkCode', text: 'DarkCode' },
          { value: 'Program With Erik', text: 'Program With Erik' },
          { value: 'Fun Fun Function', text: 'Fun Fun Function' },
          { value: 'Red Stapler', text: 'Red Stapler' },
          { value: 'Andre Madarang', text: 'Andre Madarang' },
          { value: 'Web Dev Simplified', text: 'Web Dev Simplified' },
        ],
        show: true,
        caption : false,
        bytitle: false,
        isError: false,
        descricao:'',
        isLoading: false,
        fullPage: true,
        bytitleCheck: false,
        captionCheck: false,
        page: 1,
        limit: 30
      }
    },
    components: {
            Loading
        },
    methods: {
      onSubmitTitle(evt){
        evt.preventDefault()
        let checkDate = moment(`${this.form.dateFrom}`, "YYYYMMDD").diff(moment(`${this.form.dateEnd}`, "YYYYMMDD"),'days')
        let checkDateTodayFrom = moment(`${this.form.dateFrom}`, "YYYYMMDD").diff(moment().format("YYYY-MM-DD"),'days')
        let checkDateTodayEnd = moment(`${this.form.dateEnd}`, "YYYYMMDD").diff(moment().format("YYYY-MM-DD"),'days')
      if(checkDate >= 0){
        this.form.dateEnd = this.form.dateFrom
      };
      if(checkDateTodayFrom >= 0){
        this.form.dateFrom = moment().format("YYYY-MM-DD")
      };
      if(checkDateTodayEnd >= 0){
        this.form.dateEnd = moment().format("YYYY-MM-DD")
      }
         this.isLoading = true
        axios.post('coders/title',{
          title: this.form.title,
          selected: this.selected,
          dateFrom: this.form.dateFrom,
          dateEnd: this.form.dateEnd
        },{params:{
          page: this.page,
          limit: this.limit
        }}
        )
        .then((data)=>{
          this.info = data.data.data
          this.$emit('info-video',this.info,this.page,this.limit,this.form.title,this.form.caption,this.selected,this.form.dateFrom,this.form.dateEnd,data.data.totalPages,data.data.totalResults,'title')
           this.isLoading = false 
           console.log(data.data.totalResults)  
        })
        .catch((erro)=>{
        this.descricao = erro.response.data.msg;
        this.isError = true;
         this.isLoading = false
           this.captionCheck = true
          this.bytitleCheck = true
        setTimeout(()=>{
          this.descricao = '';
          this.isError = false
        },3000)
        })
      },
         onSubmitSubtitle(evt){
        let checkDate = moment(`${this.form.dateFrom}`, "YYYYMMDD").diff(moment(`${this.form.dateEnd}`, "YYYYMMDD"),'days')
        let checkDateTodayFrom = moment(`${this.form.dateFrom}`, "YYYYMMDD").diff(moment().format("YYYY-MM-DD"),'days')
        let checkDateTodayEnd = moment(`${this.form.dateEnd}`, "YYYYMMDD").diff(moment().format("YYYY-MM-DD"),'days')
      if(checkDate >= 0){
        this.form.dateEnd = this.form.dateFrom
      };
      if(checkDateTodayFrom >= 0){
        this.form.dateFrom = moment().format("YYYY-MM-DD")
      };
      if(checkDateTodayEnd >= 0){
        this.form.dateEnd = moment().format("YYYY-MM-DD")
      }
        evt.preventDefault()
         this.isLoading = true
        axios.post('coders/subtitle',{
          legenda: this.form.caption,
          title:this.form.title,
          selected: this.selected,
          dateFrom: this.form.dateFrom,
          dateEnd: this.form.dateEnd
        },{params:{
          page: this.page,
          limit: this.limit
        }})
        .then((data)=>{
          this.info = data.data.data
          this.$emit('info-video',this.info,this.page,this.limit,this.form.title,this.form.caption,this.selected,this.form.dateFrom,this.form.dateEnd,data.data.totalPages,data.data.totalResults,'subtitle')
           this.isLoading = false
           
        })
        .catch((erro)=>{
        this.descricao = erro.response.data.msg;
        this.isError = true;
         this.isLoading = false
         
           this.captionCheck = true
          this.bytitleCheck = true
        setTimeout(()=>{
          this.descricao = '';
          this.isError = false
        },3000)
        })
      },
      
      byCaption(){
       this.caption = !this.caption;
       this.captionCheck = !this.captionCheck
       
      },
       byTitle(){
       this.bytitle = !this.bytitle;
       this.bytitleCheck = !this.bytitleCheck 
      }
    }
  }
</script>
