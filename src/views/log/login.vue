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
            @keyup.enter="enter"
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
import { genToken } from "../../utils/randomToken";
import { setAccessToken } from "../../utils/accessToken";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      ruleForm: {
        account: "admin",
        password: "123456",
      },
      redirect: undefined,
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  watch: {
    $route: {
      handler(route) {
        this.redirect = (route.query && route.query.redirect) || "/";
      },
      immediate: true,
    },
  },
  methods: {
    // ...mapActions(["setAccessToken"]),
    ...mapActions({
      add: "setAccessToken",
    }),
    handleRoute() {
      return this.redirect === "/404" || this.redirect === "/403"
        ? "/"
        : this.redirect;
    },
    enter() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (
            this.ruleForm.account == "admin" &&
            this.ruleForm.password == "123456"
          ) {
            let token = genToken();
            const hour = new Date().getHours();
            const thisTime =
              hour < 8
                ? "早上好"
                : hour <= 11
                ? "上午好"
                : hour <= 13
                ? "中午好"
                : hour < 18
                ? "下午好"
                : "晚上好";
            setAccessToken(token);
            this.add(token);
            this.$notify({
              title: `${thisTime}!`,
              message: "欢迎来到传家",
              type: "success",
            });
            this.$router.push(this.handleRoute());
          } else {
            this.$message.error("账号或密码错误");
          }
        } else {
          // console.log("error submit!!");
          this.$message.error("请输入账号密码");
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
.top {
  width: 100%;
}
.login_box {
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url("../../assets/login_image/login.jpg");
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