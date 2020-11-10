<template>
    <span id="not-logged-in-container" @mouseover="display_container = true" @mouseleave="display_container = false"
          class="">
        <span>Giriş Yap</span>
        <div class="login-panel-container" v-show="display_container">
            <div class="account-button login" @click="redirectToLogin">Giriş Yap</div>
            <div class="account-button register" @click="redirectToLogin">Üye Ol</div>
        </div>
    </span>
</template>

<script>
export default {
    name: "GuestNavigation",
    data: function () {
        return {
            display_container: false,
        }
    },
    methods:{
        redirectToLogin(){
            this.$router.push('/girisyap');
        }
    }
}
</script>

<style scoped>
.user-navigation-container ul li #basketPreviewcontent .productPriceBox .CompleteOrder, .user-navigation-container ul li #basketPreviewcontent .productPriceBox .goBasket, .user-navigation-container ul li #basketPreviewcontent .slideContainer ul li a .productInfoBox span.brandName, .user-navigation-container ul li #basketPreviewcontent .slideContainer ul li a .productInfoBox span.productName, .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container .account-link, .user-navigation-container ul li .login-container .loggedin-panel-container .user-email, .user-navigation-container ul li .login-container .loggedin-panel-container .user-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

#accountNavigation {
    display: block !important
}

.user-navigation-container {
    float: right;
    margin-top: 12px
}

.user-navigation-container .hidden-container, .user-navigation-container.no-price .productPriceBox > p {
    display: none
}

.user-navigation-container ul {
    float: right
}

.user-navigation-container ul li {
    cursor: pointer;
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
    transition-property: all;
    -moz-transition-property: all;
    -webkit-transition-property: all;
    -o-transition-property: all;
    transition-duration: .2s;
    -webkit-transition-duration: .2s;
    transition-timing-function: linear;
    -webkit-transition-timing-function: linear;
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
    height: 15px;
    line-height: 15px;
    font-size: 12px;
    color: #1b1b1b
}

.user-navigation-container ul li:hover .icon-container i.navigation-icon-user {
    background: url(/frontend/web/assets/images/svg/navigation-user-orange.svg) no-repeat center center;
    width: 19px;
    height: 20px
}

.user-navigation-container ul li:hover .icon-container i.navigation-icon-basket, .user-navigation-container ul li:hover .icon-container i.navigation-icon-favorites, .user-navigation-container ul li:hover .icon-container i.navigation-icon-user {
    cursor: pointer;
    transition-property: all;
    -moz-transition-property: all;
    -webkit-transition-property: all;
    -o-transition-property: all;
    transition-duration: .2s;
    -webkit-transition-duration: .2s;
    transition-timing-function: linear;
    -webkit-transition-timing-function: linear
}

.user-navigation-container ul li:hover .icon-container i.navigation-icon-favorites {
    background: url(/frontend/web/assets/images/svg/navigation-favorites-orange.svg) no-repeat center center;
    width: 23px;
    height: 20px
}

.user-navigation-container ul li:hover .icon-container i.navigation-icon-basket {
    background: url(/frontend/web/assets/images/svg/navigation-basket-orange.svg) no-repeat center center;
    width: 21px;
    height: 21px
}

.user-navigation-container ul li:hover .loggedin-panel-container, .user-navigation-container ul li:hover .login-panel-container {
    display: block !important;
    z-index: 9999999999
}

.user-navigation-container ul li .basket-item-count {
    position: absolute;
    top: 15px;
    width: 16px;
    height: 16px;
    background-color: #f27a1a;
    right: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    color: #fff
}

.user-navigation-container ul li .basket-item-count span {
    height: 14px;
    line-height: 14px;
    font-family: oxygen;
    font-weight: 700;
    font-size: 11px;
    text-align: left;
    color: #fff
}

.user-navigation-container ul li #basketPreviewcontent {
    text-align: left !important;
    width: 300px;
    top: 76px;
    right: 0;
    border: 1px solid #dcdcdc;
    position: absolute;
    z-index: 901;
    background-color: #fff;
    box-shadow: 0 4px 3px 1px rgba(0, 0, 0, .07)
}

.user-navigation-container ul li #basketPreviewcontent:before {
    content: "";
    position: absolute;
    top: -22px;
    right: 0;
    width: 115px;
    height: 22px;
    display: block;
    background: url(/frontend/web/assets/images/svg/arrow-gray.svg) no-repeat 85px 12px
}

