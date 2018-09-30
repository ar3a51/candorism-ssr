<template>
    <v-toolbar v-if="false"
            :app="true"
            :clipped-left="true"
            :clipped-right="true"
           :height="70"
            :flat="true"
            :fixed="true"
            :color="'#3f4257'"
            class="pl-0">
        <v-toolbar-items class="pl-0">
            <div id="logo" class="logo">
                <img src="/logo.png"/>
            </div>
        </v-toolbar-items>
        <div id="toolbar-mobile" class="toolbar-wrapper col-11">
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
        </div>
    </v-toolbar>
</template>
<script>
    export default {


    }
</script>
<style lang="scss" scoped>
 @import './css/control-icon';
 @import './css/label-avatar';
 @import './css/logo';

  

    #toolbar-mobile {
        display: flex;
        justify-content: center;

        .control-icon {
            margin-left: 5%;
            margin-right: 5%;
        }

    
    }

</style>