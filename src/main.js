import Vue from 'vue'
import firebase from 'firebase'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let app = "";

firebase.initializeApp({
    apiKey: "AIzaSyDMMGBz7Mi0e2cR4ZBHCAReLLr0CfnSPXs",
    authDomain: "rwwd-fa621.firebaseapp.com",
    databaseURL: "https://rwwd-fa621.firebaseio.com",
    projectId: "rwwd-fa621",
    storageBucket: "rwwd-fa621.appspot.com",
    messagingSenderId: "759392782909",
    appId: "1:759392782909:web:b9d5fde25a9da78f"
});

firebase.auth().onAuthStateChanged(() => {
    if(!app){
        app = new Vue({
            router,
            render: h => h(App)
        }).$mount("#app");
    }
});
