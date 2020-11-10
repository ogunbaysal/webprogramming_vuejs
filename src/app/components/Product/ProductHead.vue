<template>
    <div class="pr-in-w">
        <div>
            <div class="pr-in-cn"><h1 class="pr-new-br"><a href="/trendyolmilla">{{ product.brand }}</a><span> {{product.title}} {{product.id}} </span>
            </h1>
                <div style="display:flex">
                    <div class="pr-bx-w">
                        <div class="pr-bx-nm"><span class="prc-slg">{{  product.price }} TL</span></div>
                    </div>
                </div>
            </div>
            <div class="stamps"></div>
        </div>
        <div class="pr-in-sl-ar" v-if="product.discount > 0">
            <div class="pd-in-pr-w">
                <a class="pd-in-pr basket"
                   href="#">
                    <span>% {{ product.discount }} İndirim</span>
                </a>
            </div>
            <div class="pr-ins-ar"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductHead",
    components: {},
    state: () => {

    },
    computed: {
        product() {
            return this.$store.getters["product/getProduct"];
        },
        calculateStar(){
            let totalStar = 0;
            let count = 0;
            this.product.comments.forEach(item => {
                count++;
                totalStar += item.star;
            });
            return parseInt(totalStar / count);
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>