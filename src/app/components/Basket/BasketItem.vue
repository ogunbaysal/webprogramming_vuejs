<template>
    <div class="pb-merchant-group">
        <div class="pb-merchant">
            <div class="pb-merchant-header">
                <div class="pb-merchant-info">
                    <div class="merchant-label">Satıcı:</div>
                    <div>
                        <div class="pb-merchant-details">
                            <div class="pb-merchant-name">{{ item.merchant }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pb-basket-item">
            <div class="ty-display-flex ty-color-black ty-font-sm ty-flex-column ty-input-w">
                <div class="ty-display-flex ty-checkbox-wrapper ty-checkbox-active">
                    <div class="ty-mgr-2 ty-relative ty-checkbox-container">
                        <div class="ty-bg-beige ty-mg-zero ty-input ty-checkbox ty-bordered">

                        </div>
                        <svg width="10px" height="8px" viewBox="0 0 10 8" class="ty-check">
                            <defs>
                                <path
                                    d="M9.5899229,0.750904919 L9.05581016,0.197010226 C8.92929033,0.0656835157 8.77535917,1.47881707e-13 8.59444438,1.47881707e-13 C8.41337405,1.47881707e-13 8.25948178,0.0656835157 8.13292307,0.197010226 L3.64220797,4.8610237 L1.64705174,2.78491655 C1.52033751,2.65354952 1.36656187,2.58794665 1.18564708,2.58794665 C1.00461564,2.58794665 0.85080112,2.65354952 0.724125768,2.78491655 L0.190013028,3.33885157 C0.0633376759,3.47017828 -5.00932629e-13,3.62977027 -5.00932629e-13,3.81746626 C-5.00932629e-13,4.00500096 0.0633376759,4.16471392 0.190013028,4.29604063 L2.25776069,6.44037154 L3.18076443,7.39743963 C3.30736202,7.52888731 3.46121541,7.59449018 3.64220797,7.59449018 C3.82312277,7.59449018 3.97697617,7.5286857 4.10365152,7.39743963 L5.02661638,6.44037154 L9.5899229,1.70805366 C9.71648161,1.57668663 9.77993593,1.41717528 9.77993593,1.22943897 C9.78001369,1.04186394 9.71648161,0.882271951 9.5899229,0.750904919"
                                    id="path-1"></path>
                            </defs>
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g transform="translate(-165.000000, -567.000000)">
                                    <g transform="translate(156.000000, 503.000000)">
                                        <g transform="translate(9.000000, 64.000000)">
                                            <mask id="mask-2" fill="white">
                                                <use href="#path-1"></use>
                                            </mask>
                                            <use id="Fill-1" fill="#FFFFFF" href="#path-1"></use>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <span class="ty-text ty-color-soft-gray ty-font-md ty-checkbox-text"></span></div>
            </div>
            <div class="pb-img-container">
                <img :src="item.images[0]" :alt="item.title">
            </div>
            <a href="/soho/siyah-kadin-bot-13786-p-31450976?boutiqueId=537560&amp;merchantId=968" class="pb-basket-item-details">
                <p class="pb-item" title="SOHO Siyah Kadın Bot 13786">
                    <span>{{ item.brand }}</span>{{ item.title }} {{ item.id }}
                </p>
                <p v-if="basketItem.options.body !== undefined">Beden: {{ basketItem.options.body }}</p>
<!--                <p>Tahmini Teslimat Tarihi: <span>2 - 6 Kasım</span>(Kargo Bedava)</p>-->
            </a>
            <div class="pb-basket-item-actions">
                <div class="pb-counter-container">
                    <div class="ty-display-flex ty-numeric-counter">
                        <button class="ty-numeric-counter-button" @click="removeItem">
                            <svg fill="#F27A1A" xmlns="http://www.w3.org/2000/svg" width="9" height="2" viewBox="0 0 9 2"><path d="M3.938 0H.562C.252 0 0 .253 0 .564L.004.63c.032.28.27.497.558.497l3.375-.002 1.126.002h3.375c.31 0 .562-.252.562-.563L8.996.497c-.032-.28-.27-.496-.559-.496H5.063L3.938 0z"></path></svg>
                        </button>
                        <input class="counter-content" type="text" pattern="[0-9]*" :value="basketItem.amount">
                        <button class="ty-numeric-counter-button" @click="addItem">
                            <svg fill="#F27A1A" xmlns="http://www.w3.org/2000/svg" width="9" height="9"
                                 viewBox="0 0 9 9">
                                <path
                                    d="M4.434.004c-.28.032-.497.27-.497.558v3.375H.563C.252 3.938 0 4.19 0 4.5l.004.066c.032.28.27.497.558.497l3.375-.002v3.377c0 .31.252.562.563.562l.066-.004c.28-.032.497-.27.497-.559V5.063h3.375c.31 0 .562-.252.562-.563l-.004-.066c-.032-.28-.27-.497-.559-.497H5.063V.563C5.063.252 4.81 0 4.5 0l-.066.004z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="pb-basket-item-price"><span>{{ total }} TL</span>{{ net }} TL</div>
                <button @click="hardRemove"><i class="i-trash"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BasketItem",
    props: {
        basketItem: {
            type: Object,
            required: true
        }
    },
    computed: {
        item(){
            return this.basketItem.item;
        },
        total(){
            return (this.item.price * this.basketItem.amount).toFixed(2);
        },
        discount(){
          return (this.total * (this.item.discount / 100)).toFixed(2);
        },
        net() {
          return (this.total - this.discount).toFixed(2);
        }
    },
    methods: {
        addItem(){
            this.$store.dispatch("basket/addBasketItem", this.basketItem);
        },
        removeItem(){
            this.$store.dispatch("basket/removeBasketItem", this.basketItem.id);
        },
        hardRemove(){
            const basket_id = this.basketItem.id;
            const amount = 0;
            this.$store.dispatch("basket/updateItemAmount", {
                basket_id, amount
            });
        }
    },
    created() {
    }
}
</script>

<style scoped>

</style>