.user-navigation-container ul li #basketPreviewcontent .slideDownBox {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 300px;
    height: 30px;
    background: #fafafa;
    border-top: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
    line-height: 30px;
    z-index: 10;
    display: block;
    cursor: pointer
}

.user-navigation-container ul li #basketPreviewcontent .slideDownBox i {
    background: url(/frontend/web/assets/images/header-slide-arrow-iconset.png) no-repeat bottom center;
    width: 100%;
    height: 10px;
    display: block;
    margin-top: 12px;
    z-index: 11
}

.user-navigation-container ul li #basketPreviewcontent .slideUpBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 30px;
    background-color: #fafafa;
    border-bottom: 1px solid #dcdcdc;
    line-height: 30px;
    z-index: 10
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer .slideUpBox p, .user-navigation-container ul li #basketPreviewcontent .slideUpBox p {
    font-size: 14px;
    color: #333;
    text-indent: 15px
}

.user-navigation-container ul li #basketPreviewcontent .slideUpBox i {
    background: url(/frontend/web/assets/images/header-slide-arrow-iconset.png) no-repeat top center;
    width: 100%;
    height: 10px;
    display: none;
    margin-top: 12px
}

.user-navigation-container ul li #basketPreviewcontent .passive {
    height: 20px;
    cursor: inherit
}

.user-navigation-container ul li #basketPreviewcontent .active p, .user-navigation-container ul li #basketPreviewcontent .passive i {
    display: none !important
}

.user-navigation-container ul li #basketPreviewcontent .active {
    cursor: pointer
}

.user-navigation-container ul li #basketPreviewcontent .active i {
    display: block !important
}

.user-navigation-container ul li #basketPreviewcontent .productPriceBox {
    float: left;
    width: 300px;
    margin: 10px 0
}

.user-navigation-container ul li #basketPreviewcontent .productPriceBox p {
    font-size: 17px;
    color: #f27a1a;
    font-family: oxygen;
    font-weight: 700;
    text-align: right;
    width: 285px;
    padding: 0 5px 10px 0
}

.user-navigation-container ul li #basketPreviewcontent .productPriceBox span {
    font-size: 15px;
    color: #333
}

.user-navigation-container ul li #basketPreviewcontent .productPriceBox a {
    float: left;
    width: 128px;
    height: 33px;
    line-height: 33px;
    text-align: center;
    font-size: 14px;
    border-radius: 4px;
    margin-left: 14px
}

.user-navigation-container ul li #basketPreviewcontent .productPriceBox .goBasket {
    background-color: #fafafa;
    border: 1px solid #e6e6e6;
    color: #333
}

.user-navigation-container ul li #basketPreviewcontent .productPriceBox .goBasket :hover {
    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: linear;
    background-color: #f3f3f3
}

.user-navigation-container ul li #basketPreviewcontent .productPriceBox .CompleteOrder {
    background-color: #f27a1a;
    border: 1px solid #f27a1a;
    color: #fff;
    font-family: source_sans_proregular;
    font-weight: 600
}

