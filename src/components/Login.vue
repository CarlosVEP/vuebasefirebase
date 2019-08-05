<template>
    <div>
        <form @submit.prevent="login">
            <input type="text" v-model="userrr" placeholder="usuario"><br>
            <input type="password" v-model="passs" placeholder="contraseña"><br>
            <input type="submit" value="Login">
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'Login',
    data(){
        return{
            userrr:"",
            passs: ""
        }
    },
    methods: {
        login(){
            firebase.auth().signInWithEmailAndPassword( this.userrr, this.passs).then(user=>{console.log("login ");this.$router.replace('segura')},error=>console.log(error));
        }
    }
}
</script>

<style>

</style>
