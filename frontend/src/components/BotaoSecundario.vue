<template>
    <button class="botao-secundario">
        {{ texto }}
    </button>
</template>


<script>
    export default {
        name: 'BotaoSecundario',
        props: { texto: String }
    }
</script>


<style scoped>
    .botao-secundario {
        margin: 0 5px;
        color: #3465F0;
        font-weight: 700;
        padding: 10px 20px;
        border-radius: 5px;
        border: 1px solid #3465F0;
        background-color: #FFFFFF;
    }
</style>
