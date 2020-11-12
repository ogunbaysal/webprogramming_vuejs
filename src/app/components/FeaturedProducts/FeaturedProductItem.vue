<template>
    <div class="styles-module_item-container__a8zaY" style="width: 209.709px; pointer-events: all;">
        <a class="pr-rc-w with-fav">
            <router-link :to="'/urun/' + product.id" data-tracker="seen:recommendationImpression" data-product-id="35362744">
                <div class="pr-rc-img gnr-cnt-br ftrd-prd-crd">
                    <div class="zoom pd-img"><img :src="getRandomImage()" alt="" style="width: 190px; height: 282px; min-width: 190px; min-height: 282px;"></div>
                    <div class="custom-stamp-box-wrapper"><img class="featured-product-stamp ul" src="https://cdn.dsmcdn.com/marketing/datascience/automation/2020/10/26/Koyubordo_202010261649.png" style="width: 47.5px;"></div>
                </div>
                <div class="pr-rc-dc">
                    <div class="pr-nm-ct"><span class="pr-rc-br">{{ product.brand }}</span><span class="pr-rc-nm" title="Beyaz Crop Spor Sweatshirt TWOSS20SW0104">{{ product.title }} {{ product.id }}</span></div>
                    <div class="pr-bx-w">
                        <div class="pr-bx-nm"><span class="prc-slg prc-slg-w-dsc">{{ product.price }} TL</span></div>
                    </div>
                    <div class="pr-rc-prs" v-show="product.discount > 0">
                        <div class="pr-rc-prm basket" title="Sepette İndirim"><span class="pr-rc-pr-tx">Sepette %{{ product.discount }} İndirim</span><span class="prc-dsc">{{ net }}</span></div>
                    </div>
                </div>
            </router-link>
            <div class="fc-btn-fav">
                <button class="pr-in-btn fv">
                    <div class="fv-hv-img"></div>
                </button>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: "FeaturedProductItem",
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    computed: {
        totalDiscount(){
            return (this.product.price * ( this.product.discount / 100 )).toFixed(2);
        },
        net(){
            return (this.product.price - this.totalDiscount).toFixed(2);
        },
    },
    methods: {
        getRandomImage() {
            const index = Math.floor(Math.random() * this.product.images.length);
            return this.product.images[index];
        }
    }
}
</script>

<style scoped>

</style>