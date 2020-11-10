<template>
    <div class="pr-cn-gl">
        <div class="ph-gl-w">
            <div class="ph-gl-sml">
                <div class="slick-slider vertical slick-vertical slick-initialized" dir="ltr">
                    <button @click="prev()" type="button" data-role="none" class="slick-arrow slick-prev slick-disabled" style="display:block"> Previous</button>
                    <div class="slick-list" style="height: 620px;">
                        <div class="slick-track" style="opacity: 1; transform: translate3d(0px, 0px, 0px); height: 2356px;">
                            <div v-for="(item, index) in images" :key="index" :aria-hidden="current === index ? 'false' : 'true'" :data-index="index" :class="current === index ? 'slick-active slick-current' : ''" class="slick-slide" tabindex="-1" style="outline: none; width: 80px;">
                                <div>
                                    <div class="selected pd-img">
                                        <img alt="Image" :src="item" style="width: 78px; height: 114px; min-width: 78px; min-height: 114px;">
                                    </div>
                                </div>
                            </div>
                            <div v-for="(item, i) in images" :key="i" :data-index="images.length + i" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 80px;"></div>
                        </div>
                    </div>
                    <button @click="next()" type="button" data-role="none" class="slick-arrow slick-next" style="display:block"> Next</button>
                </div>
            </div>
            <div class="ph-gl-slc">
                <div class="slick-slider slick-initialized" dir="ltr">
                    <button @click="prev()" type="button" data-role="none" class="slick-arrow slick-prev" style="display:block"> Previous</button>
                    <div class="slick-list">
                        <div class="slick-track"
                             style="width: 7904px; opacity: 1; transform: translate3d(-416px, 0px, 0px);">
                            <div data-index="-1" tabindex="-1" class="slick-slide slick-cloned"
                                 aria-hidden="true" style="width: 416px;"></div>
                            <div v-for="(item, i) in images" :key="i" :data-index="i" :class="current === i ? 'slick-active slick-current' : ''" class="slick-slide" tabindex="-1" aria-hidden="false" style="outline: none; width: 416px;">
                                <div>
                                    <div style="cursor: crosshair; width: 415px; display: inline-block; height: 622px; position: relative; user-select: none;">
                                        <img
                                            :src="item"
                                            alt="Image"
                                            class="ph-gl-img"
                                            style="width: 415px; height: 622px; pointer-events: none;">
                                        <div
                                            style="transition: opacity 300ms ease-in 0s; background: rgba(255, 255, 255, 0.4); border: 1px solid rgb(0, 0, 0); box-sizing: border-box; position: absolute; top: 244px; left: 233px; width: 182px; height: 214px; opacity: 0;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button @click="next()" type="button" data-role="none" class="slick-arrow slick-next" style="display:block"> Next</button>
                </div>
                <div id="ph-lg-prt"></div>
                <img class="product-stamp ll"
                     src="https://cdn.dsmcdn.com//marketing/datascience/Automation/BrandBoutique/2020/11/5/genisbedenaraligi_20201105.png"
                     style="width:95.45px"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Gallery",
    data: () => ({
        current: 0
    }),
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    methods: {
        next(){
            if(this.images[this.current+1] === undefined) {
                this.current = 0;
            }else {
                this.current++;
            }
        },
        prev(){
            if(this.current === 0){
                this.current = this.images.length -1;
            }else{
                this.current--;
            }
        }
    }
}
</script>

<style scoped>

</style>