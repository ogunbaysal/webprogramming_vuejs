<template>
    <div>
        <Header/>
        <Navbar/>
        <div id="container">
            <router-view />
        </div>
    </div>
</template>

<script>
import Header from "@/app/components/Header/Header";
import Navbar from "@/app/components/Navbar/Navbar";
export default {
    name: "App",
        components: {Navbar, Header}
    }
</script>

<style scoped>

</style>