<template>
    <section class="cartao-promocao">
        <SiteConteiner>
            <div class="cartao-conteudo">
                <p>Oferta limitada para auto-falantes</p>
                <h3>Ganhe $ 10 extras apenas em alto-falantes</h3>
                <BotaoPrincipal texto="Comprar"></BotaoPrincipal>
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


<style>
    .cartao-promocao {
        display: flex;
        justify-content: center;
        padding: 30px 0;
        background-color: white;
    }
    .cartao-conteudo {
        background-color: #162A65;
        width: 100%;
        height: 200px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #FFF;
    }
</style>