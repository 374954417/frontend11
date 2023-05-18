<template>
    <el-row class="WholeLayout_Base">
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
                </el-col>

                <el-col :span="18">
                    <el-row class="RightCol_FisrtRow">
                        <el-col span="18">
                            <b class="RightCol_FirstRow_HotelName">{{ this.hotelInfo.name }}</b>
                        </el-col>
                        <el-col span="6">
                            <div class="RightCol_FirstRow_HotelRate">{{ this.hotelInfo.rate }}</div>
                        </el-col>
                    </el-row>

                    <el-row class="RightCol_SecondRow">
                        <el-row>
                            <el-col span="6">
                                <el-row>
                                    <img :src="this.hotelPicture[0]" class="HotelPicture_TopLeft" />
                                </el-row>
                                <el-row>
                                    <img :src="this.hotelPicture[1]" class="HotelPicture_DownLeft" />
                                </el-row>

                            </el-col>
                            <el-col span="18">
                                <img :src="this.hotelPicture[2]" class="HotelPicture_Right" />
                            </el-col>
                        </el-row>

                    </el-row>
                </el-col>

            </el-row>

            <el-row class="ReservePart">
                <b class="ReserveTableTitle">空房情况</b>
            </el-row>

            <el-row>
                <table>
                    <tr class="ReserveTable_Head">
                        <td class="ReserveTable_RoomStyle">
                            <div style="margin-left: 5px;">客房类型</div>
                        </td>
                        <td class="ReserveTable_PeopleNumber">
                            <div style="margin-left: 5px;">客人数</div>
                        </td>
                        <td class="ReserveTable_Price">
                            <div style="margin-left: 5px;">今日价格</div>
                        </td>
                        <td class="ReserveTable_Note">
                            <div style="margin-left: 5px;">预定须知</div>
                        </td>
                        <td style="width: 420px;">
                        </td>

                    </tr>

                    <template v-for="(room, index) in this.reserveTableData" :key="index">
                        <tr>
                            <td class="ReserveTable_RoomStyle">
                                <div style="margin-left: 5px;">
                                    客房类型
                                </div>
                            </td>
                            <td class="ReserveTable_PeopleNumber">
                                <div style="margin-left: 5px;">
                                    客人数
                                </div>
                            </td>
                            <td class="ReserveTable_Price">
                                <div style="margin-left: 5px;">
                                    今日价格
                                </div>
                            </td>
                            <td class="ReserveTable_Note">
                                <div style="margin-left: 5px;">
                                    预定须知
                                </div>
                            </td>
                        </tr>
                    </template>

                </table>
            </el-row>
        </div>
        <div class="WholeLayout_Right"></div>
    </el-row>
</template>
  
<script>

export default {
    data() {
        return {
            destination: '中国',
            inDate: '',
            outDate: '',
            checkInInfo_collapseTag: false,
            checkInInfo: [
                { value: 1, label: '成人' },
                { value: 0, label: '儿童' },
                { value: 1, label: '客房' },
            ],

            hotelInfo: [
                {
                    imgSrc: "土拨鼠.jpg",
                    name: "balabala",
                    rate: 8,
                    depict: "这是一个非常好的宾馆豪华客房\
1张大号双人床\
该价格的客房在我们网站上仅剩4间" },
            ],

            hotelPicture: [
                "https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o=",
                "https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o=",
                "https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o=",
            ],

            reserveTableData: [
                {
                    roomStyle: "豪华客房", roomDepit: "1张大号双人床", detail: [
                        { pnum: 2, price: 448, note: "无需预付到店付款" },
                        { pnum: 1, price: 390, note: "无需预付到店付款" },
                    ]
                },
                {
                    roomStyle: "单人间", roomDepit: "1张单人床", detail: [
                        { pnum: 1, price: 295, note: "我们网站上只剩3间房了" },
                    ]
                }
            ]
        }
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

.RightCol_FisrtRow {
    margin-top: 10px;
}

.RightCol_FirstRow_HotelName {
    font-size: x-large;
}

.RightCol_FirstRow_HotelRate {
    margin-left: 730px;
    border-style: solid;
    border-width: 1px;
    background-color: rgb(0, 53, 128);
    color: white;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 0px;
}

.RightCol_SecondRow {
    margin-top: 15px;
}

.HotelPicture_TopLeft {
    width: 240px;
    height: 170px;
}

.HotelPicture_DownLeft {
    margin-top: 10px;
    width: 240px;
    height: 170px;
}

.HotelPicture_Right {
    width: 540px;
    height: 350px;
    margin-left: 10px;
}

.ReservePart {
    margin-top: 25px;
    margin-bottom: 15px;
}

.ReserveTableTitle {
    font-size: x-large;
}

.ReserveTable_Head {
    background-color: rgb(76, 118, 178);
    color: white;
    height: 35px;
}

.ReserveTable_RoomStyle {
    width: 370px;

}

.ReserveTable_PeopleNumber {
    width: 60px;
}

.ReserveTable_Price {
    width: 80px;
}

.ReserveTable_Note {
    width: 140px;
}
</style>
