<template>

    <section class="banner-principal">
        <SiteConteiner>
            <div class="banner-conteudo">
                <h1>Titulo da promoção</h1>
                <h2>sub-titulo da promoção</h2>
                <p>à partir <span>R$100</span></p>
                <BotaoPrincipal texto="Acessar"/>
            </div>
        </SiteConteiner>
    </section>

</template>


<script>
    import SiteConteiner from './SiteConteiner.vue';
    import BotaoPrincipal from './BotaoPrincipal.vue';

    export default {
    name: 'BannerPrincipal',
    components: { 
        SiteConteiner,
        BotaoPrincipal
    }
}
</script>


<style scoped>
    .banner-principal {
        display: flex;
        height: 500px;
        justify-content: center;
        background-color: #EAF0FE;
    }
    .banner-conteudo {
        display: flex;
        align-items: start;
        flex-direction: column;
        justify-content: center;
    }
    h1 {
        font-size: 3em;
    }
    h2 {
        font-weight: 300;
        text-transform: uppercase;
    }
</style>
