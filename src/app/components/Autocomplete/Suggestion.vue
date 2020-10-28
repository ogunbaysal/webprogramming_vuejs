<template>
    <a href="{{ link }}" class="suggestion">
        <span>{{ text }}</span>
    </a>
</template>

<script>
export default {
    name: "Suggestion",
    data: function (){
        return {

        };
    },
    props: {
        text: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
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