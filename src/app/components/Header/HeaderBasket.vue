<template>
    <div @mouseover="hover = true" @mouseleave="hover = false">
        <div class="icon-container">
            <a href="/sepetim"> <i class="icon navigation-icon-basket"></i> </a>
        </div>
        <div class="nav-span">Sepetim</div>
        <div class="basket-item-count" v-show="basket.length > 0">
            <span id="basketItemCount">{{ basket.length }}</span>
        </div>
        <div id="headerBasketContentArea">
            <div id="basketPreviewcontent" class="basket-menu-container" v-show="hover">
                <div class="slideContainer">

                    <div class="slideUpBox">
                        <p>Sepetim <span v-show="basket.length > 0">({{ basket.length }} Ürün)</span></p>
                        <i><!-- Slideup icon--></i>
                    </div>
                    <ul class="basketProductList" :data-product-count="basket.length">
                        <li v-for="basketItem in basket" :key="basketItem.id">
                            <a :href="productUrl(basketItem.item.id)">
                                <div class="imageBox">
                                    <img :src="basketItem.item.images[0]" :alt="basketItem.item.title">
                                </div>
                                <div class="productInfoBox">
                                    <p>
                                        <span class="brandName">{{ basketItem.item.brand }}</span>
                                        <span class="productName">{{ basketItem.item.title }}</span>
<!--                                        <span><label class="productSize">Beden:</label> </span>-->
                                        <span><label class="productQuantity">Adet:</label> {{ basketItem.amount }}</span>
                                    </p>
                                    <p>
                                        <span class="salePrice">{{ (basketItem.item.price * basketItem.amount).toFixed(2)  }} TL</span>
                                    </p>
                                </div>
                            </a>
                            <span class="separator"></span>
                        </li>
                    </ul>

                    <div class="slideDownBox passive">
                        <i><!--slidedown icon--></i>
                    </div>
                </div>
                <div class="productPriceBox">
                    <a href="/sepetim" class="goBasket" >Sepete Git</a>

                    <a href="javascript:void(0)" class="CompleteOrder">Siparişi Tamamla</a>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderBasket",
    computed: {
        basket(){
            return this.$store.getters["basket/basket"];
        }
    },
    data: function (){
        return {
          hover: false
        };
    },
    methods: {
        productUrl(id){
            return '/urun/' + id;
        }
    }
}
</script>

<style scoped>

#basketPreviewcontent {
    text-align: left !important;
    width: 300px;
    top: 76px;
    right: 0;
    border: 1px solid #dcdcdc;
    position: absolute;
    z-index: 901;
    background-color: #fff;
    box-shadow: 0 4px 3px 1px rgba(0, 0, 0, .07)
}

#basketPreviewcontent:before {
    content: "";
    position: absolute;
    top: -22px;
    right: 0;
    width: 115px;
    height: 22px;
    display: block;
    background: url(https://trendyol.com/frontend/web/assets/images/svg/arrow-gray.svg) no-repeat 85px 12px
}

#basketPreviewcontent .slideDownBox i {
    background: url(https://trendyol.com/frontend/web/assets/images/header-slide-arrow-iconset.png) no-repeat bottom center;
    width: 100%;
    height: 10px;
    display: block;
    margin-top: 12px;
    z-index: 11
}

#basketPreviewcontent .slideUpBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 30px;
    background-color: #fafafa;
    border-bottom: 1px solid #dcdcdc;
    line-height: 30px;
    z-index: 10
}

#basketPreviewcontent .slideUpBox i {
    background: url(https://trendyol.com/frontend/web/assets/images/header-slide-arrow-iconset.png) no-repeat top center;
    width: 100%;
    height: 10px;
    display: none;
    margin-top: 12px
}

#basketPreviewcontent .passive {
    height: 20px;
    cursor: inherit
}

#basketPreviewcontent .active p, #basketPreviewcontent .passive i {
    display: none !important
}

