<template>
    <div class="pr-rnr-w">
        <div class="pr-rnr-tl title">
            <div><h3>Ürün Değerlendirmeleri</h3></div>
        </div>
        <div class="pr-rnr-cn gnr-cnt-br">
            <div>
                <div class="pr-rnr-sm">
                    <div class="pr-rnr-sm-p"><span>{{ average_rate }}</span>
                        <div class="rt-st-avg">
                            <Rating :rate=parseInt(average_rate) />
                        </div>
                        <div class="tooltip-wrp" @mouseover="comments_star_expand = true" @mouseleave="comments_star_expand = false">
                            <div class="tooltip-main">
                                <div class="shw-rw-avg"><i class="rw-arr-dwn"></i></div>
                            </div>
                            <div class="tooltip" :class="comments_star_expand ? 'on' : ''" style="">
                                <div class="top-padding"></div>
                                <div><span class="avg-rt-txt-tltp"><span class="tltp-avg-cnt">4.3</span>Ortalama Puan</span>
                                    <div class="pr-rnr-rat-s">
                                        <div class="pr-rnr-st-ln">
                                            <div class="pr-rnr-st-v">5</div>
                                            <Rating :rate=5 />
                                            <div class="pr-rnr-prg">
                                                <div class="pr-rnr-prg-y star-5" style="width: 61.7194%;"></div>
                                            </div>
                                            <div class="pr-rnr-st-c">{{ commentsByRate[5] }}</div>
                                        </div>
                                        <div class="pr-rnr-st-ln">
                                            <div class="pr-rnr-st-v">4</div>
                                            <Rating :rate=4 />
                                            <div class="pr-rnr-prg">
                                                <div class="pr-rnr-prg-y star-4" style="width: 19.1403%;"></div>
                                            </div>
                                            <div class="pr-rnr-st-c">{{ commentsByRate[4] }}</div>
                                        </div>
                                        <div class="pr-rnr-st-ln">
                                            <div class="pr-rnr-st-v">3</div>
                                            <Rating :rate=3 />
                                            <div class="pr-rnr-prg">
                                                <div class="pr-rnr-prg-y star-3" style="width: 8.59692%;"></div>
                                            </div>
                                            <div class="pr-rnr-st-c">{{ commentsByRate[3] }}</div>
                                        </div>
                                        <div class="pr-rnr-st-ln">
                                            <div class="pr-rnr-st-v">2</div>
                                            <Rating :rate=2 />
                                            <div class="pr-rnr-prg">
                                                <div class="pr-rnr-prg-y star-2" style="width: 4.29846%;"></div>
                                            </div>
                                            <div class="pr-rnr-st-c">{{ commentsByRate[2] }}</div>
                                        </div>
                                        <div class="pr-rnr-st-ln">
                                            <div class="pr-rnr-st-v">1</div>
                                            <Rating :rate=1 />
                                            <div class="pr-rnr-prg">
                                                <div class="pr-rnr-prg-y star-1" style="width: 6.24493%;"></div>
                                            </div>
                                            <div class="pr-rnr-st-c">{{ commentsByRate[1] }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pr-rnr-sm-p-s">
                        <span>{{ this.product.comments.length }} Değerlendirme</span>
                     </div>
                    <div class="pr-rnr-bt"></div>
                </div>
            </div>
            <div class="seperator"></div>
            <div class="pr-rnr-com-w">
                <div class="pr-rnr-com">
                    <ProductComment v-for="(item, i) in product.comments" :key=i :comment="item" />
                </div>
                <form action="/router" method="post"><input type="text" name="type" hidden="" readonly=""
                                                            value="product-review"><input type="text"
                                                                                          name="query" hidden=""
                                                                                          readonly="" value="">
                    <button type="submit" class="pr-rnr-mr-btn gnr-cnt-br"><span>Daha Fazla Yorum Göster</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Rating from "@/app/components/Rating/Rating";
import ProductComment from "@/app/components/Product/ProductComment";
export default {
    name: "ProductComments",
    components: {ProductComment, Rating},
    computed: {
        product(){
            return this.$store.getters["product/getProduct"];
        }
    },
    data: () => ({
        comments_star_expand: false,
        average_rate: 0,
        commentsByRate: {
            5: 0,
            4: 0,
            3: 0,
            2: 0,
            1: 0
        }
    }),
    created() {
        let totalStar = 0;
        let i = 0;
        for(; i < this.product.comments.length; i++) {
            const star = parseInt(this.product.comments[i].star)
            totalStar += star;
            this.commentsByRate[star]++;
        }
        const total = i + 1;
        this.average_rate = (totalStar / total).toFixed(1);
    },
    methods: {

    }
}
</script>

<style scoped>
    .pr-rnr-sm .tooltip {
        transition: opacity 300ms ease-in-out 0s; opacity: 0; z-index: -1; top: 30px; left: calc(50% - 151.476px);
    }
    .pr-rnr-sm .tooltip-wrp .on {
        opacity: 1 !important; z-index: 999 !important;
    }
</style>