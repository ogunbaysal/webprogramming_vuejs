<template>
    <div class="autocomplete">
        <div class="search-box-container">
            <input v-on:keyup="onChange()" @focus="display_suggestions = true" @blur="display_suggestions = false" v-model="param" class="search-box" tabindex="1" placeholder="Aradığınız ürün, kategori veya markayı yazınız" maxlength="50" autocomplete="off" type="text">
            <i class="search-icon"></i>
        </div>
        <div v-if="display_suggestions" class="suggestions-container">
            <div class="suggestion-result">
                <div class="suggestion-result-title">
                    <span class="suggestion-title main">{{ title }}</span>
                    <span class="clear"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Autocomplete",
        components: {},
        data: function (){
            return {
                param: '',
                title: 'Geçmiş Aramalar',
                display_suggestions: false
            }
        },
        methods: {
            onChange: () => {
                this.title = this.param.length > 0 ? 'İlgili Sonuçlar' : 'Geçmiş Aramalar';
            }
        }
    }
</script>

<style>
    .autocomplete {
        width: 430px;
        position: relative;
    }
    .big-autocomplete {
        position: relative;
        width: 520px;
    }
    .search-box-container {
        position: relative;
        z-index: 1;
    }
    .search-box-container .search-box {
        width: 100%;
        font-size: 14px;
        color: #999;
        background-color: #faf9f9;
        border: 1px solid #e0e0e0;
        border-radius: 21px;
        padding: 10px 40px 10px 15px;
        box-sizing: border-box;
    }
    .search-box-container .search-box:focus {
        outline: none;
        border: 1px solid #ff8b39;
        background-color: #fff;
    }
    .search-icon {
        width: 18px;
        height: 18px;
        position: absolute;
        right: 15px;
        bottom: calc(50% - 9px);
        cursor: pointer;
        background-image: url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%23F27A1A' d='M18.711 17.306l-4.684-4.703a7.49 7.49 0 0 0 1.864-4.932C15.891 3.441 12.327 0 7.946 0S0 3.441 0 7.671s3.565 7.671 7.946 7.671a8.056 8.056 0 0 0 4.552-1.388l4.72 4.74c.197.197.462.306.746.306.27 0 .525-.1.718-.28a.977.977 0 0 0 .03-1.414zM7.946 2.001c3.238 0 5.873 2.544 5.873 5.67 0 3.127-2.635 5.67-5.873 5.67-3.239 0-5.873-2.543-5.873-5.67 0-3.126 2.634-5.67 5.873-5.67z'/%3E%3C/svg%3E");
    }
    .suggestions-container {
        border: solid 1px #d5d5d5;
        border-radius: 3px;
        background-color: #fff;
        position: absolute;
        z-index: 0;
        padding: 25px 15px 15px 15px;
        top: 20px;
        width: 100%;
        box-sizing: border-box;
    }
    .suggestion-result-title {
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
    .suggestion-result-title .suggestion-title {
        font-weight: 600;
    }
    .suggestion-result-title .suggestion-title.main {
        color: #f27a1a;
    }
    .suggestion-result-title .clear {
        color: #333;
        cursor: pointer;
    }
    .suggestion {
        width: 100%;
        color: #333;
        text-decoration: none;
        padding: 8px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        align-items: center;
    }
    .suggestion span:first-child {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .suggestion .suggestion-image {
        height: 30px;
        width: 30px;
        margin-right: 7px;
        border-radius: 15px;
        border: solid 1px #e6e6e6;
        background-color: #ffffff;
    }
    .suggestion .label {
        margin-left: auto;
        color: #999;
    }
    .suggestion:not(:last-child) {
        border-bottom: 1px solid #f7f7f7;
    }
    .suggestion:hover,
    .suggestion.selected {
        background: #f7f7f7;
    }
    #auto-complete-app {
        width: 100%;
        display: flex;
        justify-content: center;
    }

</style>