
<template>
    <div class="image-container">
        <img src="https://r-xx.bstatic.com/xdata/images/xphoto/2880x868/215293417.jpeg?k=562182ee69e27456f94592bee6e4b113125234897dde51ef8a12ffd4ed3e00a3&o="
            alt="两个人在海里嬉戏">
    </div>

    <div class="yellow-rectangle">

        <el-input placeholder="目的地？" style="height: 40px; width: 335px; margin-left: 5px;" v-model="destination" clearable>
            <template #prefix>
                <edit style="width: 1.5em; height: 1.5em; margin-right: 8px;"></edit>
            </template>
        </el-input>
        <el-date-picker v-model="date" style="height: 40px; width: 335px; margin-left: 5px;" type="daterange" range-separator="——" start-placeholder="开始日期" end-placeholder="结束日期" :disabled-date="pickerOptions">
        </el-date-picker>

        <el-select style="height: 40px; width: 335px; margin-left: 5px;" size="large" :placeholder="spliceCheckInInfo"
            collapse-tags=false multiple=true ref="CheckInfoList">
            <el-option v-for="(option, index) in checkInInfo" :key="index" :label="option.label" :value="option.value">
                <div class="option-content">
                    <span>{{ option.label }}</span>
                    <div class="button-group">
                        <el-button class="minus" @click="Decrement(index)">-</el-button>
                        <div class="value">{{ option.value }}</div>
                        <el-button class="plus" @click="Increment(index)">+</el-button>
                    </div>
                </div>
            </el-option>
            <div class="option-content">
                <el-button class="CheckInInfo_OkButton" @click="CheckInInfo_OkButton"> 完成 </el-button>
            </div>
        </el-select>
        <el-button style="height: 40px; width: 100px; margin-left: 10px;" type="success" class="SearchInfo_OkButton"
            @click="SearchInfo_OkButton">搜特价</el-button>

    </div>

    <p class="title_1">爆款目的地</p>

    <div class="image-container_down">
        <div class="row">
            <div class="image-wrapper1">
                <img src="@/assets/images/shanghai.jpg"
                    alt="上海" class="image-item" @click="clickImg('上海')">
                <span class="label" @click="clickImg('上海')">上海</span>
            </div>
            <div class="image-wrapper1">
                <img src="@/assets/images/nanjing.jpg"
                    alt="南京" class="image-item" @click="clickImg('南京')">
                <span class="label" @click="clickImg('南京')">南京</span>
            </div>
        </div>
        <div class="row">
            <div class="image-wrapper2">
                <img src="@/assets/images/suzhou.jpg"
                    alt="苏州" class="image-item" @click="clickImg('南京')">
                <span class="label" @click="clickImg('苏州')">苏州</span>
            </div>
            <div class="image-wrapper2">
                <img src="@/assets/images/yancheng.jpg"
                    alt="盐城" class="image-item" @click="clickImg('南京')">
                <span class="label" @click="clickImg('盐城')">盐城</span>
            </div>
            <div class="image-wrapper2">
                <img src="@/assets/images/zhengjiang.jpg"
                    alt="镇江" class="image-item" @click="clickImg('南京')">
                <span class="label" @click="clickImg('镇江')">镇江</span>
            </div>
        </div>
    </div>


    <!--路由占位标签-->
    <router-view></router-view>
</template>

