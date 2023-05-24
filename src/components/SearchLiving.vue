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

                      <div class="FliterMoney" style="height: fit-content">
<el-row style="margin-top: 8px;margin-left: 18px">
                              <b>你的预算（每晚）</b>
</el-row>
                            <el-col>
                              <el-row class="checkbox_row">
                              <el-checkbox v-model="priceAll" label="所有" size="large" />
                              </el-row>
                                <el-row class="checkbox_row">
                              <el-checkbox v-model="price0_500" label="0元-500元" size="large" />
                                </el-row>
                                  <el-row class="checkbox_row">
                              <el-checkbox v-model="price500_1000" label="500元-1000元" size="large" />
                                  </el-row>
                                    <el-row class="checkbox_row">
                              <el-checkbox v-model="price1000_1500" label="1000元-1500元" size="large" />
                                    </el-row>
                                      <el-row class="checkbox_row">
                              <el-checkbox v-model="price1500_2000" label="1500元-2000元" size="large" />
                                      </el-row>
                                        <el-row class="checkbox_row">
                              <el-checkbox v-model="price2000" label="2000元以上" size="large" />
                                        </el-row>
                            </el-col>

                      </div>

                      <div class="FliterScore" style="height: fit-content">

                          <el-row style="margin-left: 18px;margin-top: 8px">
                          <b >酒店评分</b>
                          </el-row>
                          <el-col>
                            <el-row class="checkbox_row">
                              <el-checkbox v-model="scoreAll" label="所有" size="large" />
                            </el-row>
                            <el-row class="checkbox_row">
                            <el-checkbox v-model="score4" label="2分-4分" size="large" />
                            </el-row>
                            <el-row class="checkbox_row">
                            <el-checkbox v-model="score6" label="4分-6分" size="large" />
                            </el-row>
                              <el-row class="checkbox_row">
                            <el-checkbox v-model="score8" label="6分-8分" size="large" />
                              </el-row>
                                <el-row class="checkbox_row">
                            <el-checkbox v-model="score10" label="8分以上" size="large" />
                                </el-row>
                          </el-col>

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

                    <div class="RightCol_EachHotel" v-for="(option, index) in this.ComDataList.slice((currpage-1)*eachpage,currpage*eachpage)" :key="index">
                        <el-row>
                            <el-col :span="6.5">
                                <img :src="option.largeImg" class="RightCol_EachHotel_Photo" />
                            </el-col>
                            <el-col :span="17.5">
                                <el-row class="RightCol_EachHotel_Message">
                                    <el-col :span="22" class="RightCol_EachHotel_Message_Title">
                                        <b>{{ option.hname }}</b>
                                    </el-col>
                                    <el-col :span="2">
                                        <el-button class="RightCol_EachHotel_Message_Rate">
                                            {{ option.score }}
                                        </el-button>
                                    </el-col>
                                </el-row>
                                <el-row class="RightCol_EachHotel_Message_Depict">
                                    <div style="margin-left: 10px;">
                                        {{option.haddress}}
                                    </div>
                                  </el-row>
                                <el-row>
                                    <div style="margin-left: 20px;font-weight: bolder;font-size: 28px">
                                      {{ option.eqprice}}元
                                    </div>
                                </el-row>
                                <el-row>
                                    <el-button class="RightCol_EachHotel_Message_ReserveButton" @click="ConvertToReserve(option.hid,index)">
                                        查看可定选项<span>&nbsp;&nbsp;&nbsp;</span>>
                                    </el-button>
                                </el-row>
                            </el-col>
                        </el-row>
                    </div>
                  <div style="float:right;margin-right:50px;margin-top: 50px">
                    <el-button v-if="currpage>1" @click="currpage--">上一页</el-button>
                    <span>{{currpage}}</span>/<span>{{pagesum}}</span>
                    <el-button v-if="currpage<pagesum" @click="currpage++">下一页</el-button>
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
            priceAll:true,
            price0_500:false,
            price500_1000:false,
            price1000_1500:false,
            price1500_2000:false,
            price2000:false,

            scoreAll:true,
            score2:false,
            score4:false,
            score6:false,
            score8:false,
            score10:false,

            eachpage:10,

          currpage:1,
          destinationvar:'',
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
                { value: 2, label: "优先显示高价住宿" },
                { value: 3, label: "住宿评级（从高到低）" },
                { value: 4, label: "住宿评级（从低到高）" },
            ],

            choose: 0,

            hotelInfo: [
                // {
                //
                // },
            ]

        }
    },
    computed: {
      pagesum()
      {
        return Math.ceil(this.ComDataList.length/this.eachpage);
      }, //总页数

        spliceCheckInInfo() {
            return this.checkInInfo[0].value.toString() + "位成人·" + this.checkInInfo[1].value.toString() + "位儿童·" + this.checkInInfo[2].value.toString() + "间客房"
        },
        spliceDestinationInfo() {
            return this.destinationvar + "：共" + this.count + "家住宿"
        },
        spliceSortWay: {
            set(newValue) {
                this.sortWay = newValue;
                switch (newValue){
                  case 0:
                    this.hotelInfo.sort(function (a,b){return b.score-a.score;})
                    break;
                  case 1:
                    this.hotelInfo.sort(function (a,b){return a.eqprice-b.eqprice;})
                    break;
                  case 2:
                    this.hotelInfo.sort(function (a,b){return b.eqprice-a.eqprice;})
                    break;
                  case 3:
                    this.hotelInfo.sort(function (a,b){return b.score-a.score;})
                    break;
                  case 4:
                    this.hotelInfo.sort(function (a,b){return a.score-b.score;})
                    break;
                }

            },

            get() {
                return "排序方式：" + this.sortBy[this.sortWay].label
            }
        },


        ComDataList(){
        return this.hotelInfo.filter((item) => {
          if((this.priceAll || this.is_in_price(item)) && (this.scoreAll || this.is_in_score(item))){
            return item
          }
        })
      },

    },


    mounted(){
      console.log(0.1+0.2);
      this.destinationvar = this.$route.query.destination
      console.log(this.destinationvar)
      this.checkinvar = this.$route.query.checkin
      this.checkoutvar= this.$route.query.checkout
      this.checkinfovar = this.$route.query.checkinfo

      this.destination=this.destinationvar
      // this.destination.setText(this.destinationvar)
      this.inDate=this.checkinvar
      this.outDate=this.checkoutvar

      console.log('destination', this.destinationvar)
      console.log('checkin', this.checkinvar)
      console.log('checkout', this.checkoutvar)
      console.log('checkinfo', this.checkinfovar)

      this.$http.get('/living', {
        params: {
          target:this.destinationvar
        }
      })
          .then((response)=> {
            console.log(response);
            this.hotelInfo=response.data.data;
            this.count=this.hotelInfo.length;
            // this.pagesum=Math.ceil(this.count/this.eachpage)
          })
          .catch(function (error) {
            console.log(error);
          });



    },
    methods: {
      is_0_500(item)
      {
        return item.eqprice > 0 && item.eqprice <= 500;
      },
      is_500_1000(item)
      {
        return item.eqprice > 5000 && item.eqprice <= 1000;
      },
      is_1000_1500(item)
      {
        return item.eqprice > 1000 && item.eqprice <= 1500;
      },
      is_1500_2000(item)
      {
        return item.eqprice > 1500 && item.eqprice <= 2000;
      },
      is_2000(item)
      {
        return item.eqprice > 2000;
      },
      is_in_price(item)
      {
        if(this.price0_500 && this.is_0_500(item)) return true;
        if(this.price500_1000 && this.is_500_1000(item)) return true;
        if(this.price1000_1500 && this.is_1000_1500(item)) return true;
        if(this.price1500_2000 && this.is_1500_2000(item)) return true;
        return this.price2000 && this.is_2000(item);
      },
      is2(item)
      {
        return item.score>0 && item.score<=2;
      },
      is4(item)
      {
        return item.score>2 && item.score<=4;
      },
      is6(item)
      {
        return item.score>4 && item.score<=6;
      },
      is8(item)
      {
        return item.score>6 && item.score<=8;
      },
      is10(item)
      {
        return item.score>8 && item.score<=10;
      },
      is_in_score(item)
      {
        if(this.score2 && this.is2(item)) return true;
        if(this.score4 && this.is4(item)) return true;
        if(this.score6 && this.is6(item)) return true;
        if(this.score8 && this.is8(item)) return true;
        return this.score10 && this.is10(item);
      },
      // destination:this.destination,
      // checkin:this.date[0],
      // checkout:this.date[1],
      // checkinfo:this.checkInInfo[0].value

        getRouteInfo()
        {
          this.destination = this.$route.params.destination
          this.checkin = this.$route.params.checkin
          this.checkout = this.$route.params.checkout
          this.checkinfo = this.$route.params.checkinfo
          console.log('destination', this.destination)
          console.log('checkin', this.checkin)
          console.log('checkout', this.checkout)
          console.log('checkinfo', this.checkinfo)
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
            // 搜特价
          this.destinationvar=this.destination;
          this.$http.get('/living', {
            params: {
              target:this.destination
            }
          })
              .then((response)=> {
                console.log(response);
                this.hotelInfo=response.data.data;
                this.count=this.hotelInfo.length;
                // this.pagesum=Math.ceil(this.count/this.eachpage)
              })
              .catch(function (error) {
                console.log(error);
              });
        },

        ConvertToReserve(hidvar,index){
            this.choose = index;
            // + this.hotelInfo[this.choose].name
            // this.$router.push("/living/reverse" );
          this.$router.push({
                path:'/living/reverse',
                query:{
                  destination:this.destinationvar,
                  checkin:this.checkinvar,
                  checkout:this.checkoutvar,
                  hid:hidvar,
                  hname: this.hotelInfo[index].hname,
                  haddress: this.hotelInfo[index].haddress,
                  province: this.hotelInfo[index].province,
                  city: this.hotelInfo[index].city,
                  score: this.hotelInfo[index].score,
                  // largeImg: "https://ac-a.static.booking.cn/xdata/images/hotel/max1024x768/66415503.jpg?k=52f2b0bdee1fcf6f3d39827c54db90158c1d350e1847127c9125736527a83107&o=&hp=1",
                  // midImg: "https://ac-a.static.booking.cn/xdata/images/hotel/max500/66415508.jpg?k=0518aea49dbe3aff8dc26f9f123bc302a7a3bddb21eb7d2885afc1a333274432&o=&hp=1",
                  // midImg2: "https://ac-a.static.booking.cn/xdata/images/hotel/max500/72143254.jpg?k=f6c0e62f9439b53c0bfa1cdc43be325b4bf2ce8ed5648041525aff7052d28370&o=&hp=1"
                  largeImg:this.hotelInfo[index].largeImg,
                  midImg:this.hotelInfo[index].midImg,
                  midImg2:this.hotelInfo[index].midImg2,
                }
              }
          )
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
  height: fit-content;
}

.FliterMoney {
    border: 1px solid rgb(231, 231, 231);
    width: 300px;
    height: fit-content;
}

.FliterScore_Note {
  font-size: 15px;
  margin-left: 15px;
  margin-top: 10px;
  height: fit-content;
}

.FliterScore {

  border: 1px solid rgb(231, 231, 231);
  width: 260px;
  height: fit-content;
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
    height: 80px;
}

.RightCol_EachHotel_Message_ReserveButton{
    margin-left: 440px;
    width: 130px;
    height: 40px;
    background-color:rgb(0,113,194);
    color: white;
    font-weight: bolder;
}

.checkbox_row{
  margin-left: 18px;
}
</style>
