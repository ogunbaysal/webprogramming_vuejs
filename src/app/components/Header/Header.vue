<template>
    <div id="headerMain">
        <div class="wrapper">
            <HeaderTop/>
            <div class="sticky-header">
                <div class="header">
                    <div class="col-lg-3 col-md-3 col-xs-3 no-padding">
                        <router-link to="/" class="sticky__content__logo">
                            <img :src="logo" alt="Trendyol">
                        </router-link>
                    </div>
                    <div class="searchbar col-lg-6 col-md-6 col-xs-6 no-padding">
                        <div class="searchbar__app">
                            <Autocomplete/>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-xs-3 no-padding" id="accountNavigation">
                        <div id="accountNavigationRoot">
                            <div class="user-navigation-container no-price">
                                <ul class="user-navigation">
                                    <li id="accountBtn" class="login-register-button-container">
                                        <div class="icon-container">
                                            <i class="icon navigation-icon-user"></i>
                                        </div>
                                        <div class="login-container">
                                            <GuestNavigation v-if="isLoggedIn === false"/>
                                            <AccountNavigation v-if="isLoggedIn"/>
                                        </div>
                                    </li>
                                    <li data-url="/Hesabim/Favoriler" id="favoritesButton">
                                        <div class="icon-container">

                                            <i class="icon navigation-icon-favorites"></i>

                                        </div>
                                        <div class="nav-span">Favorilerim</div>
                                    </li>
                                    <li id="myBasketListItem" class="basket-button-container">
                                        <HeaderBasket/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderTop from "@/app/components/Header/HeaderTop";
    import Autocomplete from "@/app/components/Autocomplete/Autocomplete";
    import GuestNavigation from "@/app/components/Header/GuestNavigation";
    import AccountNavigation from "@/app/components/Header/AccountNavigation";
    import HeaderBasket from "@/app/components/Header/HeaderBasket";
    export default {
        name: "Header",
        components: {HeaderBasket, AccountNavigation, GuestNavigation, Autocomplete, HeaderTop},
        computed: {
            isLoggedIn(){
                return this.$store.getters["account/isLoggedIn"];
            }
        },
        data: function (){
            return {
              logo: require('../../assets/ty-logo.svg')
            };
        }
    }
</script>

