<template>
    <button class="botao-principal">
        {{ texto }}
    </button>
</template>


<script>
    export default {
        name: 'BotaoPrincipal',
        props: { texto: String }
    }
</script>


<style scoped>
    .botao-principal {
        margin: 0 5px;
        color: #FFFFFF;
        font-weight: 700;
        padding: 10px 20px;
        border-radius: 5px;
        border: 1px solid #3465F0;
        background-color: #5C84F3;
    }
</style>
