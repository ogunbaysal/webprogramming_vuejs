<template>
    <div class="wrapper">
        <div class="col-lg-12 col-md-12 col-xs-12" style="padding: 0; min-height: 700px;">
            <section class="row" id="basketTemplate">
                <section id="basketContent">
                    <div v-show="!isLoaded" style="">
                        <img src="https://img-trendyol.mncdn.com/Assets/web-basket/basket-placeholder.png" alt="Trendyol">
                    </div>
                    <div v-show="isLoaded">
                        <div class="partial-basket">
                            <div class="pb-wrapper">
                                <div class="pb-header">
                                    Sepetim ({{ items.length }} Ürün)
                                    <div class="pb-header-actions">
                                        <button type="button" @click="goHomePage" class="ty-font-w-semi-bold ty-button ty-bordered ty-transition ty-input-medium ty-notr">
                                            Alışverişe Devam Et
                                        </button>
                                    </div>
                                </div>
                                <div class="pb-info-message">
                                    <i class="i-user"></i>
                                    <div>
                                        <span>Alışverişini daha hızlı tamamlamak için</span><a class="ty-font-sm ty-font-w-semi-bold ty-link-button ty-transition ty-primary ty-input-small">Giriş Yap</a>
                                    </div>
                                </div>
                                <BasketItem v-for="item in items" :key="item.id" :basket-item="item" />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </div>
</template>

<script>
import BasketItem from "@/app/components/Basket/BasketItem";
import('@/app/views/Basket/basket.css');
export default {
    name: "Basket",
    components: {BasketItem},
    computed: {
        items() {
            return this.$store.getters["basket/basket"];
        }
    },
    methods: {
        goHomePage(){
            this.$router.push('/');
        }
    },
    data: function (){
        return {
            isLoaded: false
        }
    },
    beforeCreate() {
        this.isLoaded = false;
    },
    created: function (){
        this.isLoaded = true;
    }
}

</script>

<style scoped>

</style>