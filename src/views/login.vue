<template>
  <div class="login_box">
    <div class="register_box">
      <div class="title">登录</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="account">
          <el-input class="middle_width" v-model="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            class="middle_width"
            type="password"
            v-model="ruleForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="enter">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        account: "",
        password: "",
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    enter() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (
            this.ruleForm.account == "admin" &&
            this.ruleForm.password == "123456"
          ) {
            console.log("成功");
          } else {
            this.$message.error("账号或密码错误");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss">
.el-form-item__label {
  color: #fff;
}
</style>


<style lang="scss" scoped >
.middle_width {
  width: 300px;
}
.login_box {
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url("../assets/login_image/login.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%;
  .register_box {
    width: 500px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(99, 66, 33, 0.3);
    .title {
      width: 100%;
      height: 100px;
      line-height: 100px;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      text-align: center;
      letter-spacing: 5px;
    }
  }
}
</style>