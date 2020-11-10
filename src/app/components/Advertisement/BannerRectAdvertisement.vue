<template>
    <article class="component-item">
        <router-link :to="link" class="campaign campaign-big">
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
        </router-link>
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