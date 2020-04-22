<template>
  <div class="home">
    <h1> Congratulations you have signed in!</h1>
      <p> Follow the link below to proceed to the website where you can now browse and order our food and drink</p>
    <span><a href = "http://localhost:8080/realworld/wordpress/food-and-drink/">Proceed to our purchase page! </a></span><br>
    <button @click = "logout"> Logout </button>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase';


export default {
  name: 'home',
  methods:{
      logout:function(){
          firebase.auth().signOut().then(() => {
              this.$router.replace("login");
          })
      },
  }
}
</script>
<style>
    body{
        background:#4B3F3D;
        color:white;
        font-weight:400;
    }
    h1{
        color:orange;
    }
    h3{
        color:orange;
    }
    p{
        color:white;
    }
    span{
        color:white;
        margin-bottom:10px;
    }
    a{
        color:white;
    }
    button{
        font-size:1.3em;
        margin-top:10px;
        width:auto !important;
        padding:6px;
        margin-left:6px;
    }

</style>