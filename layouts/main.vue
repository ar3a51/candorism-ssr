<template>
    <v-app>
        <v-toolbar
         :app="true" 
            :height="70"
            :flat="true"
            :fixed="true"
            :color="'#3f4257'">
        <v-spacer/>
        <div class="input-search-wrapper">
        <input type="text" 
            class="search-bar"
            placeholder="Search"/>
            </div>
             <v-spacer/>
            <v-spacer/>
             <v-spacer/>
              <v-spacer/>
            <div class="control-icon">
              <img src="~/assets/img/icons/olympHappyFace.png"/>
              <div class="label-avatar bg-blue">2</div>
            </div>
            <div class="control-icon">
                <img src="~/assets/img/icons/chat-icon.png"/>
                <div class="label-avatar bg-purple">3</div>
            </div>
             <div class="control-icon">
                <img src="~/assets/img/icons/thunder-icon.png"/>
                <div class="label-avatar bg-primary">4</div>
            </div>
            <v-spacer/>
            <div class="author">
                <div class="author-thumb">
                    <img src="~/assets/img/author-page.jpg"/>
                    <span class="icon-status online"></span>
                </div>
                 <a>
                        <div class="author-title">James Spiegel</div>
                        <span class="author-subtitle">Space Cowboy</span>
                    </a>
            </div>
        </v-toolbar>
        <v-content>
            <nuxt />
        </v-content>
    </v-app>
</template>
<script>

export default {
 
    
}
</script>
<style lang="scss" scoped>

$height: 70px;

.logo {
        width: 159px;
        height: 50px;
    }
.input-search-wrapper {
    width: 500px;
    background-color: #494c62;

    .search-bar {
        background-color: transparent;
        height: $height;
        padding-left: 10px;
        width: 100%;
        color: #9a9fbf;
    }
}

.author {
    box-sizing: box;

    .author-thumb {
        position: relative;
        float: left;
        padding-right: 10px;

        img {
            border-radius: 100%;
        }
        .icon-status {
            position: absolute;
            margin-right: 0;
            top: 0;
            left: 0;
            border: 1px solid #3f4257;
            width: 8px;
            height: 8px;
        }
    

        .online {
            background-color: #32e4cd;
        }
    }

    a {
        padding-top: 10px;
        
        .author-title {
            font-weight: 700;
            font-size: 12px;
            color: #fff;
        }

        .author-subtitle {
            display: block;
            font-weight: 700;
            color: #9a9fbf;
            font-size: 8px;
        }
    }
}

.control-icon {
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    img {
        width: 20px;
        height: 20px;
    }
    .label-avatar {
        width: 19px;
        height: 19px;
        line-height: 19px;
        top: -12px;
        right: 3px;
        border-radius: 100%;
        position: absolute;
        text-align: center;
        color: #fff;
        font-size: 10px;
        font-weight: 700;   
    }

    .bg-blue {
        background-color:#38a9ff;
    }

    .bg-purple {
        background-color:#7c5ac2;
    }

    .bg-primary {
        background-color:#007bff!important;
    }
}
</style>

