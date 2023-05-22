
<template>
    <el-row class="WholeLayout">
        <div class="WholeLayout_Left"></div>
        <div class="WholeLayout_Center">
            <el-row class="FirstRow">
                <b class="Title">Booking.com</b>

                <div v-if="!this.$store.state.is_login" class="ButtonPosition">
                    <el-button class="RegisterButton">
                        注册
                    </el-button>
                    <el-button class="LoginButton" @click="navigatorToLogin">
                        登录
                    </el-button>
                </div>
                <div v-else class="ButtonPosition">
                  <el-button class="userInfo" @click="displayOrder">
                    用户信息
                  </el-button>
                </div>
            </el-row>
            <el-row class="SecondRow">
                <el-button class="LivingButton" @click="navigateToLiving">
                    住宿
                </el-button>
                <el-button class="viewButton" @click="navigatorToView">
                    景点
                </el-button>
            </el-row>
        </div>
        <div class="WholeLayout_Right"></div>
    </el-row>
    <!--路由占位标签-->
    <router-view></router-view>

</template>

<script>


// import router from "@/router/index";

export default {
    methods: {
        navigateToLiving() {
            // this.$router.push('/living');
          this.$router.push({
              path:'/living',
              query: {
                page: '1'
              }
          })
        },

        navigatorToView() {
            this.$router.push('/view');
        },

        navigatorToLogin(){
            this.$router.push('/login');
        },

        displayOrder()
        {
          console.log(typeof this.$store.state.is_login);
          console.log(typeof 0);
          console.log(this.$store.is_login === 0);
        }
    }
}

</script>

<style>
.WholeLayout {
    background-color: rgb(0, 53, 128);
    /* margin-bottom: 35px; */
    height: 130px;
    display: flex;
    min-width: 1200px;
}

.WholeLayout_Center {
    min-width: 1200px;
}

.WholeLayout_Left,
.WholeLayout_Right {
    flex: 1;
}

.Title {
    color: white;
    height: 120px;
    font-size: x-large;
}

.FirstRow {
    margin-top: 20px;
    margin-left: 15px;
    height: 50px;
}


.ButtonPosition {
    margin-left: 800px;
}

.LoginButton,
.RegisterButton {
    height: 40px;
}

.SecondRow {
    margin-left: 15px;
}

.LivingButton {
    width: 90px;
    height: 45px;
    position: relative;
    border: solid;
    border-radius: 30px;
    color: white;
    background-color: transparent;
    overflow: hidden;
    cursor: pointer;
    border-width: 1px;
}

.viewButton {
    width: 90px;
    height: 45px;
    position: relative;
    border: none;
    border-radius: 30px;
    color: white;
    background-color: transparent;
    overflow: hidden;
    cursor: pointer;
    border-width: 1px;
}
</style>