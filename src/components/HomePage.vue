
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
        <el-date-picker v-model="date" style="height: 40px; width: 335px; margin-left: 5px;" type="daterange"
            range-separator="——" start-placeholder="开始日期" end-placeholder="结束日期">
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
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o="
                    alt="巴黎" class="image-item">
                <span class="label">巴黎</span>
            </div>
            <div class="image-wrapper1">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/613105.jpg?k=1e85cf4dec7b0d5a6327be91c38cf9c1711f9da1a31c4cba736f9cb751443ff1&o="
                    alt="罗马" class="image-item">
                <span class="label">罗马</span>
            </div>
        </div>
        <div class="row">
            <div class="image-wrapper2">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/976952.jpg?k=4c536b3833e5f6721ff5f89fa4f15d8f50fd5cd4a963060414078428aa67a6d5&o="
                    alt="伦敦" class="image-item">
                <span class="label">伦敦</span>
            </div>
            <div class="image-wrapper2">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/976539.jpg?k=0a7263960952588dc71a60f1f9c2e738b5c0af9b2d9d3c3df79677d630b8a665&o="
                    alt="阿姆斯特丹" class="image-item">
                <span class="label">阿姆斯特丹</span>
            </div>
            <div class="image-wrapper2">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/968315.jpg?k=14d0bad185930ec2663562b999ecf498fb6fcf492c16a4c33228504a15e2d119&o="
                    alt="巴塞罗那" class="image-item">
                <span class="label">巴塞罗那</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
            // 搜特价
          // this.GetData();
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
          // console.log(this.$route.query.page);
          // this.$store.commit('increment')
          // console.log(this.$store.state.count)
          // console.log(111)
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
}

</style>