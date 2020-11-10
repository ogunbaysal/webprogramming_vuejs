<template>
    <div class="ratings">
        <Star v-for="(i, index) in rate" :key="index" :empty="false" />
        <Star v-for="(i, index) in (5-rate)" :key="i*index" :empty="true"/>
        <span v-show="ratingCount !== undefined" class="ratingCount">({{ratingCount}})</span>
    </div>
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
    height: 22px;
    position: relative;
}

.ratings .ratingCount {
    font-size: 10px;
    color: #999;
    line-height: 14px;
    margin-left: 4px;
}

</style>