<style>
    #headerMain {
        width: 100%;
        position: relative;
        z-index: 1000;
        background: #ffffff;
    }
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
    .searchbar {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .searchbar__app {
        width: 100%;
        display: flex;
        justify-content: center;
    }


    .user-navigation-container {
        float: right;
        margin-top: 12px
    }

    .user-navigation-container .hidden-container {
        display: none
    }

    .user-navigation-container ul {
        float: right
    }

    .user-navigation-container ul li {
        text-align: center;
        margin: 9px 0 0 23px;
        height: 50px;
        display: inline-block
    }

    .user-navigation-container ul li .icon-container {
        height: 21px;
        width: 23px;
        margin: 0 auto 5px
    }

    .user-navigation-container ul li .icon-container i {
        display: inline-block;
        float: none
    }

    .user-navigation-container ul li .icon-container i.navigation-icon-user {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDE5IDIwIj4gICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMzMzMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPiAgICAgICAgPHBhdGggZD0iTTE4IDE4Ljg1N0gxYzAtNC42OTQgMy44MDQtOC41IDguNS04LjVzOC41IDMuODA2IDguNSA4LjV6TTEzLjc1IDUuMjVBNC4yNTIgNC4yNTIgMCAwIDEgOS41IDkuNWE0LjI1MiA0LjI1MiAwIDAgMS00LjI1LTQuMjVBNC4yNTIgNC4yNTIgMCAwIDEgOS41IDFhNC4yNTIgNC4yNTIgMCAwIDEgNC4yNSA0LjI1eiIvPiAgICA8L2c+PC9zdmc+);
        width: 19px;
        height: 20px
    }

    .user-navigation-container ul li .icon-container i.navigation-icon-favorites {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyM3B4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMyAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5TdHJva2UgMjYyPC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxnIGlkPSJQYWdlLTUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+ICAgICAgICA8ZyBpZD0iSGVhZGVyLUljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM5LjAwMDAwMCwgLTQ5LjAwMDAwMCkiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjUiPiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNC1Db3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Ni4wMDAwMDAsIDQ4LjAwMDAwMCkiPiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuMDAwMDAwLCAwLjAwMDAwMCkiPiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEzIj4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAyLjU4ODY4OSw3LjUzMDcxMTkyIEMxMDIuNTg4Njg5LDAuOTg0Njk4ODg5IDkzLjM0NTU4LDAuMTM4NzUyNTg4IDkyLjI5NTExOTIsNi42ODMyMTYyNyBDOTEuMjQ0NjU4NCwwLjEzODc1MjU4OCA4MiwwLjQ4MjcwODc3NiA4Miw3LjUzMDcxMTkyIEM4MiwxNC41NzcxNjU3IDkyLjI5NTExOTIsMjAuMjI5MjAyNSA5Mi4yOTUxMTkyLDIwLjIyOTIwMjUgQzkyLjI5NTExOTIsMjAuMjI5MjAyNSAxMDIuNTg4Njg5LDE0LjA3MzYyNjMgMTAyLjU4ODY4OSw3LjUzMDcxMTkyIFoiIGlkPSJTdHJva2UtMjYyIj48L3BhdGg+ICAgICAgICAgICAgICAgICAgICA8L2c+ICAgICAgICAgICAgICAgIDwvZz4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=);
        width: 23px;
        height: 20px
    }

    .user-navigation-container ul li .icon-container i.navigation-icon-basket {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4gICAgPHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iLjEiIGQ9Ik0xOC41MjMgMTUuNjJINi41MjJjLS4zMyAwLS42NDUtLjMtLjY4Ny0uNjUxTDQuNTc3IDYuMDkzbC0uNzEyLTQuMTE4QzMuNzM1LjkwOSAyLjc5OC4wNzQgMS43My4wNzRILjc5MmEuNzE5LjcxOSAwIDAgMC0uMDAxIDEuNDM3aC45NGMuMzQzIDAgLjY3LjMxLjcxNS42NzJsLjcxNCA0LjEzMyAxLjI1MyA4Ljg0Yy4xMyAxLjA2NiAxLjA1NSAxLjkgMi4xMSAxLjloMTJhLjcxOC43MTggMCAxIDAgMC0xLjQzNnpNMjAuMiAyLjk1MWwtLjAwMi0uMDAxYTEuOTA0IDEuOTA0IDAgMCAwLTEuNDQ0LS42NTVINS45NjRhLjcxOS43MTkgMCAwIDAtLjAwMiAxLjQzNmgxMi43OTNjLjE0My0uMDAyLjI4LjA2MS4zNzEuMTcuMTUuMTcuMjI1LjQ0Ny4xOTMuNzFsLTEuMTYzIDYuNjY4Yy0uMDQzLjM1Mi0uMzc2LjY0LS43MzcuNjQxbC0xMC4wMjYuNzQyYS43MDUuNzA1IDAgMCAwLS40ODkuMjQ2LjcyLjcyIDAgMCAwIC41OTUgMS4xODVsOS45NzItLjczOGEyLjE0OCAyLjE0OCAwIDAgMCAyLjEwMy0xLjg2NWwxLjE2NC02LjY2OGMuMDg1LS43MDgtLjExMS0xLjM5LS41MzgtMS44NzJ2LjAwMXpNNi43MTMgMjAuNzU4YTEuNDYgMS40NiAwIDAgMCAwLTIuOTE4IDEuNDU5IDEuNDU5IDAgMCAwIDAgMi45MTh6bTEwLjM0NSAwYTEuNDYgMS40NiAwIDAgMCAuMDAxLTIuOTE4IDEuNDYgMS40NiAwIDAgMC0uMDAxIDIuOTE4eiIvPjwvc3ZnPg==);
        width: 21px;
        height: 21px
    }
    .user-navigation-container ul li .nav-span, .user-navigation-container ul li span {
        line-height: 15px;
        font-size: 12px;
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container, .user-navigation-container ul li .login-container .login-panel-container {
        display: none
    }
    .user-navigation-container ul li .login-container {
        position: relative;
        display: block;
    }

    .user-navigation-container ul li .login-container {
        position: relative;
        display: block
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container, .user-navigation-container ul li .login-container .login-panel-container {
        font-weight: 400 !important;
        position: absolute;
        left: -79px;
        background-color: #fff;
        box-shadow: 0 4px 3px 1px rgba(0, 0, 0, .07);
        border: solid 1px #d6d6d6;
        display: none
    }

    .user-navigation-container ul li .login-container .login-panel-container {
        padding: 15px;
        width: 174px;
        top: 30px;
        z-index: 1000
    }

    .user-navigation-container ul li .login-container .login-panel-container:before {
        content: "";
        position: absolute;
        top: -12px;
        left: 45%;
        width: 26px;
        height: 12px;
        display: block;
        background: url(https://trendyol.com/frontend/web/assets/images/menu-hover-bg.png) no-repeat 0 0
    }

    .user-navigation-container ul li .login-container .login-panel-container:after {
        content: "";
        position: absolute;
        top: -15px;
        left: 0;
        width: 170px;
        height: 30px;
        display: block
    }

    .user-navigation-container ul li .login-container .login-panel-container .account-button {
        width: 100%;
        height: 34px;
        line-height: 34px;
        text-align: center;
        cursor: pointer;
        font-family: source_sans_proregular;
        font-weight: 600
    }

    .user-navigation-container ul li .login-container .login-panel-container .account-button.login {
        color: #fff;
        background-color: #f27a1a
    }

    .user-navigation-container ul li .login-container .login-panel-container .account-button.login:hover, .user-navigation-container ul li .login-container .login-panel-container .account-button.register:hover {
        transition-property: all;
        -moz-transition-property: all;
        -webkit-transition-property: all;
        -o-transition-property: all;
        transition-duration: .2s;
        -webkit-transition-duration: .2s;
        transition-timing-function: lienar;
        -webkit-transition-timing-function: lienar
    }

    .user-navigation-container ul li .login-container .login-panel-container .account-button.login:hover {
        background-color: #ff8b39;
        color: #fff
    }

    .user-navigation-container ul li .login-container .login-panel-container .account-button.register {
        margin-top: 10px;
        color: #666;
        border: solid 1px #dedede
    }

    .user-navigation-container ul li .login-container .login-panel-container .account-button.register:hover {
        color: #f27a1a;
        border-color: #f27a1a
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container {
        width: 184px;
        top: 29px;
        padding-top: 10px;
        z-index: 10000
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container:after {
        content: "";
        position: absolute;
        top: -25px;
        left: 0;
        width: 170px;
        height: 30px;
        display: block
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container {
        height: 34px;
        line-height: 34px;
        padding-left: 10px;
        padding-right: 10px
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container .i-chat {
        color: #999;
        margin-right: 8px
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .account-link {
        color: #f27a1a
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-orders {
        background: url(https://trendyol.com/frontend/web/assets/images//svg/my-orders-active.svg) no-repeat 0 0;
        width: 12px;
        height: 13px
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-user-info {
        background: url(https://trendyol.com/frontend/web/assets/images//svg/user-info-active.svg) no-repeat 0 0;
        width: 12px;
        height: 13px
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-my-reviews {
        background: url(https://trendyol.com/frontend/web/assets/images//my-reviews-orange.svg) no-repeat 0 0;
        width: 14px;
        height: 14px
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-my-wallet {
        background: url(https://trendyol.com/frontend/web/assets/images//svg/wallet-active.svg) no-repeat 0 0;
        width: 14px;
        height: 14px
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-discount-info {
        background: url(https://trendyol.com/frontend/web/assets/images//svg/discount-coupons-active.svg) no-repeat 0 0;
        width: 12px;
        height: 10px
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-address-info {
        background: url(https://trendyol.com/frontend/web/assets/images/new-header-account-menu-icons-orange.png) no-repeat 0 0;
        width: 12px;
        height: 17px;
        background-position: 0 -108px
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-saved-credit-cards {
        background: url(https://trendyol.com/frontend/web/assets/images/new-header-account-menu-icons-orange.png) no-repeat 0 0;
        width: 12px;
        height: 10px;
        background-position: 0 -149px
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-trendyol-elite-small {
        background: url(https://trendyol.com/frontend/web/assets/images/new-header-account-menu-icons-orange.png) no-repeat 0 0;
        width: 12px;
        height: 13px;
        background-position: 0 -183px
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-help {
        background: url(https://trendyol.com/frontend/web/assets/images//svg/question-mark-active.svg) no-repeat 0 0;
        width: 12px;
        height: 13px
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-logout {
        background: url(https://trendyol.com/frontend/web/assets/images//svg/logout-active.svg) no-repeat 0 0;
        width: 12px;
        height: 12px;
        padding-right: 10px
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .i-chat {
        color: #f27a1a
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container .account-link {
        display: inline-block;
        width: 135px;
        height: 27px;
        float: left;
        text-align: left !important;
        text-decoration: inherit;
        font-size: 14px;
        color: #000
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container.logout-link {
        background-color: #f2f2f0;
        line-height: 35px
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover {
        color: #f27a1a
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .user-name {
        text-transform: capitalize
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container .user-email, .user-navigation-container ul li .login-container .loggedin-panel-container .user-name {
        font-family: source_sans_proregular;
        font-weight: 600;
        font-size: 14px;
        color: #f27a1a;
        text-align: left;
        padding: 10px 0 5px 13px;
        width: 90%
    }

    .user-navigation-container ul li .login-container .loggedin-panel-container:before {
        content: "";
        position: absolute;
        top: -11px;
        left: 93px;
        width: 19px;
        height: 12px;
        display: block;
        background: url(https://trendyol.com/frontend/web/assets/images/svg/arrow-tooltip.svg) no-repeat 0 0
    }


</style>