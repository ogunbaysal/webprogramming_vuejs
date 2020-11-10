<template>
    <div class="star-w">
        <div class="empty">
            <div class="star"></div>
        </div>
        <div v-show="empty" class="full" style="width:0;max-width:100%">
            <div class="star"></div>
        </div>
        <div v-show="!empty" class="full" style="width:100%;max-width:100%">
            <div class="star"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Star",
    props: {
        empty: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>
.star-w {
    position: relative;
    margin-right: 2px;

}
.star-w .star {
    width: 14px;
    height: 14px;
    transform: scale(0.7);
}
.star-w .empty .star {
    background: url(https://trendyol.com/frontend/web/assets/images/svg/rating-and-review-small-star-grey.svg) no-repeat center !important;
}
.star-w .full {
    position: absolute;
    left: 0;
    top: 0;
    white-space: nowrap;
    overflow: hidden;
}
.star-w .full .star {
    background: url(https://trendyol.com/frontend/web/assets/images/svg/rating-and-review-small-star-orange.svg) no-repeat center !important;
}
</style>