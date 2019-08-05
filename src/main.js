import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDBHipVwtEkYBQ4whANqENyFnIlakY_Hyw",
  authDomain: "login2-dd17f.firebaseapp.com",
  databaseURL: "https://login2-dd17f.firebaseio.com",
  projectId: "login2-dd17f",
  storageBucket: "",
  messagingSenderId: "785904655162",
  appId: "1:785904655162:web:e2e167060cfb4652"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function(user){
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
});