<script>
export default {
    data() {
        return {
            // destinationvar:'',
            destination: '',
            date: '',
            checkInInfo_collapseTag: false,
            checkInInfo: [
                { value: 1, label: '成人' },
                { value: 0, label: '儿童' },
                { value: 1, label: '客房' }
            ],

        };
    },
    computed: {
        spliceCheckInInfo() {
            return this.checkInInfo[0].value.toString() + "位成人·" + this.checkInInfo[1].value.toString() + "位儿童·" + this.checkInInfo[2].value.toString() + "间客房"
        },
    },
    methods: {
        pickerOptions(time){
            return time.getTime() < Date.now()- 8.64e7;
        },
        clickImg(dest)
        {
          let timestamp3 = 	1685071939000;
          let newDate = new Date();
          newDate.setTime(timestamp3);
          let new2=new Date();
          new2.setTime(1685158339000)

          this.$router.push({
                path:'/view',
                query:{
                  destination:dest,
                  checkin:newDate.toGMTString(),
                  checkout:new2.toGMTString(),
                  checkinfo:'00'
                }
              }
          )
        },
        Increment(idx) {
            ++this.checkInInfo[idx].value
        },
        Decrement(idx) {
            if ((idx == 0 || idx == 2) && this.checkInInfo[idx].value > 1) --this.checkInInfo[idx].value;
            if (idx == 1 && this.checkInInfo[idx].value > 0) --this.checkInInfo[idx].value;
        },
        CheckInInfo_OkButton() {
            this.$refs.CheckInfoList.visible = false;
        },
        SearchInfo_OkButton() {
          if(this.destination == ''){this.$toast.warning("请填写目的地！",{position:"top"});return;}
          if(this.date[0] == null){this.$toast.warning("请选择入住时间！",{position:"top"});return;}
          if(this.date[1] == null){this.$toast.warning("请选择退房时间！",{position:"top"});return;}
          if(this.date[0]>=this.date[1]){this.$toast.warning("退房时间应在入住时间后！",{position:"top"});return;}
            // 搜特价
          console.log(this.destination)
          this.$router.push({
                path:'/view',
                query:{
                  destination:this.destination,
                  checkin:this.date[0],
                  checkout:this.date[1],
                  checkinfo:this.checkInInfo[0].value
                }
              }
          )
        }
    },
};
</script>


<style>
.image-container {
    width: 100%;
    overflow: hidden;
}

.image-container img {
    display: block;
    width: 100%;
    height: auto;
}

.yellow-rectangle {
    width: 1120px;
    height: 55px;
    background-color: rgb(255, 183, 0);
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    /* 边缘为弧形 */

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px;

}

.custom-date-picker .el-date-picker__editor {
    width: 200px;
    height: 50px;
    font-size: 20px;
}

.value {
    font-size: 16px;
}

