<template>
    <div class="book">
        <child-dom>
            <div>目录一</div>
            <div>目录二</div>
            <div>目录三</div>
            <div>目录四</div>
            <div>目录五</div>
        </child-dom>
    </div>
</template>
<script>
import childDom from '../child/child'
export default {
    name: 'book',
    components: { 
        childDom
    },
    data() {
        return {

        }
    }

}
</script>

