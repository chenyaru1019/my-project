<template>
    <div class="tags-view-main">
        <!-- <scroll-pane> -->
            <router-link 
                v-for="(tag,index) in visitedViewa"
                ref="tag"
                :class="isActive(tag)?'active':''"
                :key="tag.index"
                :to="tag.path"
                tag="span"
                class="tags-view-item"
            >{{tag.name}}
            <span v-if="tag.name !== 'dashboard'" class="el-icon-close" @click="closeTags(tag)"/>
            </router-link>
        <!-- </scroll-pane> -->
    </div>
</template>
<script>
export default {
    name: "TagsView",
    components: {},
    data() {
        return {
        
        }
    },
    computed: {
        visitedViewa() {
            return this.$store.state.routers
        },
        // routers() {
        //     return this.$store.state.getRouter
        // }
    },
    watch: {
        $route() {
            this.addViewTags()          
        }       
    },
    mounted() {
        this.initView()
        this.addViewTags()       
    },
    methods: {
        isActive(route){
            return route.path === this.$route.path
        },
        fliter(rouerArr){
            let tag = []
            // console.log(rouerArr)
            rouerArr.forEach(route => {
                if(route.redirect == "Dashboard"){
                    // console.log(route.children[0])
                    tag.push({
                        path: route.children[0].path,
                        name: route.children[0].name,
                        meta: {...route.children[0].meta}
                    })
                }
            })
            console.log(tag)
            return tag
        },
        initView(){
            const rouerArr  = this.$store.state.getRouer
            const routers = this.fliter(rouerArr)
            for(const tag of routers){
                this.$store.dispatch('addTag',tag);
            }
        },
        addViewTags() {
            // 增加标签 根据路由以及$store状态、监控路由来执行
            if(this.$route.name){
                const route = this.$route
                this.$store.dispatch('test', route);
            }           
        },
        closeTags(tag){
        }
    }
}
</script>

<style>
@import 'TagsView.scss';
</style>



