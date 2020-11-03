<template>
    <div class="ratings">
        <Star v-for="index in rate" :key="index" :empty="false" />
        <Star v-for="index in (4-rate)" :key="index" :empty="true"/>
        <span v-show="ratingCount !== undefined" class="ratingCount">(<!-- -->{{ratingCount}}<!-- -->)</span></div>
</template>

<script>
import Star from "@/app/components/Rating/Star";
export default {
    name: "Rating",
    components: {Star},
    props: {
        rate: {
            type: Number,
            required: true
        },
        ratingCount: {
            type: Number,
            required: false
        }
    }
}
</script>

<style scoped>
.ratings {
    display: flex;
}

.ratings .ratingCount {
    font-size: 10px;
    color: #999;
    line-height: 14px;
    margin-left: 4px;
}

</style>