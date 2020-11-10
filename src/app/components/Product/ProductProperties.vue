<template>
    <div class="pr-prop" id="urun-ozellikleri">
        <div class="pr-prop-head title"><h3>Ürün Özellikleri</h3></div>
        <div class="pr-prop-content gnr-cnt-br">
            <div v-for="(item, index) in product.properties" :key="'k' + index">
                <div class="seperator"></div>
                <div class="prop-item">
                    <div class="item-key">{{item.name}} :</div>
                    <div class="item-value">{{item.value}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductProperties",
    computed: {
        product(){
            return this.$store.getters['product/getProduct'];
        }
    }
}
</script>

<style scoped>

</style>