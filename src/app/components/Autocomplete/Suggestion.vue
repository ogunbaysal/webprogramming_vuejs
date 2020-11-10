<template>
    <router-link :to="display_link" @click="onClick" class="suggestion">
        <span v-html="display_text"></span>
        <span class="label" v-if="is_category">Kategori</span>
    </router-link>
</template>

<script>
export default {
    name: "Suggestion",
    computed: {
        param(){
            return this.$store.getters["autocomplete/getParam"];
        },
        display_text(){
            if(this.item === undefined) return this.text;
            return this.item.title.replace(this.param, this.param.bold());
        },
        display_link(){
            if(this.item === undefined) return this.link;
            if(this.is_category) {
                return '/urunler/' + this.item.slug;
            }else{
                return '/urun/' + this.item.id;
            }
        }
    },
    props: {
        item: {
            type: Object
        },
        text: {
            type: String,
        },
        link: {
            type: String,
        },
        is_category: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onClick(e){
            //test purpose
            e.preventDefault();
            this.$store.dispatch("autocomplete/addHistory", this.item);
        }
    }
}
</script>

<style scoped>
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
</style>