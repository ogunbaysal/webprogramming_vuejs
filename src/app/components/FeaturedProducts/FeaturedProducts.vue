<template>
    <div class="pr-rcs-w">
        <div class="pr-rcs-tl title">
            <h3>Benzer Ürünler</h3>
        </div>
        <div class="pr-rcs-pds">
            <div tabindex="0" class="styles-module_carousel-base__3keqD crs-pr-crl">
                <button @click="slideLeft()" class="styles-module_carousel-arrow__26sRw" data-direction="left"></button>
                <div class="styles-module_item-provider__YgMwz">
                    <div class="styles-module_item-tracker__3bypy" :style="getTranslateStyle" style="transition: transform 0s ease 0s; width: 3145.63px;">
                        <FeaturedProductItem v-for="product in filteredProducts" :key="'fp1-' + product.id" :product="product"/>
                        <FeaturedProductItem v-for="product in filteredProducts" :key="'fp2-' + product.id" :product="product"/>
                        <FeaturedProductItem v-for="product in filteredProducts" :key="'fp3-' + product.id" :product="product"/>
                        <FeaturedProductItem v-for="product in filteredProducts" :key="'fp4-' + product.id" :product="product"/>
                        <FeaturedProductItem v-for="product in filteredProducts" :key="'fp5-' + product.id" :product="product"/>
                        <FeaturedProductItem v-for="product in filteredProducts" :key="'fp6-' + product.id" :product="product"/>
                        <FeaturedProductItem v-for="product in filteredProducts" :key="'fp7-' + product.id" :product="product"/>
                        <FeaturedProductItem v-for="product in filteredProducts" :key="'fp8-' + product.id" :product="product"/>
                        <FeaturedProductItem v-for="product in filteredProducts" :key="'fp9-' + product.id" :product="product"/>
                        <FeaturedProductItem v-for="product in filteredProducts" :key="'fp10-' + product.id" :product="product"/>

                    </div>
                </div>
                <button @click="slideRight()" class="styles-module_carousel-arrow__26sRw" data-direction="right"></button>
            </div>
        </div>
    </div>
</template>

<script>
import FeaturedProductItem from "@/app/components/FeaturedProducts/FeaturedProductItem";
export default {
name: "FeaturedProducts",
    components: {FeaturedProductItem},
    data: () => {
        return {
            translate: 0,
        }
    },
    computed: {
        filteredProducts(){
            return this.$store.getters["product/getFilteredProducts"];
        },
        getTranslateStyle() {
            return `transform: translateX(-${this.translate}px);`
        },
        totalItemCount(){
            return this.filteredProducts.length * 2;
        }
    },
    created() {
        if(this.filteredProducts === null || this.filteredProducts.length === 0) {
            this.initializeData();
        }
    },
    methods: {
        initializeData(){
            this.$store.dispatch('product/retrieveProducts');
        },
        slideLeft(){
            const end = this.totalItemCount * 1048.545;
            if(this.translate + 1048.545  >= end){
                this.translate = 0;
            }else{
                this.translate += 1048.545;
            }
        },
        slideRight(){
            const end = this.totalItemCount * 1048.545;
            if((this.translate - 1048.545) <= 0) {
                this.translate = end - 1048.545;
            }else{
                this.translate -= 1048.545;
            }
        }
    },
}
</script>

<style>
.styles-module_carousel-base__3keqD {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    outline: none;
}

.styles-module_item-provider__YgMwz {
    overflow: hidden;
    width: 100%;
    cursor: pointer;
}

.styles-module_item-container__a8zaY img {
    -webkit-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
}

.styles-module_item-tracker__3bypy {
    height: 100%;
    display: flex;
}

.styles-module_carousel-arrow__26sRw {
    z-index: 1;
}
</style>