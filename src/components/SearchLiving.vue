<template>
    <div class="WholeLayout_Base">
        <div class="WholeLayout_Left"></div>
        <div class="WholeLayout_Center">
            <el-row>
                <el-col :span="6">
                    <el-row style="background-color: rgb(255,196,137); width: 260px;">

                        <div
                            style="background-color: rgb(254,187,2); width: 90%; height: 40px; margin-left: 5%; margin-top: 5px;">
                            <p style="font-size: 20px; text-align:center; margin-top: 5px;">境内外特价搜不停</p>
                        </div>

                        <el-label class="noteA">目的地/住宿名称</el-label><br />
                        <el-input v-model="destination" class="boxA"></el-input><br />
                        <el-label class="noteA">入住日期</el-label><br />
                        <el-date-picker v-model="inDate"
                            style="height: 35px; width: 210px; margin-left: 20px;"></el-date-picker><br />
                        <el-label class="noteA">退房日期</el-label><br />
                        <el-date-picker v-model="outDate"
                            style="height: 35px; width: 210px; margin-left: 20px;"></el-date-picker><br />
                        <el-label class="noteA">入住一晚</el-label><br />
                        <el-select class="boxA" :placeholder="spliceCheckInInfo" collapse-tags=false multiple=true
                            ref="CheckInfoList">
                            <el-option v-for="(option, index) in checkInInfo" :key="index" :label="option.label"
                                :value="option.value">
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

                        <el-button type="success" class="SearchInfo_OkButton" @click="SearchInfo_OkButton">搜特价</el-button>

                    </el-row>

                    <div class="FliterNote">
                        <el-row style="margin-left: 15px; margin-top: 7px; ">
                            <b style="font-size: 20px;">缩小搜索范围</b>
                        </el-row>
                    </div>

                    <div class="FliterMoney">
                        <div class="FliterMoney_Note">
                            <b>你的预算（每晚）</b>
                        </div>
                    </div>

                </el-col>
                <el-col :span="18">
                    <div class="RightCol_TotalNote">
                        <b>{{ spliceDestinationInfo }}</b>
                    </div>

                    <el-select v-model="spliceSortWay" class="RightCol_SortWays">
                        <el-option v-for="(option, index) in sortBy" :key="index" :label="option.label"
                            :value="option.value">
                        </el-option>
                    </el-select>

                    <div class="RightCol_EachHotel" v-for="(option, index) in hotelInfo" :key="index">
                        <el-row>
                            <el-col :span="6.5">
                                <img :src="option.imgSrc" class="RightCol_EachHotel_Photo" />
                            </el-col>
                            <el-col :span="17.5">
                                <el-row class="RightCol_EachHotel_Message">
                                    <el-col :span="22" class="RightCol_EachHotel_Message_Title">
                                        <b>{{ option.name }}</b>
                                    </el-col>
                                    <el-col :span="2">
                                        <el-button class="RightCol_EachHotel_Message_Rate">
                                            {{ option.rate }}
                                        </el-button>
                                    </el-col>
                                </el-row>
                                <el-row class="RightCol_EachHotel_Message_Depict">
                                    <div style="margin-left: 10px;">
                                        {{option.depict}}
                                    </div>
                                </el-row>
                                <el-row>
                                    <el-button class="RightCol_EachHotel_Message_ReserveButton">
                                        查看可定选项<span>&nbsp;&nbsp;&nbsp;</span>>
                                    </el-button>
                                </el-row>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="WholeLayout_Right"></div>
    </div>
</template>
  
<script>


export default {

    data() {
        return {
            destination: '中国',
            count: 0,
            inDate: '',
            outDate: '',
            checkInInfo_collapseTag: false,
            checkInInfo: [
                { value: 1, label: '成人' },
                { value: 0, label: '儿童' },
                { value: 1, label: '客房' }
            ],

            sortWay: 0,

            sortBy: [
                { value: 0, label: "热门推荐" },
                { value: 1, label: "优先显示低价住宿" },
                { value: 2, label: "住宿评级（从高到低）" },
            ],

            hotelInfo: [
                { imgSrc: "土拨鼠.jpg", name: "balabala", rate: 7.8, depict: "这是一个非常好的宾馆豪华客房\
1张大号双人床\
该价格的客房在我们网站上仅剩4间" },

            ]

        }
    },
    computed: {
        spliceCheckInInfo() {
            return this.checkInInfo[0].value.toString() + "位成人·" + this.checkInInfo[1].value.toString() + "位儿童·" + this.checkInInfo[2].value.toString() + "间客房"
        },
        spliceDestinationInfo() {
            return this.destination + "：共" + this.count + "家住宿"
        },
        spliceSortWay: {
            set(newValue) {
                this.sortWay = newValue;
            },

            get() {
                return "排序方式：" + this.sortBy[this.sortWay].label
            }

        }
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
        }
    },
}

</script>



<style>
.noteA {
    margin-top: 15px;
    font-size: 10px;
    margin-left: 20px;
}

.boxA {
    width: 210px;
    height: 35px;
    margin-left: 20px;
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

.value {
    font-size: 16px;
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

.FliterNote {
    border: 1px solid rgb(231, 231, 231);
    margin-top: 15px;
    width: 260px;
    height: 40px;
}

.FliterMoney_Note {
    font-size: 15px;
    margin-left: 15px;
    margin-top: 10px;
}

.FliterMoney {
    border: 1px solid rgb(231, 231, 231);
    width: 260px;
    height: 235px;
}

.WholeLayout_Center {
    min-width: 1200px;
}

.WholeLayout_Left,
.WholeLayout_Right {
    flex: 1;
}

.WholeLayout_Base {
    display: flex;
    min-width: 1200px;
}

.RightCol_TotalNote {
    margin-top: 20px;
    font-size: x-large;
}

.RightCol_SortWays {
    max-width: 400px;
    width: 250px;
    margin-top: 15px;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(45, 138, 205);
}

.RightCol_HotelInfo {
    margin-top: 15px;
    width: 720px;
    height: 230px;
    border-style: solid;
}

.RightCol_EachHotel {
    width: 820px;
    height: 250px;
    margin-top: 15px;
    border-style: solid;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    border-width: 1px;
    border-color: rgb(198, 198, 198);
}

.RightCol_EachHotel_Photo {
    width: 200px;
    height: 200px;
    margin-top: 15px;
    margin-left: 15px;
}

.RightCol_EachHotel_Message {
    margin-top: 15px;
    margin-left: 15px;
    display: flex;
    justify-content: space-between;
}

.RightCol_EachHotel_Message_Title {
    font-size: x-large;
    color: rgb(0, 113, 194);
    align-self: flex-start;
    width: 500px;
}

.RightCol_EachHotel_Message_Rate {
    height: 40px;
    align-self: flex-end;
    background-color: blue;
    color: white;
    font-weight: bold;

}

.RightCol_EachHotel_Message_Depict {

    border-left: 1px solid rgb(231,231,231);
    border-top: none;
    border-right: none;
    border-bottom: none;
    margin-left: 15px;
    margin-top: 15px;
    width: 500px;
    height: 110px;
}

.RightCol_EachHotel_Message_ReserveButton{
    margin-left: 440px;
    width: 130px;
    height: 40px;
    background-color:rgb(0,113,194);
    color: white;
    font-weight: bolder;
}

</style>
