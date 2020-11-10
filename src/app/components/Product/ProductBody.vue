<template>
    <div class="pr-in-at">
        <div style="display: none;">
            <div class="pr-in-at-tl-w atr">
                <div class="pr-in-at-tl">Renk</div>
            </div>
            <div class="pr-slc-w">
                <div class="slick-slider slick-initialized">
                    <div class="slick-list">
                        <div class="slick-track"
                             style="width: 147px; opacity: 1; transform: translate3d(0px, 0px, 0px);">
                            <div data-index="0" class="slick-slide slick-active slick-current"
                                 tabindex="-1" aria-hidden="false" style="outline: none; width: 49px;">
                                <div><a
                                    href="/trendyolmilla/mavi-uzun-oversize-orme-sweatshirt-twoaw20sw0322-p-46701614"
                                    class="pr-slc" title="Mavi">
                                    <div class="pd-img"><img
                                        src="https://cdn.dsmcdn.com/ty13/product/media/images/20200928/17/12378249/82241073/1/1_org.jpg"
                                        alt=""
                                        style="width: 39px; height: 58px; min-width: 39px; min-height: 58px;">
                                    </div>
                                </a></div>
                            </div>
                            <div data-index="1" class="slick-slide slick-active" tabindex="-1"
                                 aria-hidden="false" style="outline: none; width: 49px;">
                                <div><a
                                    href="/trendyolmilla/camel-uzun-oversize-orme-sweatshirt-twoaw20sw0325-p-50098631"
                                    class="pr-slc" title="Camel">
                                    <div class="pd-img"><img
                                        src="https://cdn.dsmcdn.com/ty13/product/media/images/20201003/14/13206661/88825739/1/1_org.jpg"
                                        alt=""
                                        style="width: 39px; height: 58px; min-width: 39px; min-height: 58px;">
                                    </div>
                                </a></div>
                            </div>
                            <div data-index="2" class="slick-slide slick-active" tabindex="-1"
                                 aria-hidden="false" style="outline: none; width: 49px;">
                                <div><a
                                    href="/trendyolmilla/siyah-fermuar-detayli-oversize-orme-sweatshirt-twoaw20sw0322-p-31813885"
                                    class="pr-slc selected" title="Siyah">
                                    <div class="selected pd-img"><img
                                        src="https://cdn.dsmcdn.com/ty12/product/media/images/20200922/17/11428379/57205743/1/1_org.jpg"
                                        alt=""
                                        style="width: 39px; height: 58px; min-width: 39px; min-height: 58px;">
                                    </div>
                                </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="seperator" style="display: none;"></div>
        <div class="pr-in-sz-w">
            <div class="pr-in-at-tl-w"><span class="pr-in-at-tl">Beden<!-- -->: <span
                class="tl-vr-vl">{{ this.selectedBody }}</span></span><span class="pr-in-at-vr-tb">Beden Tablosu</span></div>
            <div class="pr-in-at-sp">
                <div class="sp-itm" :class="selectedBody === item.type ? 'selected' : ''" v-for="item in product.body" :key="item.type" @click="selectedBody = item.type">
                    {{ item.type }}
                </div>
            </div>
        </div>
        <div style="display:flex">
            <button class="pr-in-btn add-to-bs" :class="addingBasket ? 'success' : ''" @click="addItemToBasket">
                <div class="add-to-bs-tx">Sepete Ekle</div>
                <div class="add-to-bs-tx-sc">Sepete Eklendi</div>
                <div class="add-to-bs-ldr"></div>
            </button>
            <button class="pr-in-btn fv">
                <div class="fv-hv-img"></div>
                <div class="tooltip">Favorilere Ekle</div>
            </button>
        </div>
        <div class="pr-dd-fv-dt">
            <div class="pr-dd">
                <div class="pr-dd-rs-w"><i class="pr-dd-icon rs"></i><span class="pr-dd-rs-text">Hızlı Teslimat: </span><span>6 - 11 Kasım</span>
                </div>
            </div>
            <div class="fv-dt">95802 kişinin favorisi</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductBody",
    computed: {
      product(){
          return this.$store.getters["product/getProduct"];
      }
    },
    data: () => ({
        selectedBody: 'M',
        addingBasket: false
    }),
    methods: {
        addItemToBasket(){
            this.addingBasket = true;
            const payload = {
                item: this.product,
                options: {
                    'body' : this.selectedBody
                }
            };
            this.$store.dispatch("basket/addBasketItem", payload);
            setTimeout(() => {
                this.addingBasket = false;
            }, 1500);
        }
    }
}
</script>

<style scoped>

</style>