#basketPreviewcontent .active {
    cursor: pointer
}

#basketPreviewcontent .active i {
    display: block !important
}

#basketPreviewcontent .productPriceBox {
    float: left;
    width: 300px;
    margin: 10px 0
}

#basketPreviewcontent .productPriceBox p {
    font-size: 17px;
    color: #f27a1a;
    font-family: oxygen;
    font-weight: 700;
    text-align: right;
    width: 285px;
    padding: 0 5px 10px 0
}

#basketPreviewcontent .productPriceBox span {
    font-size: 15px;
    color: #333
}

#basketPreviewcontent .productPriceBox a {
    float: left;
    width: 128px;
    height: 33px;
    line-height: 33px;
    text-align: center;
    font-size: 14px;
    border-radius: 4px;
    margin-left: 14px
}

#basketPreviewcontent .productPriceBox .goBasket {
    background-color: #fafafa;
    border: 1px solid #e6e6e6;
    color: #333
}

#basketPreviewcontent .productPriceBox .CompleteOrder {
    background-color: #f27a1a;
    border: 1px solid #f27a1a;
    color: #fff;
    font-family: source_sans_proregular;
    font-weight: 600
}

#basketPreviewcontent .slideContainer {
    position: relative;
    float: left;
    width: 300px;
    max-height: 301px;
    overflow: hidden
}

#basketPreviewcontent .slideContainer .slideUpBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 30px;
    background-color: #fafafa;
    border-bottom: 1px solid #dcdcdc;
    line-height: 30px;
    z-index: 10
}

#basketPreviewcontent .slideContainer ul li {
    position: relative;
    float: left;
    width: 280px;
    height: 100px;
    padding: 10px;
    margin: 0
}

#basketPreviewcontent .slideContainer ul li a .imageBox .countDown {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 66px;
    height: 20px;
    background: #000 !important
}

#basketPreviewcontent .slideContainer ul li a .imageBox .countDown .countdown_row {
    width: 100%;
    height: 20px;
    line-height: 21px;
    display: block;
    background: url(https://trendyol.com/frontend/web/assets/images/time-icon.png) no-repeat 9px 5px;
    font-size: 11px;
    text-align: center;
    color: #fff
}

#basketPreviewcontent .slideContainer ul li a .imageBox .alert {
    background: rgba(179, 28, 4, .7) !important
}

#basketPreviewcontent .slideContainer ul li a .productInfoBox {
    float: left;
    display: block;
    width: 200px;
    margin-left: 10px;
    font-size: 13px;
    color: #333
}

#basketPreviewcontent .slideContainer ul li a .productInfoBox span.productName {
    width: 210px
}

#basketPreviewcontent .slideContainer ul li a .productInfoBox span.brandName {
    font-family: source_sans_proregular;
    font-weight: 600
}

#basketPreviewcontent .slideContainer ul li a .productInfoBox span.productSize {
    font-style: normal;
    font-family: source_sans_proregular;
    font-weight: 600
}

#basketPreviewcontent .slideContainer ul li a .productInfoBox span.quantityMessage {
    float: left;
    width: 45%;
    display: inline-block;
    color: #b31c04
}

#basketPreviewcontent .slideContainer ul li a .productInfoBox span.salePrice {
    float: right;
    text-align: right;
    width: 45%;
    display: inline-block;
    font-size: 14px;
    color: #f27a1a;
    font-family: oxygen
}

#basketPreviewcontent .noproduct {
    padding: 15px 15px 5px;
    text-align: center
}

#basketPreviewcontent .noproduct p {
    font-size: 12px;
    color: #666
}

#basketPreviewcontent .noproduct p:first-child {
    font-family: source_sans_proregular;
    font-weight: 600;
    font-size: 14px;
    color: #333;
    margin-bottom: 10px
}

.user-navigation-container ul #myBasketListItem first-child {
    margin-left: 0
}
</style>