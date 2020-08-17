<template>
    <div class="py-1">
  <b-navbar class="bgnav bordanav" fixed="top" toggleable="lg" type="light" variant="info">
    <b-navbar-brand class="titulo"><h3 class="fontTitulo">DEVELOPERS ARCHIVES <v-icon name="laptop-code" scale="4"/></h3></b-navbar-brand>
         <b-navbar-nav class="link" >
            <router-link class="link" exact-active-class="active" to="/" tag="b-nav-item">Home</router-link> 
            <router-link class="link" exact-active-class="active" to="/about" tag="b-nav-item">About</router-link>
        </b-navbar-nav>
    </b-navbar>
  <br>
</div>
</template>
<script>
export default {
   data(){
     return{
       isActive: false,
       activeClass:""
     }
   } 
}
</script>
<style scoped>
    .bordanav{
    border-bottom: 2px solid #2d5bab !important;
    border-width: 80% !important;
}
    .bgnav{
        background-color: #f4f9fe !important;
    }
     .titulo{
      padding-right: 40px !important;
      font-family: 'Anton', sans-serif;
     
    }
    .fontTitulo{
       font-size: 2.2em !important;
       font-weight: bold !important;
      color: #2d5bab;
      text-shadow: 0px 0px 0 rgb(-19,27,107),
        1px 1px 0 rgb(15,-20,79),
        2px 2px 0 rgb(-27,-62,37),
        3px 3px 0 rgb(-70,-105,-6),
        4px 4px 0 rgb(-112,-147,-48),
        5px 5px 0 rgb(-155,-190,-91),
        6px 6px  0 rgb(-197,-232,-133),
        7px 7px 6px rgba(239,239,241,0.42),
        7px 7px 1px rgba(239,239,241,0.5),
        0px 0px 6px rgba(239,239,241,.2)
    }
    .link{
      font-family: 'Anton', sans-serif !important;
      font-size: 150% !important;
    }
</style>
