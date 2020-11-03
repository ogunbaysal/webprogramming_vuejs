<template>
    <div id="browsing-gw-navigation">
        <div id="navigation">
            <div id="navigation-wrapper">
                <nav>
                    <ul class="main-nav" v-if="parent_categories.length > 0">
                        <NavbarItem v-for="item in parent_categories" :key="item.title" :parent="item"/>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarItem from "@/app/components/Navbar/NavbarItem";

export default {
    name: "Navbar",
    components: {NavbarItem},
    computed: {
        parent_categories(){
            return this.$store.getters["category/getCategories"];
        }
    },
    created() {
        this.$store.dispatch('category/initializeCategories');
    }
}
</script>

<style scoped>
@keyframes sticky-transition-show {
    0% {
        transform: translateY(-100%)
    }
    to {
        transform: translateY(0)
    }
}

@keyframes sticky-transition-hide {
    0% {
        transform: translateY(0)
    }
    to {
        transform: translateY(-100%)
    }
}

#sticky-header.sticky {
    border-bottom: solid 1px #ebebeb;
    animation: sticky-transition-show .2s forwards linear;
    background: #fff;
    top: 0
}

#sticky-header.sticky.fancybox-margin {
    right: calc(-17px / 2)
}

#sticky-header.sticky > .header {
    width: 1080px;
    margin: 0 auto
}

#browsing-gw-navigation {
    top: 0;
    transition: top .2s linear
}

#browsing-gw-navigation.sticky-down, #sticky-header.sticky {
    width: 100%;
    position: fixed;
    right: 0
}

#browsing-gw-navigation.sticky-up {
    width: 100%;
    position: fixed;
    right: 0;
    top: 84px
}

#browsing-gw-navigation.sticky-up.fancybox-margin {
    right: calc(-17px / 2)
}

#browsing-gw-navigation.sticky-down {
    top: -42px
}
#navigation #navigation-wrapper {
    background-color: #fff;
    border: solid 1px #ebebeb;
    height: 40px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .05);
}


html,
body {
    margin: 0;
    padding: 0;
    background: #faf9f9;
    font-family: 'Source Sans Pro', sans-serif;
}
a {
    text-decoration: none;
}
#navigation #navigation-wrapper {
    background-color: #fff;
    border: solid 1px #ebebeb;
    height: 40px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
    position: relative;
    z-index: 900;
}
#navigation #container-background {
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    height: 100%;
    z-index: 600;
    opacity: 0.3;
    background-color: #222;
}
#navigation #container-background.container-background {
    display: block;
}
nav {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1080px;
    position: relative;
}
nav ul.main-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    width: 100%;
}
nav ul.main-nav.main-nav-for-international {
    width: auto;
}

.free-shipping {
    font-weight: 600;
    color: #333;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    display: flex;
}
.free-shipping img {
    display: inline-block;
    width: 29px;
    height: 16px;
    position: relative;
    margin-right: 7px;
    bottom: 1px;
}
.new-badge {
    display: inline-block;
    padding: 0.25em 0.585em;
    font-weight: 700;
    line-height: 10px;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    text-transform: capitalize;
    font-size: 12px;
    color: #fff;
    background: #f23d4e;
    border-radius: 10rem;
    margin-bottom: 3px;
    margin-left: 3px;
    height: 9px;
}
nav ul.main-nav li:hover .new-badge {
    background: #f27a1a;
}
#headerMain {
    width: 100%;
    position: relative;
    z-index: 1000;
    background: #ffffff;
}


</style>