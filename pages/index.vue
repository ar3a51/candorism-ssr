<template>
<main>
    <cando-reg-dialogue :display="isDisplayRegBox"/>
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
        <div class="services col-12" id="services">
            
                <cando-box>
                    <h2 slot="title">what is lorem?</h2>
                    <div slot="content">
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    </div>
                </cando-box>
            
               <cando-box>
                    <h2 slot="title">Where does it come from?</h2>
                    <div slot="content">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </div>
               </cando-box>
                <cando-box>
                    <h2 slot="title">
                        Why do we use it?
                    </h2>
                    <div slot="content">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </div>
                </cando-box>
            
        </div>
        <div class="aboutus" id="aboutus">
            aboutus
        </div>
       
   </div>
</main>
</template>
<script>
import CandoBox from '@/components/home-components/cando-box';
import LoginForm from '@/components/home-components/login-form';
import registrationDialogue from '@/components/home-components/registration-dialogue';
export default {
    components: {
        'cando-box': CandoBox,
        'cando-login': LoginForm,
        'cando-reg-dialogue': registrationDialogue,
    },
    data() {
    },
    computed: {
        isDisplayRegBox: function () {
            return this.$store.state.home.displayRegistration;
        }
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

        .services {
            height: auto;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            align-content: space-around;
            flex-wrap: wrap;
            padding-top: 20px;
            padding-bottom: 20px;

        }

        .aboutus {
            height: 800px;
        }
    }
</style>

