<template>
  <div class="base">
    <!-- 注册登录界面 -->
   <div  class="loginAndRegist">
        <!--登录表单-->
        <div  class="loginArea">
            <transition
                    name="animate__animated animate__bounce"
                    enter-active-class="animate__fadeInUp"
                    leave-active-class="animate__zoomOut"
                    appear
            >
            <!-- 标语 -->
            <div v-show="isShow" class="title">
                登录
            </div>
            </transition>
            <transition
                    name="animate__animated animate__bounce"
                    enter-active-class="animate__fadeInUp"
                    leave-active-class="animate__zoomOut"
                    appear
            >
            <!-- 密码框和用户名框 -->
            <div v-show="isShow" class="pwdArea">
               <div style="flex: 1;justify-content: center;display: flex;align-items: center">
                   <el-input class="username" v-model="loginUser.name" style="width: 165px;height: 40px"  placeholder="用户名"></el-input>
               </div>
                <div style="flex: 1;justify-content: center;display: flex;align-items: center">
                    <el-input placeholder="密码"  v-model="loginUser.password" style="width: 165px;height: 40px" show-password></el-input>
                </div>
            </div>
            </transition>
            <transition
                    name="animate__animated animate__bounce"
                    enter-active-class="animate__fadeInUp"
                    leave-active-class="animate__zoomOut"
                    appear
            >
            <!-- 登录注册按钮 -->
            <div v-show="isShow" class="btnArea">
                <el-button type="success" round style="background-color: #257B5E;letter-spacing: 5px" @click="loginRequest"  >登录</el-button>
            </div>
            </transition>
        </div>
        <!-- 注册表单 -->
        <div class="registArea">
            <transition
                    name="animate__animated animate__bounce"
                    enter-active-class="animate__fadeInUp"
                    leave-active-class="animate__zoomOut"
                    appear
            >
            <!--  注册表头-->
            <div v-show="!isShow" class="rigestTitle">
                新用户注册
            </div>
            </transition>
            <transition
                    name="animate__animated animate__bounce"
                    enter-active-class="animate__fadeInUp"
                    leave-active-class="animate__zoomOut"
                    appear
            >
<!--            注册表单-->
            <div  v-show="!isShow" class="registForm">
                <div style="flex: 1;display: flex;justify-content: center;align-items: center">
                    用&nbsp;&nbsp;&nbsp;户&nbsp;&nbsp;&nbsp;名:
                    <el-input
                            placeholder="请输入用户名"
                            v-model="regUser.regUsername"
                            style="width: 165px;margin-left: 10px;height: 40px"
                            clearable
                    >
                    </el-input>
                </div>
                <div style="flex: 1;display: flex;justify-content: center;align-items: center">
                    密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:
                    <el-input placeholder="请输入密码" style="width: 165px;margin-left: 10px;height: 40px" v-model="regUser.regPwd" show-password></el-input>
                </div>
                <div style="flex: 1;display: flex;justify-content: center;align-items: center;">
                    确&nbsp;认&nbsp;密&nbsp;码:
                    <el-input placeholder="请再次输入密码" style="width: 165px;margin-left: 10px;height: 40px" v-model="regUser.regRePwd" show-password></el-input>
                </div>
                <div style="flex: 1;display: flex;justify-content: center;align-items: center;">
                  手&nbsp;机&nbsp;号&nbsp;码:
                  <el-input placeholder="手机号" style="width: 165px;margin-left: 10px;height: 40px" v-model="regUser.phoneNumber"></el-input>
                </div>
            </div>
            </transition>
            <transition
                    name="animate__animated animate__bounce"
                    enter-active-class="animate__fadeInUp"
                    leave-active-class="animate__zoomOut"
                    appear
            >
