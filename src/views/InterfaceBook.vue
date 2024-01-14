<template>
  <div>
    <el-dialog
      title="陌生人你好"
      :visible.sync="welcomeDialog"
      style="margin-top: 10%"
      width="400px"
    >
      <el-card>
        <div>

        </div>
      </el-card>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name:'InterfaceBook',
  mounted() {
    this.readBrowserStorage()
  },
  data() {
    return {
      welcomeDialog: true,

    }
  },
  methods:{
    readBrowserStorage() {
      const storedValue = localStorage.getItem('welcomeDialog');
      this.welcomeDialog = storedValue || true;
    }
  }
}
</script>
<style scoped>

</style>
