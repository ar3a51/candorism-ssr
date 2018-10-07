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
        <toolbar-mobile />
        <v-toolbar
         v-if="$vuetify.breakpoint.lgAndUp"
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
          <v-menu offset-y
                     fixed
                     :nudge-right="'10px'"
                     :open-on-click="false"
                     :open-on-hover="true"
                     :full-width="true">
            <div slot="activator" class="control-icon">
              <!--<img src="/assets/img/icons/olympHappyFace.png"/>-->
                <svg class="olymp-happy-face-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
              <div class="label-avatar bg-blue">2</div>
            </div>
             <v-list>
                    <v-list-tile
                    v-for="(item, index) in items"
                    :key="index"
                    @click=""
                    >
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-menu offset-y
                     fixed
                     :nudge-right="'10px'"
                     :open-on-click="false"
                     :open-on-hover="true">
            <div slot="activator" class="control-icon">
                <!--<img src="/img/icons/chat-icon.png"/>-->
                <svg class="olymp-chat---messages-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                <div class="label-avatar bg-purple">3</div>
            </div>
             <v-list>
                    <v-list-tile
                    v-for="(item, index) in items"
                    :key="index"
                    @click=""
                    >
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
             <v-menu offset-y
                     fixed
                     :nudge-right="'10px'"
                     :open-on-click="false"
                     :open-on-hover="true">
                <div slot="activator" class="control-icon">
                    <!--<img src="/img/icons/thunder-icon.png"/>-->
                    <svg class="olymp-thunder-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-thunder-icon"></use></svg>
                    <div class="label-avatar bg-primary">4</div>
                </div>
                 <v-list>
                    <v-list-tile
                    v-for="(item, index) in items"
                    :key="index"
                    @click=""
                    >
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-spacer/>
             <v-menu offset-y
                     fixed
                     :nudge-right="'10px'"
                     :open-on-click="false"
                     :open-on-hover="true">
                <div slot="activator" class="author">
            
                    <div  class="author-thumb">
                        <img src="/img/author-page.jpg"/>
                        <span class="icon-status online"></span>
                    </div>
                        <a>
                            <div class="author-title">James Spiegel</div>
                            <span class="author-subtitle">Space Cowboy</span>
                        </a>
                
                </div>
                  <v-list>
                    <v-list-tile
                    v-for="(item, index) in items"
                    :key="index"
                    @click=""
                    >
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
             </v-menu>
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
import '~/css/main.scss';
import leftNavMenu from '~/components/layouts/main/left-nav-drawer';
import toolbarMobile from '~/components/layouts/main/toolbar-mobile';
export default {
     data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    }),
    components: {
        "left-nav-menu": leftNavMenu,
        "toolbar-mobile": toolbarMobile,
    },
    mounted () {
        console.log(this.$vuetify.breakpoint)
    },
     computed: {
        imageHeight () {
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return '220px'
            case 'sm': return '400px'
            case 'md': return '500px'
            case 'lg': return '600px'
            case 'xl': return '800px'
        }
    }
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
    user-select: none;

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