<!--            注册按钮-->
            <div  v-show="!isShow" class="registBtn">
                <el-button type="success" round style="background-color: #257B5E;letter-spacing: 5px" @click="registerRequest">注册</el-button>
            </div>
            </transition>
        </div>
        <!-- 信息展示界面 -->
         <div id="aaa" class="showInfo"
              :style="{
             borderTopRightRadius:styleObj.bordertoprightradius,
             borderBottomRightRadius:styleObj.borderbottomrightradius,
             borderTopLeftRadius:styleObj.bordertopleftradius,
             borderBottomLeftRadius:styleObj.borderbottomleftradius,
             right:styleObj.rightDis
            }"
              ref="showInfoView">

             <transition
                     name="animate__animated animate__bounce"
                     enter-active-class="animate__fadeInUp"
                     leave-active-class="animate__zoomOut"
                     appear
             >
            <!-- 没有用户输入用户名或者找不到用户名的时候 -->
            <div v-show="isShow" style="display: flex;flex-direction: column;align-items: center;justify-content: center;width: 100%;height: 100%">
             <!-- 欢迎语 -->
                 <div style="flex: 2;display: flex;align-items: center;font-size: 22px;color: #FFFFFF;font-weight: bold">
                 欢迎进入Booking
                 </div>
            <!-- 欢迎图片 -->
                 <div style="flex: 2">
                     <el-button type="success"  style="background-color:#257B5E;border: 1px solid #ffffff;" round @click="changeToRegiest">还没有账户？点击注册</el-button>
                 </div>
           </div>
             </transition>
           <!-- 用户输入用户名时展示头像以及姓名 -->
<!--           <div>-->

<!--           </div>-->
             <transition
                     name="animate__animated animate__bounce"
                     enter-active-class="animate__fadeInUp"
                     leave-active-class="animate__zoomOut"
                     appear
             >
           <!-- 用户注册的时候展示信息 -->
           <div v-show="!isShow" style="display: flex;flex-direction: column;align-items: center;justify-content: center;width: 100%;height: 100%">
               <!-- 欢迎语 -->
               <div style="flex: 2;display: flex;align-items: center;font-size: 22px;color: #FFFFFF;font-weight: bold">
                   欢迎注册
               </div>
               <!-- 欢迎图片 -->
               <div style="flex: 2">
                   <el-button type="success"  style="background-color:#257B5E;border: 1px solid #ffffff;" round @click="changeToLogin">已有账户？点击登录</el-button>
               </div>
           </div>
             </transition>
        </div>
   </div>
   
  </div>
</template>

<script>
    // import 'animate.css';
    // eslint-disable-next-line no-unused-vars
    import {Axios as request} from "axios";
export default {

    name:'LoginView',
    data(){
        return{
            //看看用不用转成用户对象
            loginUser:{
                name:"",
                password:""
            },

            admins:{},
            ////看看用不用转成用户对象
            regUser:{
                regUsername:'',
                regRePwd:'',
                regPwd:'',
                phoneNumber:"",
            },
            styleObj:{
                bordertoprightradius:'15px',
                borderbottomrightradius: '15px',
                bordertopleftradius:'0px',
                borderbottomleftradius:'0px',
                rightDis:'0px'
            },
            isShow:true

        }
    },
  methods:{
      postData(){
        this.$http.get('/user')
            .then( (response)=> {
              console.log(response);
              // this.$store.commit('increment')
              // console.log(this.$store.state.count)
            })
            .catch(function (error) {
              console.log(error);
            });
        },
      loginRequest()
      {
        if(this.loginUser.name === ''){this.$toast.warning('用户名不能为空！',{position:"top"}); return;}
        if(this.loginUser.password === ''){this.$toast.warning('密码不能为空！',{position:"top"}); return;}
        // this.$toast.warning('账号不存在！',{position:"top"});
        console.log(this.loginUser.name)
        this.$http.post('/login/login', {
          "uid": 12,
          "uname": this.loginUser.name,
          "sex": "string",
          "age": 0,
          "phone_number": "string",
          "pwd": this.loginUser.password
        })
            .then((response)=> {
              console.log(response);
              console.log(typeof response.data.code);
              if(response.data.code === 101){
                this.$toast.warning('用户名不存在！',{position:"top"});
              }
              else if(response.data.code === 102){
                this.$toast.warning('密码错误！',{position:"top"});
              }
              else if(response.data.code === 103){
                this.$toast.warning('登陆成功！',{position:"top"});
                this.$store.commit("login",this.loginUser.name);
                console.log(this.$store.state.uname);
                this.$router.push('/living')
              }
            })
            .catch(function (error) {
              console.log(error);
            });
      },

    registerRequest()
    {

      if(this.regUser.regUsername === ''){this.$toast.warning('用户名不能为空！',{position:"top"}); return;}
      if(this.regUser.regPwd === ''){this.$toast.warning('密码不能为空！',{position:"top"}); return;}
      if(this.regUser.regRePwd === ''){this.$toast.warning('重复密码不能为空！',{position:"top"}); return;}
      if(this.regUser.phoneNumber === ''){this.$toast.warning('手机号不能为空！',{position:"top"}); return;}

      if(this.regUser.regRePwd !== this.regUser.regPwd)
      {
        this.$toast.warning('两次密码不一致！',{position:"top"});
        return;
      }
      // this.$toast.warning('账号不存在！',{position:"top"});
      // console.log(this.loginUser.name)
      this.$http.post('/login/register', {
        "uid": Math.ceil(Math.random()*10000),
        "uname": this.regUser.regUsername,
        "sex": "string",
        "age": 0,
        "phone_number": this.regUser.phoneNumber,
        "pwd": this.regUser.regPwd
      })
          .then((response)=> {
            console.log(response);
            console.log(typeof response.data.code);
            if(response.data.code === 104){
              this.$toast.warning('用户名已被使用！',{position:"top"});
            }
            else if(response.data.code === 105){
              this.$toast.warning('注册成功！',{position:"top"});
              this.regUser.regRePwd='';
              this.regUser.regPwd='';
              this.regUser.regUsername='';
              this.regUser.phoneNumber='';
            }
            else if(response.data.code === 106){
              this.$toast.warning('未知错误！',{position:"top"});
              // this.$store.commit("login",this.loginUser.name);
              // console.log(this.$store.state.uname);
              // this.$router.push('/living')

            }
          })
          .catch(function (error) {
            console.log(error);
          });
    },

    changeToRegiest(){
      this.styleObj.bordertoprightradius= '0px'
      this.styleObj.borderbottomrightradius='0px'
      this.styleObj.bordertopleftradius='15px'
      this.styleObj.borderbottomleftradius='15px'
      this.styleObj.rightDis='50%'
      this.isShow = !this.isShow
    },
    changeToLogin(){
      this.styleObj.bordertoprightradius= '15px'
      this.styleObj.borderbottomrightradius='15px'
      this.styleObj.bordertopleftradius='0px'
      this.styleObj.borderbottomleftradius='0px'
      this.styleObj.rightDis='0px'
      this.isShow = !this.isShow
    },
  }



}
</script>

