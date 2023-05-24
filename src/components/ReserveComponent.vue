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
                            <b class="RightCol_FirstRow_HotelName">{{hname}}</b>
                            <div>{{haddress}}</div>
                        </el-col>
                        <el-col span="6">
                            <div class="RightCol_FirstRow_HotelRate">{{ score }}</div>
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
                        <th class="ReserveTable_RoomStyle">
                            <div style="margin-left: 5px;">客房类型</div>
                        </th>
                        <th class="ReserveTable_PeopleNumber">
                            <div style="margin-left: 5px;">客人数</div>
                        </th>
                        <th class="ReserveTable_Price">
                            <div style="margin-left: 5px;">今日价格</div>
                        </th>
                        <th class="ReserveTable_Note">
                            <div style="margin-left: 5px;">预订须知</div>
                        </th>
                        <th style="width: 420px;">
                          <div style="margin-left: 5px;">预订</div>
                        </th>
                    </tr>

                    <tr v-for="(room, index) in this.line" :key="index">
                      <td v-if="room.is_head" :rowspan="room.rownum">
                        {{room.rname}}
                        <br/>
                        {{room.shortdesc}}
                        <br/>

                        <span v-for="(att,ind) in room.attrs" :key="ind" class="hprt-facilities-facility" data-name-en="Hair Dryer">
                            <span class=" other_facility_badge--default_color">
                              <svg class="bk-icon -streamline-checkmark" fill="#008009" height="14" width="14" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false">
                                <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z">
                                </path>
                              </svg>{{att}}
                            </span>
                        </span>




                      </td>
                      <td>
                        {{room.pnum}}
                      </td>
                      <td>
                        {{room.price}}
                      </td>
                      <td>
                        {{ room.feature1 }}
                      </td>
                      <td>
                        <el-button style="margin-left: 175px" @click="reserve_tar_subroom(index)">
                          预订
                        </el-button>
                      </td>
                    </tr>
<!--                  <template v-for="(room,index) in roomInfo" :key="index">-->


<!--                  </template>-->
                </table>
            </el-row>
        </div>
        <div class="WholeLayout_Right"></div>
    </el-row>
</template>
  
<script>

import clone from "clone";

