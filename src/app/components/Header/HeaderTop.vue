<template>
    <div class="header-top">
        <ul>
            <li>
                <a href="#trendyolda-satis-yap">Trendyol'da Satış Yap</a>
            </li>
            <li>
                <a href="#yardim-destek">Yardım & Destek</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HeaderTop"
    }
</script>

<style>
    .header-top {
        height: 15px;
        padding-top: 5px;
    }
    .header-top ul {
        float: right;
    }
    .header-top ul:after {
        content: "";
        display: block;
        clear: both;
    }
    .header-top ul li {
        display: inline-block;
        margin-left: 30px;
    }
    .header-top ul li a {
        color: #999;
        font-size: 12px;
        line-height: 15px;
    }

</style>