<template>
    <div class="sidebar">
        <el-menu :default-active="defaultActiveIndex" router :collapse="collapsed">
          <template v-for="(item,index) in $router.options.routes" v-if="item.menuShow">
            <el-submenu v-if="!item.leaf" :index="index+''">
              <template slot="title"><i :class="item.iconCls"></i><span slot="title">{{item.name}}</span></template>
              <el-menu-item v-for="term in item.children" :key="term.path" :index="term.path" v-if="term.menuShow"
                            :class="$route.path==term.path?'is-active':''">
                <i :class="term.iconCls"></i><span slot="title">{{term.name}}</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else-if="item.leaf&&item.children&&item.children.length" :index="item.children[0].path"
                          :class="$route.path==item.path?'is-active':''">
              <i :class="item.iconCls"></i><span slot="title">{{item.name}}</span>
            </el-menu-item>
          </template>
        </el-menu>
    </div> 
      
</template>
<script>
export default {
    name: "Sidebar",
    components: {},
    data() {
        return {
            msg: "侧边目录",
            defaultActiveIndex: "0",
            // nickname: '',
            collapsed: false,
        }
    },
    mounted() {
        
    }
}
</script>
<style>
@import "sidebar.scss"
</style>


