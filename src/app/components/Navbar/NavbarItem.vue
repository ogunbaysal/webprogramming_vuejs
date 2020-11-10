<template>
    <li class="tab-link" @mouseover="hover = true" @mouseleave="hover = false">
        <router-link :to="getLink(parent.slug)" class="category-header">
            {{ parent.title }}
        </router-link>
        <div class="sub-nav" :class="hover ? 'animation enable' : ''" :id="'sub-nav-'+ parent.title">
            <div class="sub-nav-center">
                <div class="sub-nav-outer">
                    <div class="normal-column" v-for="item in parent.children" :key="item.title">
                        <div class="category-box"><a :href="item.slug" class="sub-category-header">{{ item.title }}</a>
                            <ul class="sub-item-list">
                                <li v-for="child in item.children" :key="child.title">
                                    <router-link :to="getLink(child.slug)">{{ child.title }}</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="campaign-container">
                        <div class="normal-column small-collection-container">
                            <a
                            href="https://www.trendyol.com/tum--urunler?butik=537310,537311,537314,537320,537321,537312,537346,537347,537348,537364,537363,537362,537357,537344,537342,537341,537338,537398"><img
                            src="https://cdn.dsmcdn.com/marketing/datascience/automation/BrandBoutique/2020/10/26/KotonKadinErkekCocukTekstil_section1_202010262106_webSmall.jpg"></a><a
                            href="/trendyolmilla---trendyol-man---yeni-sezonda-firsat/butikdetay/537103/kadin">
                                <img
                                src="https://cdn.dsmcdn.com/mnresize/500/247/ty17/campaign/banners/original/537103/cadc045f74_1_detay.jpg"
                                alt="TRENDYOLMİLLA  &amp; TRENDYOL MAN - Yeni Sezonda Fırsat ">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>

export default {
    name: "NavbarItem",
    props: {
        parent: {
            type: Object,
            required: true
        }
    },
    data: function () {
        return {
            hover: false,
        }
    },
    methods: {
        getLink(slug){
            return '/urunler/' + slug;
        }
    }
}
</script>

<style scoped>
    .tab-link {
        flex-shrink: 0;
        flex-grow: 1;
    }

    .category-header {
        font-family: 'source_sans_proregular', sans-serif;
        font-weight: 600;
        color: #333;
        font-size: 16px;
        line-height: 40px;
        padding: 0;
        display: block;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        box-sizing: border-box;
    }

    .sub-nav {
        display: none;
    }


    .tab-link {
        flex-shrink: 0;
        flex-grow: 1;
    }
    .tab-link.tab-link-for-international {
        border-left: 1px solid #f2f2f2;
        border-right: 1px solid #f2f2f2;
        flex-grow: 0;
    }
    .tab-link.tab-link-for-international a.category-header {
        padding: 0 42px;
    }
    .tab-link:hover:not(.active) {
        box-shadow: inset 0 -2px 0 0 #f28232;
    }
    .tab-link:hover:not(.active) a.category-header {
        color: #f28232;
    }
    .tab-link a.category-header {
        font-family: 'source_sans_proregular', sans-serif;
        font-weight: 600;
        color: #333;
        font-size: 16px;
        line-height: 40px;
        padding: 0;
        display: block;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        box-sizing: border-box;
    }
    .tab-link.active {
        background: #f28232;
    }
    .tab-link.active > a {
        color: #ffffff;
    }
    .sub-nav {
        display: block;
        position: absolute;
        width: 100%;
        left: 0;
        height: 350px;
        max-height: 0;
        background: #fff;
        box-shadow: inset 0 0 1px 1px #ebebeb;
        overflow: hidden;
    }
    .sub-nav.enable {
        max-height: 350px;
    }
    .sub-nav.animation {
        transition: max-height 250ms;
    }
    .sub-nav .sub-nav-center {
        overflow: hidden;
        box-sizing: border-box;
        padding: 25px;
        width: 100%;
    }
    .sub-nav .sub-nav-center .sub-nav-outer {
        overflow: hidden;
        height: 300px;
    }
    .sub-nav .sub-nav-center .sub-nav-outer .campaign-container {
        display: flex;
        justify-content: center;
    }
    .sub-nav .normal-column {
        width: 147px;
        height: 300px;
        float: left;
        padding: 0 25px 0 1px;
        box-sizing: border-box;
        overflow: hidden;
    }
    .sub-nav .normal-column .category-box {
        margin-bottom: 10px;
    }
    .sub-nav .normal-column .category-box a.sub-category-header {
        font-size: 15px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        color: #333;
        position: relative;
        text-transform: none;
    }
    .sub-nav .normal-column .category-box a.sub-category-header:hover {
        color: #f27a1a !important;
        text-decoration: underline;
        transition: all linear 0.2s;
    }
    .sub-nav .normal-column .category-box .sub-item-list {
        padding: 0;
        margin: 5px 0 0 0;
        list-style: none;
    }
    .sub-nav .normal-column .category-box .sub-item-list li {
        padding-bottom: 4px;
    }
    .sub-nav .normal-column .category-box .sub-item-list a {
        font-family: 'source_sans_proregular', sans-serif;
        color: #666;
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
    }
    .sub-nav .normal-column .category-box .sub-item-list a:hover {
        color: #f27a1a !important;
        text-decoration: underline;
        transition: all linear 0.2s;
    }
    .sub-nav .small-collection-container {
        width: 275px;
        margin-left: 5px;
        padding: 0;
        text-align: right;
    }
    .sub-nav .small-collection-container:last-child {
        margin-left: 25px;
    }
    .sub-nav .small-collection-container img {
        margin-bottom: 15px;
        height: 137px;
        width: 265px;
        border: 0.8px solid #e7e7e7;
    }
    .sub-nav .small-collection-container img:hover {
        transform: scale(1.015);
        transition: all 1s ease;
    }


</style>