<template>
    <div class="pr-in-dt">
        <div class="pr-in-at-tl-w">
            <div class="pr-in-at-tl">Ürün Bilgileri</div>
            <div class="pr-in-at-dsc">Tüm Özellikleri Gör</div>
        </div>
        <div class="pr-in-dt-dc"></div>
        <div class="pr-in-dt-cn">
            <ul v-html="product.description">
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductDescription",
    computed: {
        product(){
            return this.$store.getters['product/getProduct'];
        }
    }
}
</script>

<style scoped>

</style>