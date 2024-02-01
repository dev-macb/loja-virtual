<template>
    <header class="cabecalho-principal">
        <SiteConteiner>
            <div class="conteudo-principal">
                <div class="conteudo-principal-direita">
                    <h1>{{ logo }}</h1>
                </div>

                <div class="conteudo-principal-esquerda">
                    <BotaoSecundario texto="Entrar" />
                    <BotaoPrincipal texto="Registrar-se" />
                </div>
            </div>
        </SiteConteiner>
    </header>



    <header class="cabecalho-secundario">
        <SiteConteiner>
            <nav class="menu">
                <ul class="lista-menu">
                    <li class="item-menu"><a href="">Início</a></li>
                    <li class="item-menu"><a href="">Sobre</a></li>
                    <li class="item-menu"><a href="">Produtos</a></li>
                    <li class="item-menu"><a href="">Categorias</a></li>

                </ul>
            </nav>
        </SiteConteiner>
    </header>
</template>


<script>
    import SiteConteiner from './SiteConteiner.vue';
    import BotaoPrincipal from './BotaoPrincipal.vue';
    import BotaoSecundario from './BotaoSecundario.vue';

    export default {
        name: 'CabecalhoPrincipal',
        props: { logo: String },
        components: {
        SiteConteiner,
        BotaoPrincipal,
        BotaoSecundario
    }
    }
</script>


<style scoped>
    .cabecalho-principal {
        width: 100%;
        height: 70px;
        display: flex;
        color: #162A65;
        justify-content: center;
        background-color: #FFFFFF;
    }

    .conteudo-principal {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .conteudo-principal-direita {
        width: 70%;
        display: flex;
        justify-content: start;
    }

    .conteudo-principal-esquerda {
        width: 30%;
        display: flex;
        justify-content: end;
    }

    .cabecalho-secundario {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #5C84F3;
    }

    .menu {
        width: 100%;
        display: flex;
        
    }

    .lista-menu {
        display: flex;
        list-style-type: none;
    }

    .item-menu {
        margin-right: 30px;
        height: 30px;
        display: flex;
        align-items: center;
    }

    .item-menu a { 
        display: flex;
        color: #FFFFFF;
        font-weight: 500;
        text-decoration: none;
    }

    .item-menu a:hover {
        text-decoration: underline;

    }

</style>
