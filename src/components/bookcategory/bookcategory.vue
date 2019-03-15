<template>
    <div class="bookcate">
        <el-button type="text" @click="adddialog">点击打开 Dialog</el-button>

        <el-dialog
        :title="titleInfo"
        :visible.sync="dialogVisible"
        width="30%">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        titleInfo: '',
        dialogVisible: false
      };
    },
    methods: {
        adddialog(){
            this.dialogVisible = true
            this.titleInfo = '新增'
        },
      cancel(){
          this.dialogVisible = false
      }
    }
  };
</script>

