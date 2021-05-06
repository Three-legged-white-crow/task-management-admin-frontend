<template>
  <div class="type_area">
    <div class="top">
      <div class="top_right">
        <el-image :src="avatar" class="images">
          <template #placeholder>
            <div class="image-slot">加载中<span class="dot">...</span></div>
          </template>
        </el-image>
        <el-dropdown class="username">
          <span class="el-dropdown-link">
            {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="home_box">
      <div class="lefts">
        <el-collapse v-model="activeName" accordion @change="handleChange">
          <el-collapse-item
            :title="item.name"
            v-for="(item, index) in data"
            :key="index"
            :name="index"
          >
            <div>{{ item.name }}</div>
            <el-image :src="item.images" class="images">
              <template #placeholder>
                <div class="image-slot">加载中<span class="dot">...</span></div>
              </template>
            </el-image>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="rights">
        <el-image :src="avatar" class="images">
          <template #placeholder>
            <div class="image-slot">加载中<span class="dot">...</span></div>
          </template>
        </el-image>
        <div class="title">{{ single.username }}{{ single.permissions }}</div>
        <div class="bottom_box">
          <el-button type="primary">修改账号</el-button>
          <!-- <el-button type="primary">主要按钮</el-button> -->
        </div>
      </div>
    </div>
    <router-link to="bie">测试</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      activeName: "1",
      data: [
        {
          name: "大哥1号",
          images:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2464469379,3345630949&fm=26&gp=0.jpg",
          permissions: ["组员"],
        },
        {
          name: "大哥2号",
          images:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2464469379,3345630949&fm=26&gp=0.jpg",
          permissions: ["组员"],
        },
        {
          name: "大哥3号",
          images:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2464469379,3345630949&fm=26&gp=0.jpg",
          permissions: ["组员"],
        },
        {
          name: "大哥4号",
          images:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2464469379,3345630949&fm=26&gp=0.jpg",
          permissions: ["组员"],
        },
        {
          name: "大哥5号",
          images:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2464469379,3345630949&fm=26&gp=0.jpg",
          permissions: ["组员"],
        },
        {
          name: "大哥6号",
          images:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2464469379,3345630949&fm=26&gp=0.jpg",
          permissions: ["组员"],
        },
        {
          name: "大哥7号",
          images:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2464469379,3345630949&fm=26&gp=0.jpg",
          permissions: ["组员"],
        },
      ],
      single: {
        username: "",
        avatar: "",
        permissions: "",
      },
    };
  },

  computed: {
    ...mapState({
      accessToken: (state) => state.accessToken, //指定模块后，这里默认就是获取user下面的state了
      username: (state) => state.username, //指定模块后，这里默认就是获取user下面的state了
      avatar: (state) => state.avatar, //指定模块后，这里默认就是获取user下面的state了
      permissions: (state) => state.permissions, //指定模块后，这里默认就是获取user下面的state了
    }),
  },
  mounted() {
    this.single.username = this.username;
    this.single.avatar = this.avatar;
    this.single.permissions = this.permissions;
    console.log(this.single);
  },
  methods: {
    handleChange(val) {
      if (val != "") {
      }
    },
  },
};
</script>

<style lang="scss" scope>
.type_area {
  width: 100%;
  .title {
    font-size: 14px;
    color: #777;
    display: inline-block;
    margin-left: 40px;
  }
  .top {
    height: 80px;
    display: block;
    margin: auto 0;
    background-color: #77dcaa;
    overflow: hidden;
    .top_right {
      float: right;
      .images {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
  }
  .home_box {
    width: 1220px;
    display: flex;
    margin: 10px auto 0;
    .lefts {
      width: 50%;
      height: 100%;
      float: left;
      overflow: hidden;
      border-radius: 1px solid #8e8e8e;
      .images {
        display: inline-block;
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
    .rights {
      width: 50%;
      overflow: hidden;
      height: 100%;
      .images {
        display: inline-block;
        margin-left: 40%;
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
  }
}
.username {
  width: 100px;
  line-height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bottom_box {
  margin-top: 40px;
  text-align: center;
}
</style>