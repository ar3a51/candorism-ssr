<template>
 <v-navigation-drawer
         :fixed="true"
         clipped
         :flat="true"
         :mini-variant="true">
         <v-list class="nav-drawer-list" dense>
             <v-list-tile class="menu">
                  <svg class="olymp-menu-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="OPEN MENU">
                      <use xlink:href="/svg-icons/sprites/icons.svg#olymp-menu-icon"></use>
                  </svg>
             </v-list-tile>
              <v-list-tile class="menu">
                   <svg class="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right"   data-original-title="NEWSFEED"><use xlink:href="svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use></svg>
             </v-list-tile>
              <v-list-tile class="menu">
                   <svg class="olymp-star-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FAV PAGE"><use xlink:href="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
             </v-list-tile>
              <v-list-tile class="menu">
                    <svg class="olymp-happy-faces-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FRIEND GROUPS"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-faces-icon"></use></svg>
             </v-list-tile>
              <v-list-tile class="menu">
                    <svg class="olymp-headphones-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="MUSIC&PLAYLISTS"><use xlink:href="svg-icons/sprites/icons.svg#olymp-headphones-icon"></use></svg>
             </v-list-tile>
              <v-list-tile class="menu">
                     <svg class="olymp-weather-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="WEATHER APP"><use xlink:href="svg-icons/sprites/icons.svg#olymp-weather-icon"></use></svg>
             </v-list-tile>
             <v-list-tile class="menu">
                  <svg class="olymp-calendar-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="CALENDAR AND EVENTS"><use xlink:href="svg-icons/sprites/icons.svg#olymp-calendar-icon"></use></svg>
             </v-list-tile>
               <v-list-tile class="menu">
                 <svg class="olymp-badge-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Community Badges"><use xlink:href="svg-icons/sprites/icons.svg#olymp-badge-icon"></use></svg>
             </v-list-tile>
               <v-list-tile class="menu">
                   <svg class="olymp-cupcake-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Friends Birthdays"><use xlink:href="svg-icons/sprites/icons.svg#olymp-cupcake-icon"></use></svg>
             </v-list-tile>
               <v-list-tile class="menu">
                  <svg class="olymp-stats-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Account Stats"><use xlink:href="svg-icons/sprites/icons.svg#olymp-stats-icon"></use></svg>
             </v-list-tile>
               <v-list-tile class="menu">
                    <svg class="olymp-manage-widgets-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Manage Widgets"><use xlink:href="svg-icons/sprites/icons.svg#olymp-manage-widgets-icon"></use></svg>
             </v-list-tile>
         </v-list>
        </v-navigation-drawer>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
.nav-drawer-list {
    margin-top: 80px;

    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        svg {
            width: 20px;
            height: 20px;
            fill: #9A9FBF;
        }
    }
}
</style>