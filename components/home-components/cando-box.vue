<template>
    <div class="box">
        <div class="flex center col-12">
            
                <slot name="title"></slot>
            
        </div>
        <div class="flex center col-12">
            <slot name="content"></slot>

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .flex {
        display: flex;
    }
    .center {
        justify-content: center;
    }
    .box {
        border-width: 0.1em;
        border-style: solid;
        border-color: #ccc;
        padding: 10px;
        margin: 10px;

        height: 400px;
        width: 400px;

        border-radius: 20px;
        
    }
</style>
