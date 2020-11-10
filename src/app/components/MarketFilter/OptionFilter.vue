<template>
    <div class="fltrs-wrppr">
        <div class="fltr-cntnr-ttl">{{ title }}</div>
        <input v-show="hasSearchBar" class="fltr-srch-inpt" type="text" placeholder="Ara" value="">
        <div class="fltrs" v-for="(item, index) in options" :key="index">
            <a class="fltr-item-wrppr" @click="onOptionClick(index)" href="#">
                <div class="chckbox" :class="item.checked !== undefined && item.checked ? 'chckd' : ''"></div>
                <div class="fltr-item-text">{{ item.title }}</div>
            </a>
        </div>
        <div class="aggregation-seperator"><span></span></div>
    </div>
</template>

<script>
export default {
    name: "OptionFilter",
    props: {
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        hasSearchBar: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onOptionClick(i){
            this.options[i].checked = !this.options[i].checked;
            this.$forceUpdate();
        }
    }
}
</script>

<style scoped>

</style>