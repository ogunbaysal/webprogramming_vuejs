<template>
    <div v-fragments>
        <div class="rnr-com-w">
            <div class="rnr-com-cn">
                <div class="rnr-com-tx">
                    <span class="rnr-inline-rating">
                        <Rating :rate=parseFloat(comment.rate) />
                    </span>
                    {{ comment.comment }}
                </div>
            </div>
            <div class="rnr-com-bt">
                <div><span class="rnr-com-usr">{{ comment.display_name ? comment.name : '**** ****' }} | {{
                        comment.date
                    }}</span><span
                    class="rnr-com-buy"><div
                    class="rnr-com-buy-ch"></div><span>Ürünü satın aldı</span></span></div>
            </div>
        </div>
        <div class="seperator"></div>
    </div>
</template>

<script>
import Rating from "@/app/components/Rating/Rating";

export default {
    name: "ProductComment",
    components: {Rating},
    props: {
        comment: {
            type: Object,
        }
    },
    directives: {
        fragments: {
            inserted: function(el) {
                const children = Array.from(el.children)
                const parent = el.parentElement
                children.forEach((item) => { parent.appendChild(item) })
                parent.removeChild(el)
            }
        }
    }
}
</script>

<style scoped>

</style>