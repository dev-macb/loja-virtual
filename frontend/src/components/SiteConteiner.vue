<template>
    <div class="site-container">
        <slot></slot>
    </div>
</template>


<script>
    export default {
        name: 'SiteContainer'
    }
</script>


<style scoped>
    .site-container {
        width: 80%;
        display: flex;
    }
</style>
