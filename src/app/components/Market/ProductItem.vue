<template>
    <div class="p-card-wrppr" data-id="4032918">
        <div class="p-card-chldrn-cntnr">
            <a :href="link">
            <div class="image-container">
                <div class="p-card-img-wr">
                    <img class="p-card-img" :src="product.images[0]">
                </div>
            </div>
            <div class="prdct-desc-cntnr-wrppr">
                <div class="prdct-desc-cntnr">
                    <div class="prdct-desc-cntnr-ttl-w">
                        <span class="prdct-desc-cntnr-ttl" title="TRENDYOL MAN">{{ product.brand }}</span>
                        <span
                            class="prdct-desc-cntnr-name hasRatings"
                            :title="product.title">{{ product.title }} {{ product.id }}
                        </span>
                    </div>
                </div>
                <div class="price-promotion-container">
                    <div class="prc-cntnr">
                        <div class="prc-box-sllng prc-box-sllng-w-dscntd">{{ product.price }} TL</div>
                    </div>
                    <div class="prmtn-cntnr" v-show="product.discount > 0">
                        <div class="prmtn" title="Sepette İndirim">
                            <div class="prmtn-ttl dscntd">SEPETTE %{{ product.discount }} İNDİRİM</div>
                            <div class="prc-box-dscntd">{{ net }} TL</div>
                        </div>
                    </div>
                </div>
            </div>
        </a></div>
        <div class="fvrt-btn-wrppr"><i class="fvrt-btn"></i></div>
    </div>
</template>

<script>
export default {
    name: "ProductItem",
    props: {
        product: {
            type: Object
        }
    },
    computed: {
        totalDiscount(){
          return (this.product.price * ( this.product.discount / 100 )).toFixed(2);
        },
        net(){
            return (this.product.price - this.totalDiscount).toFixed(2);
        },
        link(){
            return '/urun/' + this.product.id;
        }
    }
}
</script>

<style scoped>

</style>