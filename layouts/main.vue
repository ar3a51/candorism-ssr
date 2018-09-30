<template>
    <v-app>
       <left-nav-menu />
        <v-navigation-drawer
         :fixed="true"
         clipped
         right
         :flat="true"
         :mini-variant="true">

        </v-navigation-drawer>
        <v-toolbar
         v-if="true"
         :app="true" 
         :clipped-left="true"
         :clipped-right="true"
            :height="70"
            :flat="true"
            :fixed="true"
            :color="'#3f4257'">
          <v-toolbar-items>
            <div id="logo" class="logo">
                <img src="/logo.png"/>
            </div>
        </v-toolbar-items>
        <v-spacer/>
        <div class="input-search-wrapper">
            <input type="text" 
                class="form-control search-bar"
                placeholder="Search"/>
        </div>
        <v-spacer/>
        <v-spacer/>
        <v-spacer/>
        <v-spacer/>
            <div class="control-icon">
              <!--<img src="/assets/img/icons/olympHappyFace.png"/>-->
                <svg class="olymp-happy-face-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
              <div class="label-avatar bg-blue">2</div>
            </div>
            <div class="control-icon">
                <!--<img src="/img/icons/chat-icon.png"/>-->
                <svg class="olymp-chat---messages-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                <div class="label-avatar bg-purple">3</div>
            </div>
             <div class="control-icon">
                <!--<img src="/img/icons/thunder-icon.png"/>-->
                 <svg class="olymp-thunder-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-thunder-icon"></use></svg>
                <div class="label-avatar bg-primary">4</div>
            </div>
            <v-spacer/>
            <div class="author">
                <div class="author-thumb">
                    <img src="/img/author-page.jpg"/>
                    <span class="icon-status online"></span>
                </div>
                 <a>
                        <div class="author-title">James Spiegel</div>
                        <span class="author-subtitle">Space Cowboy</span>
                    </a>
            </div>
        </v-toolbar>
        <toolbar-mobile />
        <v-content>
            <div class="content">
                <nuxt />
            </div>
        </v-content>
    </v-app>
</template>
<script>
import leftNavMenu from '~/components/layouts/main/left-nav-drawer';
import toolbarMobile from '~/components/layouts/main/toolbar-mobile';
export default {
    components: {
        "left-nav-menu": leftNavMenu,
        "toolbar-mobile": toolbarMobile,
    }
}
</script>
<style lang="scss" scoped>
@import './css/control-icon';
@import './css/logo';

$height: 70px;

.input-search-wrapper {
    width: 500px;
    background-color: #494c62;

    .search-bar {
        background-color: transparent;
        height: $height;
        padding-left: 10px;
        width: 100%;
        color: #9a9fbf;
        border: none;
    }
    button {
        height: 10px;
        padding: 0px;
    }
}

.author {
    box-sizing: box;
    margin-right: 40px;

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
        float: left;
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


.content {
    top: $height;
    left: $height;
}


</style>

