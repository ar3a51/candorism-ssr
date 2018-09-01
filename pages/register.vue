<template>
    <main>
        <div class="title col-12">
            <h1>welcome to our registration page</h1>
        </div>
        <div class="id-no-query-wrapper col-12">
            <div class="id-no col-10">
            
                <div class="col-4 float-left flex-container">
                    <Label for="ktp">Masukkan no KTP:</Label>
                </div>
                <div class="col-4 float-left flex-container">
                    <input type="text" class="form-control" name="ktp"/>
                </div>
                <div class="col-4 float-left flex-container">
                    <v-btn color="info" @click.prevent="submit">Submit</v-btn>
                </div>
            </div>
        </div>
        <div class="username-wrapper col-12">
            <div class="username-box col-10">
                <div class="col-6 float-left flex-container">
                     <label for="username">Username</label>
                </div>
                 <div class="col-6 float-left flex-container">
                      <input type="text" class="form-control" name="username" id="Username"
                    placeholder="Masukan Username"/>
                </div>
               
            </div>
        </div>
        <div class="user-details-wrapper col-12">
            <div class="col-11 user-details float-left">
                <div class="col-6 float-left">
 
                    <fieldset class="form-group">
                        <label for="name">Nama</label>
                        <input type="text" class="form-control" name="Nama" id="Nama" readonly/>
                    </fieldset>
                    <fieldset class="form-group">
                        <label for="alamat">Alamat1</label>
                        <input type="text" class="form-control" name="Alamat1" id="alamat1" readonly/>
                    </fieldset>
                     <fieldset class="form-group">
                        <label for="alamat">Alamat2</label>
                        <input type="text" class="form-control" name="Alamat2" id="alamat2" readonly/>
                    </fieldset>
                     <fieldset class="form-group">
                        <label for="RtRw">RT/RW</label>
                        <input type="text" class="form-control" name="RtRw" id="RtRw" readonly/>
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
                        <input type="text" class="form-control" readonly name="namakel" id="" />
                    </fieldset>
                    <fieldset class="form-group">
                        <label for="status">Status</label>
                        <input type="text" class="form-control" readonly name="status" id="" />
                    </fieldset>
                     <fieldset class="form-group">
                        <label for="kecamatan">Kecamatan</label>
                        <input type="text" class="form-control" name="kecamatan" id="kecamatan" readonly/>
                    </fieldset>
                </div>
            </div>
        </div>
          <div class="flex-container col-12">
                <v-btn class="success">Submit</v-btn>
         </div>
    </main>
</template>
<script>
export default {
    methods: {
        submit: function(e){
            alert("submitted");
        }
    },
    layout: "home"
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
   }
</style>

