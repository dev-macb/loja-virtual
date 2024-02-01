<template>
    <CabecalhoPrincipal logo='Loja Virtual'/>
    <BannerPrincipal />
    <CartaoPromocao />
    <h1>Categorias</h1>
    <img alt="Vue logo" src="./assets/logo.png">
</template>


<script>
    import CabecalhoPrincipal from './components/CabecalhoPrincipal.vue';
    import BannerPrincipal from './components/BannerPrincipal.vue';
import CartaoPromocao from './components/CartaoPromocao.vue';
    export default {
        name: 'App',
        components: {
    CabecalhoPrincipal,
    BannerPrincipal,
    CartaoPromocao
}
    }
</script>


<style>
    * {
        margin: 0;
        padding: 0;
    }
    #app {
        color: #2c3e50;
        text-align: center;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
</style>
