<template>
    <div class="header">
        {{msg}}
    </div>
</template>
<script>
export default {
    name: "Header",
    components: {},
    data() {
        return {
            msg: '这是头部'
        }
    }
}
</script>
<style>
@import "header.scss"
</style>