.user-navigation-container ul li #basketPreviewcontent .productPriceBox .CompleteOrder :hover {
    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: linear;
    background-color: #f27a1a
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer {
    position: relative;
    float: left;
    width: 300px;
    max-height: 301px;
    overflow: hidden
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer .slideUpBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 30px;
    background-color: #fafafa;
    border-bottom: 1px solid #dcdcdc;
    line-height: 30px;
    z-index: 10
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul {
    position: relative;
    float: left;
    padding: 30px 0;
    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: linear
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li {
    position: relative;
    float: left;
    width: 280px;
    height: 100px;
    padding: 10px;
    margin: 0
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li a {
    float: left;
    height: 100px;
    display: block
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li a .imageBox {
    float: left;
    width: 66px;
    height: 100px;
    position: relative;
    overflow: hidden
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li a .imageBox img {
    float: left;
    width: 66px;
    height: auto
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li a .imageBox .countDown {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 66px;
    height: 20px;
    background: #000 !important
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li a .imageBox .countDown .countdown_row {
    width: 100%;
    height: 20px;
    line-height: 21px;
    display: block;
    background: url(/frontend/web/assets/images/time-icon.png) no-repeat 9px 5px;
    font-size: 11px;
    text-align: center;
    color: #fff
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li a .imageBox .alert {
    background: rgba(179, 28, 4, .7) !important
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li a .productInfoBox {
    float: left;
    display: block;
    width: 200px;
    margin-left: 10px;
    font-size: 13px;
    color: #333
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li a .productInfoBox p {
    line-height: 20px
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li a .productInfoBox span {
    display: block;
    text-align: left;
    height: 20px
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li a .productInfoBox span.productName {
    width: 210px
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li a .productInfoBox span.brandName {
    font-family: source_sans_proregular;
    font-weight: 600
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li a .productInfoBox span.productSize {
    font-style: normal;
    font-family: source_sans_proregular;
    font-weight: 600
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li a .productInfoBox span.quantityMessage {
    float: left;
    width: 45%;
    display: inline-block;
    color: #b31c04
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li a .productInfoBox span.salePrice {
    float: right;
    text-align: right;
    width: 45%;
    display: inline-block;
    font-size: 14px;
    color: #f27a1a;
    font-family: oxygen
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li .rightinfo {
    color: #000;
    font-size: 12px;
    line-height: 14px;
    margin-top: 15px;
    float: right;
    display: block;
    width: 75px;
    text-align: right
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li .rightinfo .countDown {
    color: #8c8c8c;
    display: inline;
    float: none
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li .rightinfo .countDown span {
    color: #8c8c8c;
    font-size: 12px
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li .separator {
    position: absolute;
    left: 10px;
    bottom: 0;
    width: 280px;
    height: 1px;
    display: block;
    background-color: #f0f0f0
}

.user-navigation-container ul li #basketPreviewcontent .slideContainer ul li .separator:last-child {
    display: none
}

.user-navigation-container ul li #basketPreviewcontent .noproduct {
    padding: 15px 15px 5px;
    text-align: center
}

.user-navigation-container ul li #basketPreviewcontent .noproduct p {
    font-size: 12px;
    color: #666
}

.user-navigation-container ul li #basketPreviewcontent .noproduct p:first-child {
    font-family: source_sans_proregular;
    font-weight: 600;
    font-size: 14px;
    color: #333;
    margin-bottom: 10px
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
    background: url(/frontend/web/assets/images/menu-hover-bg.png) no-repeat 0 0
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
    background: url(/frontend/web/assets/images//svg/my-orders-active.svg) no-repeat 0 0;
    width: 12px;
    height: 13px
}

.user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-user-info {
    background: url(/frontend/web/assets/images//svg/user-info-active.svg) no-repeat 0 0;
    width: 12px;
    height: 13px
}

.user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-my-reviews {
    background: url(/frontend/web/assets/images//my-reviews-orange.svg) no-repeat 0 0;
    width: 14px;
    height: 14px
}

.user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-my-wallet {
    background: url(/frontend/web/assets/images//svg/wallet-active.svg) no-repeat 0 0;
    width: 14px;
    height: 14px
}

.user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-discount-info {
    background: url(/frontend/web/assets/images//svg/discount-coupons-active.svg) no-repeat 0 0;
    width: 12px;
    height: 10px
}

.user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-address-info {
    background: url(/frontend/web/assets/images/new-header-account-menu-icons-orange.png) no-repeat 0 0;
    width: 12px;
    height: 17px;
    background-position: 0 -108px
}

.user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-saved-credit-cards {
    background: url(/frontend/web/assets/images/new-header-account-menu-icons-orange.png) no-repeat 0 0;
    width: 12px;
    height: 10px;
    background-position: 0 -149px
}

.user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-trendyol-elite-small {
    background: url(/frontend/web/assets/images/new-header-account-menu-icons-orange.png) no-repeat 0 0;
    width: 12px;
    height: 13px;
    background-position: 0 -183px
}

.user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-help {
    background: url(/frontend/web/assets/images//svg/question-mark-active.svg) no-repeat 0 0;
    width: 12px;
    height: 13px
}

.user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover .icon-logout {
    background: url(/frontend/web/assets/images//svg/logout-active.svg) no-repeat 0 0;
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

.guestCheckoutInfoPopup .guestCheckoutInfoPopupClose:active:before, .guestCheckoutInfoPopup .guestCheckoutInfoPopupClose:hover:before, .user-navigation-container ul li .login-container .loggedin-panel-container .account-link-container:hover {
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
    background: url(/frontend/web/assets/images/svg/arrow-tooltip.svg) no-repeat 0 0
}

.user-navigation-container ul #myBasketListItem first-child {
    margin-left: 0
}

.ie-browser .user-navigation-container .slideContainer > ul > li > a > div.imageBox > .countDown .countdown_row {
    background-position: 9px 6px !important
}

.guest-user-activation-email-sent-popup-root {
    border: 1px solid;
    width: 475px;
    text-align: center;
    padding: 50px 10px
}

.guest-user-activation-email-sent-popup-root h1 {
    font-size: 25px;
    font-weight: 700;
    color: #858585;
    margin: 10px 0
}

.guest-user-activation-email-sent-popup-root span {
    font-size: 15px;
    color: #666
}

.guest-user-activation-email-sent-popup-root strong {
    font-weight: 700
}

.guest-user-activation-email-sent-popup-root img {
    display: inline-block
}

.GuestCheckoutPopupGraybg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
    position: fixed;
    z-index: 10010
}

.guestCheckoutInfoPopup {
    width: 508px !important;
    height: 569px !important;
    top: 20%;
    margin: 0 auto;
    position: relative;
    z-index: 10
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupClose {
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 3px
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupClose:before {
    background: 0 0;
    border-radius: 3px;
    color: #bbb;
    content: '\00D7';
    font-size: 26px;
    font-weight: 400;
    height: 30px;
    line-height: 26px;
    position: absolute;
    right: 7px;
    text-align: center;
    top: 10px;
    width: 30px;
    text-indent: 0
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper {
    width: 508px !important;
    height: 569px !important;
    background: #fff
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .header {
    height: 192px;
    width: 468px;
    padding-top: 47px;
    margin: auto
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .header i {
    background: url(/frontend/web/assets/images/svg/guest-checkout-popup-icon.svg) center center no-repeat;
    width: 65px;
    height: 73px;
    background-size: 65px 73px;
    display: block;
    margin: 0 auto
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .main-text {
    font-family: source_sans_proregular;
    font-size: 28px;
    font-weight: 600;
    color: gray;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 0 !important
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .sub-text {
    font-family: source_sans_proregular;
    font-size: 16px;
    text-align: center;
    color: #787878;
    margin-top: 5px;
    margin-bottom: 0 !important
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .product-table-wrapper {
    width: 468px;
    height: 227px;
    background-color: #fff;
    border: solid 1px #e8e8e8;
    margin-left: 20px;
    overflow: hidden
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .product-table-wrapper .product-table-header {
    border-bottom: solid 1px #e8e8e8;
    width: 100%;
    height: 46px;
    font-family: source_sans_proregular;
    font-weight: 600;
    font-size: 17px;
    color: #ff7100;
    padding-left: 20px;
    display: table
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .product-table-wrapper .product-table-header p {
    display: table-cell;
    vertical-align: middle
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .product-table-wrapper .product-table-slider-wrapper {
    padding-left: 20px;
    padding-right: 5px;
    height: 181px;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
    top: 17px
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .product-table-wrapper .product-table-slider-wrapper img {
    width: 94px;
    height: 144.6px;
    border: solid 1px #e3e3e3;
    display: inline-block;
    float: left;
    margin-right: 15px;
    position: relative
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .product-table-wrapper .product-table-slider-wrapper .product-situation {
    display: table;
    width: 87%;
    height: 37px;
    opacity: .85;
    background-color: #1b1b1b;
    position: absolute;
    bottom: 0;
    color: #fff;
    text-align: center
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .product-table-wrapper .product-table-slider-wrapper .product-situation .product-situation-text {
    display: table-cell;
    vertical-align: middle;
    font-family: source_sans_proregular;
    font-weight: 600;
    font-size: 12px;
    line-height: 13px
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer {
    height: 83px;
    width: 100%;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #e3e3e3;
    background: #fbfbfb;
    font-family: source_sans_proregular;
    font-weight: 600;
    text-align: center
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn.shoppingStart {
    width: 468px;
    margin: 19px auto 0;
    height: 43px;
    padding: 0;
    font-size: 18px;
    line-height: 45px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    border-radius: 3px;
    color: #fff;
    background-color: #f77d1a;
    border: 1px solid #f77d1a;
    display: block;
    transition-property: all;
    -moz-transition-property: all;
    -webkit-transition-property: all;
    -o-transition-property: all;
    transition-duration: .3 sn;
    -webkit-transition-duration: .3 sn;
    transition-timing-function: linear;
    -webkit-transition-timing-function: linear;
    text-decoration: none
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn.shoppingStart.active, .guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn.shoppingStart:focus, .guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn.shoppingStart:hover {
    color: "";
    background-color: #ff8b39;
    border: 1px solid #f77d1a;
    transition-property: all;
    -moz-transition-property: all;
    -webkit-transition-property: all;
    -o-transition-property: all;
    transition-duration: .3 sn;
    -webkit-transition-duration: .3 sn;
    transition-timing-function: linear;
    -webkit-transition-timing-function: linear
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn-group a {
    text-decoration: none !important;
    margin-top: 19px;
    width: 224px;
    display: inline-block !important;
    font-size: 16px !important;
    font-family: source_sans_proregular
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn-group .basket-page-go-to-basket, .guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn-group .continue-shopping {
    height: 42px;
    padding: 0;
    font-size: 18px;
    line-height: 42px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    border-radius: 3px;
    color: #666;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    display: block;
    transition-property: all;
    -moz-transition-property: all;
    -webkit-transition-property: all;
    -o-transition-property: all;
    transition-duration: .3 sn;
    -webkit-transition-duration: .3 sn;
    transition-timing-function: linear;
    -webkit-transition-timing-function: linear;
    margin-right: 11px
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn-group .basket-page-go-to-basket.active, .guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn-group .basket-page-go-to-basket:focus, .guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn-group .basket-page-go-to-basket:hover, .guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn-group .continue-shopping.active, .guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn-group .continue-shopping:focus, .guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn-group .continue-shopping:hover {
    color: "";
    background-color: #f6f6f6;
    border: 1px solid "";
    transition-property: all;
    -moz-transition-property: all;
    -webkit-transition-property: all;
    -o-transition-property: all;
    transition-duration: .3 sn;
    -webkit-transition-duration: .3 sn;
    transition-timing-function: linear;
    -webkit-transition-timing-function: linear
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn-group .basket-page-go-to-payment, .guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn-group .go-to-basket {
    height: 42px;
    padding: 0;
    font-size: 18px;
    line-height: 42px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    border-radius: 3px;
    color: #fff;
    background-color: #f77d1a;
    border: 1px solid #f77d1a;
    display: block;
    transition-property: all;
    -moz-transition-property: all;
    -webkit-transition-property: all;
    -o-transition-property: all;
    transition-duration: .3 sn;
    -webkit-transition-duration: .3 sn;
    transition-timing-function: linear;
    -webkit-transition-timing-function: linear
}

.guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn-group .basket-page-go-to-payment.active, .guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn-group .basket-page-go-to-payment:focus, .guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn-group .basket-page-go-to-payment:hover, .guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn-group .go-to-basket.active, .guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn-group .go-to-basket:focus, .guestCheckoutInfoPopup .guestCheckoutInfoPopupWrapper .footer .btn-group .go-to-basket:hover {
    color: "";
    background-color: #ff8b39;
    border: 1px solid #f77d1a;
    transition-property: all;
    -moz-transition-property: all;
    -webkit-transition-property: all;
    -o-transition-property: all;
    transition-duration: .3 sn;
    -webkit-transition-duration: .3 sn;
    transition-timing-function: linear;
    -webkit-transition-timing-function: linear
}

.guestCheckoutInfoPopup .slider_wrapper {
    overflow: hidden;
    position: relative;
    height: 100%;
    width: 100%;
    top: auto
}

.guestCheckoutInfoPopup #image_slider {
    position: relative;
    height: auto;
    list-style: none;
    overflow: hidden;
    float: left;
    padding: 0;
    margin: 0
}

.guestCheckoutInfoPopup #image_slider li {
    position: relative;
    float: left
}

.guestCheckoutInfoPopup .nvgt {
    position: absolute;
    height: 177px;
    width: 28px;
    opacity: .6;
    bottom: 104px
}

.guestCheckoutInfoPopup .nvgt:hover {
    opacity: .9
}

.guestCheckoutInfoPopup #sliderPrev {
    background: #fff url(/frontend/web/assets/images/svg/left-arrow.svg) no-repeat center;
    left: 22px
}

.guestCheckoutInfoPopup #sliderPrev:hover {
    background: #fff url(/frontend/web/assets/images/svg/left-arrow-trnc.svg) no-repeat center
}

.guestCheckoutInfoPopup #sliderNext {
    background: #fff url(/frontend/web/assets/images/svg/right-arrow.svg) no-repeat center;
    right: 19px
}

.guestCheckoutInfoPopup #sliderNext:hover {
    background: #fff url(/frontend/web/assets/images/svg/right-arrow-trnc.svg) no-repeat center
}

.guestCheckoutInfoPopup #sliderNext.disabled, .guestCheckoutInfoPopup #sliderPrev.disabled {
    display: none
}

@media screen and (max-height: 700px) {
    .guestCheckoutInfoPopup {
        top: 5%
    }
}
</style>