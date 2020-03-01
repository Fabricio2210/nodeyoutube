<template>
    <div class="py-1">
  <b-navbar class="bgnav bordanav" fixed="top" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand class="titulo" href="#"><h3 class="fontTitulo">Developers Archives <v-icon name="laptop-code" scale="3"/></h3></b-navbar-brand>
         <b-navbar-nav class="link" >
            <router-link class="link" to="/" tag="b-nav-item">Home</router-link> 
            <router-link class="link" to="/about" tag="b-nav-item">About</router-link>
        </b-navbar-nav>
    </b-navbar>
  <br>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .bordanav{
    border-bottom: 2px ridge #FFFAFA !important;
    border-width: 80% !important;
    border-radius: 5px;
}
    .bgnav{
        background-color: #2d5bab !important;
    }
     .titulo{
      padding-right: 40px !important;
      font-family: 'Anton', sans-serif;
     
    }
    .fontTitulo{
       font-size: 2.2em !important;
       font-weight: bold !important
    }
    .link{
   font-family: 'Anton', sans-serif !important;
  font-size: 150% !important;
  
}
</style>