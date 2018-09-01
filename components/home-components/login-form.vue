<template>
     <form class="form-group col-9">
         <h3>Login</h3>
        <input type="text" class="form-control" placeholder="Username"/>
        <input type="password" class="form-control" placeholder="Password"/>
        <button class="btn btn-width-100 btn-sign-in">Sign In</button>
        <button class="btn btn-width-100 btn-sign-up" @click.prevent="signUp">Sign Up</button>
    </form>
</template>
<script>
export default {
    methods:{
        signUp: function(e) {
           
            
            this.$router.push({path: "register"});
        }
    }
}
</script>
<style lang="scss" scoped>
    form {
        margin-top: 10%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10%;
       
        padding: 30px;
        background-color: #ccc;
        border-radius: 4px;

        .form-control {
            margin-bottom: 10px;
        }

        .btn-sign-in {
            background-color: green;
        }

        .btn-sign-up {
            background-color: blue;
            margin-top: 10px;
        }

        .btn-width-100 {
            width: 100%;
        }
    }
</style>
