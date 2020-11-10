<template>
    <article class="component-item">
        <a
            class="campaign campaign-big"
            data-type="banner"
            :href="link">
            <span class="image-container">
                <img :alt="title" :src="image"/>
            </span>
            <summary class="campaign-summary">
                <span class="name">{{ title }}</span>
                <div class="hover-text">
                    <span>Alışverişe Başla</span>
                    <i class="icon icon-arrow-banner-white"></i>
                </div>
            </summary>
        </a>
    </article>
</template>

<script>
export default {
    name: "BannerRectAdvertisement",
    created() {
    },
    props: {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>

</style>