export default {
    data() {
        return {
            score:'',
            hname:'',
            haddress:'',
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
            line:[],
            roomInfo:[],
            hotelPicture: [
                // "https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o=",
                // "https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o=",
                // "https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o=",
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
  mounted(){
    this.destinationvar = this.$route.query.destination
    this.checkinvar = this.$route.query.checkin
    this.checkoutvar= this.$route.query.checkout
    this.hid = this.$route.query.hid
    this.hname=this.$route.query.hname
    this.haddress=this.$route.query.haddress
    this.province=this.$route.query.province
    this.city=this.$route.query.city
    this.score=this.$route.query.score
    this.largeImg=this.$route.query.largeImg
    this.midImg=this.$route.query.midImg
    this.midImg2=this.$route.query.midImg2

    console.log("庄周")
    console.log(this.hname)
    // this.rname=this.$route.query.rname





    this.destination=this.destinationvar
    // this.destination.setText(this.destinationvar)
    this.inDate=this.checkinvar
    this.outDate=this.checkoutvar
    // console.log(this.$route.query.infoItem)

    this.hotelPicture[2]=this.$route.query.largeImg;
    this.hotelPicture[1]=this.$route.query.midImg;
    this.hotelPicture[0]=this.$route.query.midImg2;

    console.log('destination', this.destinationvar)
    console.log('checkin', this.checkinvar)
    console.log('checkout', this.checkoutvar)
    console.log('hid', this.hid)

    // this.$http.get('/living', {
    //   params:{
    //     target
    //   }
    // })
    //     .then((response)=> {
    //       console.log(response);
    //       this.hotelPicture[2]=response.data.data.largeImg;
    //       this.hotelPicture[1]=response.data.data.midImg2;
    //       this.hotelPicture[0]=response.data.data.midImg;
    //       // this.hotelInfo=response.data.data;
    //       // this.count=this.hotelInfo.length;
    //       // this.pagesum=Math.ceil(this.count/this.eachpage)
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });

    this.$http.post('/living/room', {
      "hid": this.hid.toString(),
      "hname": "string",
      "haddress": "string",
      "province": "string",
      "city": "string",
      "score": "string",
      "largeImg": "string",
      "midImg": "string",
      "midImg2": "string",
      "attrs":"string"
    })
        .then((response)=> {
          console.log(response);
          // this.hotelPicture[2]=response.data.data.largeImg;
          // this.hotelPicture[1]=response.data.data.midImg2;
          // this.hotelPicture[0]=response.data.data.midImg;
          // this.hotelInfo=response.data.data;
          // this.count=this.hotelInfo.length;
          // this.pagesum=Math.ceil(this.count/this.eachpage)
          this.roomInfo=response.data.data

          this.line=[]

          let temp={
            is_head:false,
            rownum:0,
            rid:'',
            hid:'',
            rname:'',
            shortdesc:'',
            srid:'',
            price:'',
            pnum:'',
            feature1:'',
            feature2:'',
            feature3:'',
            hname:'',
            attrs:[],


          }
          for(let i=0;i<this.roomInfo.length;i++)
          {
             for(let j=0;j<this.roomInfo[i].subrooms.length;j++)
             {
               if(j===0){
                 temp.is_head=true;
                 temp.rownum=this.roomInfo[i].subrooms.length;
                 let att_str=this.roomInfo[i].subrooms[j].attrs;
                 if(att_str === "NAN"){temp.attrs=[];}
                 else temp.attrs=att_str.split('&');
               }
               else {temp.is_head=false}
               temp.rid=this.roomInfo[i].room.rid;
               temp.hid=this.roomInfo[i].room.hid;
               temp.rname=this.roomInfo[i].room.rname;
               temp.shortdesc=this.roomInfo[i].room.shortdesc;
               temp.srid=this.roomInfo[i].subrooms[j].srid;
               temp.price=this.roomInfo[i].subrooms[j].price;
               if(this.roomInfo[i].subrooms[j].pnum === '0') temp.pnum='2';
               else temp.pnum=this.roomInfo[i].subrooms[j].pnum;
               if(this.roomInfo[i].subrooms[j].feature1==="含早早餐不错早餐不错"){temp.feature1="早餐不错"}
               else if(this.roomInfo[i].subrooms[j].feature1==="含早早餐很好早餐很好"){temp.feature1="早餐很好"}
               else if(this.roomInfo[i].subrooms[j].feature1==="含早早餐美味早餐美味"){temp.feature1="早餐美味"}
               else if(this.roomInfo[i].subrooms[j].feature1==="含早早餐超棒早餐超棒"){temp.feature1="早餐超棒"}
               else if(this.roomInfo[i].subrooms[j].feature1==="含早早餐超赞早餐超赞"){temp.feature1="早餐超赞"}
               else temp.feature1=this.roomInfo[i].subrooms[j].feature1;
               let reg=/可选早餐\d*元/
               let res=temp.feature1.replace(reg,"") //将数字换为a
               temp.feature1=res;
               temp.feature2=this.roomInfo[i].subrooms[j].feature2;
               if(this.roomInfo[i].subrooms[j].feature1 === "无需预付到店付款无需预付"){temp.feature1="到店付款无需预付";}
               if(this.roomInfo[i].subrooms[j].feature2 === "无需预付到店付款无需预付"){temp.feature2="到店付款无需预付";}
               if(this.roomInfo[i].subrooms[j].feature3 === "无需预付到店付款无需预付"){temp.feature3="到店付款无需预付";}
               else temp.feature3=this.roomInfo[i].subrooms[j].feature3;
               this.line.push(clone(temp))
             }

          }
          console.log(this.line)

        })
        .catch(function (error) {
          console.log(error);
        });
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
          this.$router.push({
                path:'/view',
                query:{
                  destination:this.destination,
                  checkin:this.inDate,
                  checkout:this.outDate,
                  checkinfo:"this.checkInInfo[0].value"
                }
              }
          )
        },
        reserve_tar_subroom(index){

          console.log(this.line[index]);

          this.$router.push({
                path:'/living/reverse/confirm',
                query:{
                  // destination:this.destinationvar,
                  // checkin:this.checkinvar,
                  // checkout:this.checkoutvar,
                  // hid:this.hid,
                  // hname: this.hotelInfo[index].hname,
                  // haddress: this.hotelInfo[index].haddress,
                  // province: this.hotelInfo[index].province,
                  // city: this.hotelInfo[index].city,
                  // score: this.hotelInfo[index].score,
                  // // largeImg: "https://ac-a.static.booking.cn/xdata/images/hotel/max1024x768/66415503.jpg?k=52f2b0bdee1fcf6f3d39827c54db90158c1d350e1847127c9125736527a83107&o=&hp=1",
                  // // midImg: "https://ac-a.static.booking.cn/xdata/images/hotel/max500/66415508.jpg?k=0518aea49dbe3aff8dc26f9f123bc302a7a3bddb21eb7d2885afc1a333274432&o=&hp=1",
                  // // midImg2: "https://ac-a.static.booking.cn/xdata/images/hotel/max500/72143254.jpg?k=f6c0e62f9439b53c0bfa1cdc43be325b4bf2ce8ed5648041525aff7052d28370&o=&hp=1"
                  // largeImg:this.hotelInfo[index].largeImg,
                  // midImg:this.hotelInfo[index].midImg,
                  // midImg2:this.hotelInfo[index].midImg2,
                  rid:this.line[index].srid,
                  hid:this.hid,
                  uid:this.$store.state.uname,
                  checkin:this.checkinvar,
                  checkout:this.checkoutvar,
                  price:this.line[index].price,
                  haddress:this.haddress,
                  large_img:this.largeImg,
                  hname:this.hname,
                  rname:this.line[index].rname
                }
              }
          )
        }
    },

}

</script>



<style scoped>
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
table,th,td{
  border: 1px solid black;
  border-collapse: collapse;
  padding: 6px;
}
</style>
