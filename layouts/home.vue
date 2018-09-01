<template>
    <v-app>
        <v-navigation-drawer
        right 
        :app="true" 
        :temporary="true"
        v-model="display">
            <v-toolbar flat>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title class="title">
                            Navigation
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-divider />
            <v-list dense class="pt-0">
                <v-list-tile 
                    v-for="(link, index) in links"
                    :key="index"
                    @click.prevent="navigate(link.url)">
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{link.text}}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar 
            :app="true" 
            :height="60"
            :flat="false"
            :fixed="true">
            <img src="~/assets/candorism_logo.png" class="logo"/>
            <v-spacer/>
              <v-toolbar-side-icon 
                @click="display = !display"
                class="hidden-md-and-up" />
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat v-for="(link, index) in links" 
                    :key="index" 
                    :to="link.url"
                    :nuxt="true">
                    {{link.text}}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <nuxt />
        </v-content>
    </v-app>
</template>
<script>
export default {
    mounted() {
        console.log("mounted");
    },
    data() {
        return {
            display: false,
            links: [
                    { text: 'Home', url: '/'},
                    { text: 'Register', url: '/register'},
                    { text: 'About Us', url: '/#aboutus'}
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
    .logo {
        width: 159px;
        height: 50px;
    }

</style>

