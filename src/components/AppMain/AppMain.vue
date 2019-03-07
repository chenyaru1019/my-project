<template>
      <!--右侧内容区-->
      <section class="mainWarp">
        <Breadcrumb/>
        <TagsView/>
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="content-wrapper">
            <transition name="fade-transform" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
</template>
<script>
import Breadcrumb from '../Breadcrumb'
import TagsView from '../TagsView'
export default {
    name: "AppMain",
    components: {
          Breadcrumb,
          TagsView
    },
    data() {
        return {
            msg: "主题内容"
        }
    }
}
</script>
<style>
@import "appmain.scss"
</style>


