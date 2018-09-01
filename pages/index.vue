<template>
   <div class="grid-container">
       <div class="banner">
          <div class="welcome-login col-11">
              <section class="welcome-message hidden-sm-and-down col-md-6 col-lg-6 col-xl-6">
                  test
              </section>
              <section class="login-section col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <cando-login />
              </section>
          </div>
       </div>
        <div class="services">
            services
        </div>
        <div class="aboutus">
            aboutus
        </div>
   </div>
</template>
<script>
import CandoBox from '@/components/home-components/cando-box';
import LoginForm from '@/components/home-components/login-form';

export default {
    components: {
        'cando-box': CandoBox,
        'cando-login': LoginForm,
    },
    asyncData() {
        return {
            message: "hello ",
        }
    },
    layout: 'home',
}
</script>
<style lang="scss" scoped>
    .grid-container {
        display: grid;
        grid-template-rows: 100%;
        height: auto;

        .banner, .services, .aboutus {
            height: auto;
        }

        .banner {
           display: flex;
           justify-content: center;
           background-color: maroon;

           .welcome-login {
              
               height: auto;
               display: flex;
               justify-content: center;
               align-items: center;
               

               .welcome-message {
                  
                   display: flex;
                   //justify-content: flex-start;
                   align-items: center;
                   float: left;
               }

               .login-section {
                   
                   display: flex;
                   justify-content: center;
                   float: left;
               }
           }
        }
    }
</style>