<style>
/* @import '../assets/css/Login.css' */
.base{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("@/assets/images/road2.jpg");
    background-size: cover;
}
.loginAndRegist{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.loginArea{
    background-color: rgba(255,255,255,0.8);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    height: 400px;
    width: 350px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
}
.registArea{
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    height: 400px;
    width: 350px;
    background-color: rgba(255,255,255,0.8);
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content:center ;
    align-items: center;
}
.showInfo{
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    position: absolute;
    height: 400px;
    width: 350px;
    z-index:2;
    top: 0;
    right: 0;
    background-image: url("@/assets/images/bag.png");
    background-size: cover;


}
.showInfo:hover{
opacity: 0.98;
transition: 1s;
transform: scale(1.01);
}
.title{
    width: 70%;
    flex:1;
    border-bottom: 1px solid #257B5E;
    display: flex;
    align-items: center;
    color: #257B5E;
    font-weight: bold;
    font-size: 24px;
    display: flex;
    justify-content: center;
}
#aaa{
    transition: 0.3s linear;
}
.pwdArea{
    width: 100%;
    flex:2;
    display: flex;
    flex-direction: column;
    display: flex;
    flex-direction: column;


}
/*.pwdArea input{*/
/*    outline: none;*/
/*    height: 30%;*/
/*    border-radius:13px ;*/
/*    padding-left: 10px;*/
/*    font-size: 12px;*/
/*    border: 1px solid gray;*/
/*}*/
/*.pwdArea input:focus{*/
/*    border: 2px solid #257B5E;*/
/*}*/
    .btnArea{
        flex:1;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .rigestTitle{
        width: 70%;
        flex: 1;
        color: #257B5E;
        font-weight: bold;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #257B5E;
    }
    .registForm{
        flex: 2;
        display: flex;
        flex-direction: column;
        color: #257B5E;
        font-size: 16px;
    }

    /*.registForm input{*/
    /*outline: none;*/
    /*height: 90%;*/
    /*border-radius:13px ;*/
    /*padding-left: 10px;*/
    /*font-size: 12px;*/
    /*border: 1px solid gray;*/
    /*}*/
/*.registForm input:focus{*/
/*    border: 2px solid #257B5E;*/
/*}*/
/*#elselect:focus{*/
/*    border: 2px solid #257B5E;*/
/*}*/
    .registBtn{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }


</style>