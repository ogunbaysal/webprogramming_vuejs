<template>
    <div class="searchbar col-lg-6 col-md-6 col-xs-6 no-padding">
        <div class="searchbar__app">
            <Autocomplete/>
        </div>
    </div>
</template>

<script>
    import Autocomplete from "@/app/components/Autocomplete/Autocomplete";
    export default {
        name: "HeaderSearchBar",
        components: {Autocomplete}
    }
</script>

<style scoped>
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
</style>