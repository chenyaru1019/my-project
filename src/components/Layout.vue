<template>
  <div id="example">
      <Header/>
      <Sidebar/>
      
      <AppMain/>
  </div>

</template>
<script>
import Header from './Header'
import Sidebar from './Sidebar'
import AppMain from './AppMain'
export default {
    name: "Layout",
    components: {
        Header,
        Sidebar,
        AppMain
    }
}
</script>
<style>

</style>

