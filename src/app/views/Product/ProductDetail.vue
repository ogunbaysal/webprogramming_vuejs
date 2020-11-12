<template>
    <div id="product-detail-app">
        <div data-tracker-root="onTrackerReady" class="pd-app-container">
            <div class="pr-cn">
                <Gallery :images=product.images />
                <div class="pr-cn-in">
                    <ProductHead />
                    <ProductBody/>
                    <ProductDescription/>
                </div>
            </div>
            <FeaturedProducts/>
            <ProductComments/>
           <ProductProperties/>
        </div>
    </div>
</template>

<script>
import Gallery from "@/app/components/Gallery/Gallery";
import ProductHead from "@/app/components/Product/ProductHead";
import ProductBody from "@/app/components/Product/ProductBody";
import ProductDescription from "@/app/components/Product/ProductDescription";
import ProductComments from "@/app/components/Product/ProductComments";
import ProductProperties from "@/app/components/Product/ProductProperties";
import FeaturedProducts from "@/app/components/FeaturedProducts/FeaturedProducts";
// import product from "@/app/store/product";
import('@/app/views/Product/product.css');
export default {
    name: "ProductDetail",
    components: {
        FeaturedProducts,
        ProductProperties, ProductComments, ProductDescription, ProductBody, ProductHead, Gallery},
    created() {
        const product_id = this.$route.params.product_id;
        this.initializeData(product_id);
    },
    watch:{
        $route (to){
            this.initializeData(to.params.product_id);
        }
    },
    computed: {
        product() {
            return this.$store.getters["product/getProduct"];
        }
    },
    methods: {
        initializeData(product_id) {
            if(product_id !== undefined && product_id !== null && product_id !== '') {
                this.$store.dispatch('product/getProductDetail', product_id);
            }else{
                // this.$router.push('/404');
                // return false;
            }
        }
    }
}
</script>

<style scoped>

</style>