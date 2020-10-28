<template>
    <div class="header">
        <div class="header__wrapper">
            <HeaderTop/>
            <div class="header__wrapper__sticky">
                <div class="sticky__content">
                    <div class="col-lg-3 col-md-3 col-xs-3 no-padding">
                        <a href="#" class="sticky__content__logo" title="Trendyol">
                            <img :src="logo" alt="Trendyol">
                        </a>
                    </div>
                    <HeaderSearchBar/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderTop from "@/app/components/Header/HeaderTop";
    import HeaderSearchBar from "@/app/components/Header/HeaderSearchBar";
    export default {
        name: "Header",
        components: {HeaderSearchBar, HeaderTop},
        data: function (){
            return {
              logo: require('../../assets/ty-logo.svg')
            };
        }
    }
</script>

<style>
    .header {
        width: 100%;
        position: relative;
        z-index: 1000;
        background: #ffffff;
    }
    .header__wrapper {
        width: 1080px;
        margin: 0 auto;
        height: 100%;
    }
    .sticky__content {
        height: 84px;
        width: 100%;
    }
    .sticky__content__logo {
        display: block;
        height: 50px;
        width: 194px;
        background-image: none;
        cursor: pointer;
        margin-top: 17px;
    }
    .sticky__content__logo img {
        width: 122px;
        height: 43px;
    }
</style>