.minus,
.plus {
    width: 20px;
    height: 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    background-color: #ddd;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}

.button-group {
    display: flex;
}

.option-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.CheckInInfo_OkButton {
    border: 1px solid rgb(0, 113, 194);
    width: 170px;
    margin-left: 15px;
    align-items: center;
}

.SearchInfo_OkButton {
    background-color: rgb(0, 113, 194);
    width: 210px;
    height: 40px;
    margin-left: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
}

.title_1 {
    font-weight: bold;
    font-size: 30px;
    margin-left: 12.5%;
}

.image-container_down {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.label {
    position: absolute;
    font-weight: bold;
    font-size: 25px;
    top: 20px;
    left: 25px;
    color: white;
    text-shadow: 2px 2px 4px black;

}

.row {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.image-wrapper1 {
    width: 549px;
    height: 237px;
    margin: 0 10px;
    overflow: hidden;
    position: relative;
}

.image-wrapper2 {
    width: 360px;
    height: 233px;
    margin: 0 10px;
    overflow: hidden;
    position: relative;
}

.image-item {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    cursor: pointer;
}

.image-item:hover{
opacity: 0.95;
transition: 1s;
transform: scale(1.1);
}

.emk_footer_update .cs_contact_footer {
    background-color: #fff;
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 44%;
    margin-right: 5%;
    border-radius: 4px;
    color: #333;
}

.emk_footer_update_space {
    padding: 50px 0;
    background-color: #00224f;
    color: #fff;
}

.footerconstraint-inner {
    max-width: 1094px;
    min-width: 620px;
    margin: 0 auto;
    padding: 0 8px;
}

.emk_footer_centered,
.emk-feedback-msg {
    text-align: center;
}

.emk_footer_update .cs_contact_footer .cs_contact_footer_icon {
    position: absolute;
    top: 15px;
    left: 10px;
    width: 38px;
    height: 38px;
    background-repeat: no-repeat;
    display: inline-block;
    background-position: -5px -53px;
}

.emk_footer_update .cs_contact_footer .cs_contact_footer_title {
    padding: 15px 0 0 70px;
    text-align: left;
}

.emk_footer_update .cs_contact_footer h3.cs_contact_footer_title_header {
    font-size: 24px;
}

.emk_footer_update .cs_contact_footer .cs_contact_footer_title_subheader {
    font-size: 16px;
    color: #8e8e8e;
    margin: 0;
    padding-top: 4px;
}

.emk_footer_update .cs_contact_footer .cs_contact_footer_numbers {
    padding: 10px 0 15px 70px;
    position: relative;
    overflow: hidden;
}

.cs_contact_footer_numbers_section.domestic_international_line {
    float: left;
    width: 40%;
    margin-right: 40px;
}

.emk_footer_update .cs_contact_footer .cs_contact_footer_numbers_section .number_title,
.emk_footer_update .cs_contact_footer .cs_contact_footer_numbers_section .number_content {
    margin: 0;
    font-size: 16px;
    text-decoration: none;
}

.cs_contact_footer_numbers_section.help_center {
    float: left;
    width: 28%;
}

.emk_footer_update .emk_footer_wrapper {
    display: inline-block;
    width: 50%;
}

.emk_footer_centered .emk_footer_banner_block {
    font-size: 24px;
    line-height: 32px;
    font-weight: 300;
    float: none;
    display: block;
    text-align: center;
}

.emk_footer_centered .emk_footer_subbanner_block {
    font-size: 16px;
    line-height: 24px;
    color: #bdbdbd;
    margin-left: 0;
    text-align: center;
    display: block;
    float: none;
}

.emk_footer_form_layout {
    max-width: 50%;
    margin: 20px auto 0 auto;
}

.subscription_form_wrap {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.invisible_spoken {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    white-space: normal;
    overflow: hidden;
    color: #0071c2;
    top: 0;
    left: 0;
}

.input_newsletter_subscription_to {
    font-size: 20px;
    line-height: 28px;
    color: #6b6b6b;
    border: 0;
    border-radius: 3px;
    font-weight: 100;
    padding: 10px;
    width: 65%;
}

.emk_footer_form_layout button#newsletter_button_footer {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 3px;
    border: 0;
    padding: 0 15px;
    font-size: 20px;
    line-height: 28px;
    font-weight: 300;
    height: 48px;
    color: var(--bui_color_white);
    background-color: var(--bui_color_action_background);
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 0 5px;
}

.footer-top-menu {
    background-color: #003b95;
    font-size: 13px;
    padding: 0;
}

.footer-top-partners {
    border-bottom: 1px solid #fff;
}

.footerconstraint-inner {
    max-width: 1094px;
    min-width: 620px;
    margin: 0 auto;
    padding: 0 8px;
}

.footer-top-partner-text {
    color: #fff;
    line-height: 2;
    margin: 0;
    padding: 15px 10px;
    text-align: center;
}

.footer-top-menu {
    background-color: #003b95;
    font-size: 13px;
    padding: 0;
}

.footer-navigation-links-wrapper {
    padding: 16px 0;
}

#footertopnav, #footertopnav-partners {
    margin: 0 -8px;
}

.footer-top-links-list {
    margin: 0;
    padding: 0;
    text-align: center;
}

.footer-top-link {
    float: left;
    list-style-type: none;
    border-right: 1px solid #003580;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
}

.footer-navigation-links {
    width: 100%;
    display: inline-block;
    vertical-align: middle;
}

.footer-navigation-links-column {
    margin: 0;
    width: 20%;
    float: left;
    padding: 0 10px 0 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.footer-navigation-links-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.footer-navigation-link {
    display: block;
    margin: 0 0 10px 0;
    line-height: 14px;
    font-size: 13px;
    white-space: normal!important;
    list-style-type: none;
}

</style>