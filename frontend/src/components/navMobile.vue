<template>
<div>
   <b-navbar class="bgnav bordanav" fixed="top" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand class="titulo" href="#"><h6 class="fontTitulo">Developers Archives <v-icon name="laptop-code" scale="2"/></h6></b-navbar-brand>
         <b-navbar-nav class=" d-flex flex-row justify-content-center link" >
            <router-link class="link" to="/" tag="b-nav-item">Home</router-link> 
            <router-link class="link" to="/about" tag="b-nav-item">About</router-link>
        </b-navbar-nav>
    </b-navbar>
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
    
}
    .bgnav{
        background-color: #2d5bab !important;
    }
     .titulo{
       font-family: 'Anton', sans-serif;
     
    }
    .fontTitulo{
       font-size: 0.9em !important;
       font-weight: bold !important
    }
    .link{
    font-family: 'Anton', sans-serif !important;
 
  padding: 5px !important
  
}
</style>