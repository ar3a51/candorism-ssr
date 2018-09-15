<template>
     <v-dialog 
       v-model="display"
       :full-width="true"
       :persistent="true">
        <v-card>
            <v-card-title
            class="headline grey lighten-2"
            primary-title
            >
            Registration
            </v-card-title>
            <v-card-text>
               <v-stepper v-model="step">
                   <v-stepper-header>
                   <v-stepper-step :complete="step > 1" step="1">Masukkan No KTP</v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="step > 2" step="2">Masukkan Username</v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="3">Review details</v-stepper-step>
                   </v-stepper-header>
                   <v-stepper-items>
                       <v-stepper-content step="1">
                        <div class="id-no-query-wrapper col-12">
                            <div class="id-no col-10">
                            
                                <div class="col-4 float-left flex-container">
                                    <Label for="ktp">Masukkan no KTP:</Label>
                                </div>
                                <div class="col-4 float-left flex-container">
                                    <input type="text" v-model="$v.form.idNo.$model" class="form-control" name="ktp"/>
                                </div>
                                <div class="col-4 float-left flex-container">
                                    <v-btn color="info" :disabled="enableButtonSearch" @click.prevent="cari">Cari</v-btn>
                                </div>
                            </div>
                        </div>
                       </v-stepper-content>
                       <v-stepper-content step="2">
                             <div class="username-wrapper col-12">
                                <div class="username-box col-10">
                                    <div class="col-4 float-left flex-container">
                                        <label for="username">Username</label>
                                    </div>
                                    <div class="col-4 float-left flex-container">
                                        <input type="text" class="form-control" name="username" id="Username"
                                        placeholder="Masukan Username" v-model.trim="$v.form.username.$model"/>
                                    </div>
                                    <div class="col-4 float-left flex-container">
                                        <v-btn color="info" :disabled="enableButtonSubmit" @click.prevent="submit">Submit</v-btn>
                                    </div>
                                </div>
                            </div>
                       </v-stepper-content>
                       <v-stepper-content step="3">
                           <div class="user-details-wrapper col-12">
                            <div class="col-11 user-details float-left">
                                <div class="col-6 float-left">
                                    <fieldset class="form-group">
                                        <label for="name">Nama</label>
                                        <input type="text" class="form-control" 
                                            v-model="formComputedName"
                                            name="Nama" 
                                            id="Nama" readonly/>
                                    </fieldset>
                                    <fieldset class="form-group">
                                        <label for="alamat">Alamat1</label>
                                        <input type="text" 
                                        class="form-control" 
                                        name="Alamat1" 
                                        id="alamat1"
                                         readonly/>
                                    </fieldset>
                                    <fieldset class="form-group">
                                        <label for="alamat">Alamat2</label>
                                        <input type="text" 
                                        class="form-control" 
                                        name="Alamat2" 
                                        id="alamat2"
                                        readonly/>
                                    </fieldset>
                                    <fieldset class="form-group">
                                        <label for="RtRw">RT/RW</label>
                                        <input type="text" 
                                        class="form-control" 
                                        name="RtRw" 
                                        id="RtRw" 
                                        readonly/>
                                    </fieldset>
                                    <fieldset class="form-group">
                                        <label>Jenis Kelamin</label>
                                        <div>
                                            <div class="form-check form-check-inline">
                                                
                                                <input type="radio" name="gender" id="lk" value="lk" class="form-check-input">
                                                <label class="form-check-label" for="lk">Laki-laki</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                
                                                <input type="radio" name="gender" id="pr" value="pr" class="form-check-input">
                                                <label class="form-check-label" for="pr">Perempuan</label>
                                            
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div class="col-6 float-left">
                                    <fieldset class="form-group">
                                        <label for="namakel">Nama Keluarga</label>
                                        <input type="text" class="form-control" readonly name="namakel" />
                                    </fieldset>
                                    <fieldset class="form-group">
                                        <label for="status">Status</label>
                                        <input type="text" class="form-control" readonly name="status" />
                                    </fieldset>
                                    <fieldset class="form-group">
                                        <label for="kecamatan">Kecamatan</label>
                                        <input type="text" class="form-control" name="kecamatan" id="kecamatan" readonly/>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <div class="submit-button-wrapper flex-container col-11">
                                <v-btn class="success">Submit</v-btn>
                        </div>
                       </v-stepper-content>
                   </v-stepper-items>
               </v-stepper>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                flat
                @click.prevent="close">
                Close
            </v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>
</template>
<script>
import { required, minLength, between } from 'vuelidate/lib/validators'
export default {
    data() {
       
        return {
           
            step:1,
            form: {
                idNo: "",
                username: "",
                name: "",
                address1: "",
                address2: "",
                rtrw:"",
            }
        }
    },
   
    computed: {
      formComputedName:{
          get(){
                    return this.$store.state.home.registration.name; 
                },
      },
        display() {
         
                return this.$store.getters['home/isDisplay'];
        },
        enableButtonSearch() {
            return !this.$v.form.idNo.required || !this.$v.form.idNo.minLength
        },

        enableButtonSubmit() {
            return !this.$v.form.username.required || !this.$v.form.username.minLength
        }
    },
    validations: {
        form: {
            idNo: {
                required,
                minLength: minLength(3),
            },
            username: {
                required,
                minLength: minLength(4),
            }
        }
    },
    methods: {
        cari () {
            this.$store.dispatch('home/setIdNo', this.form.idNo);
           this.step +=1 ;
        },
        submit() {
            this.$store.dispatch('home/setUsername', this.form.username);
            this.step +=1;
        },
        close() {
            this.step = 1;
            this.reset();
            this.$store.commit('home/display',false);
        },
        reset() {
           return  {
                idNo: "",
                username: "",
                name: "",
            }
        }

    }
}
</script>
<style lang="scss" scoped>
 .float-left {
       float: left;
   }

   .flex-container {
       display: flex;
       align-items: center;

       height: 70px;
   }
   main {
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       height: auto;
      
      .id-no-query-wrapper {
          height: auto;
          float:left;
          display: flex;
          justify-content: center;
          padding-top: 20px;
          padding-bottom: 20px;

            .id-no {
                padding: 10px;
                
                border-radius: 4px;

                border-color: #ccc;
                border-width: 0.1em;
                border-style: solid;

                .btn {
                    justify-content: center;
                }
            }
       }

       .username-wrapper {
           display: flex;
           justify-content: center;
           align-items: center;

           .username-box {
               border-width: 0.1em;
               border-style: solid;
               border-color: #ccc;

                border-radius: 4px;
           }
       }
       .user-details-wrapper {
           height: auto;
           display: flex;
           justify-content: center;

           padding: 20px;

            .user-details {
                height: auto;

                .form-check {
                    margin-right: 60px;

                    .form-check-label {
                        margin-left: 40px;
                    }
                }
            }
       }

       .submit-button-wrapper {
           padding-left:40px;
       }
   }
</style>


