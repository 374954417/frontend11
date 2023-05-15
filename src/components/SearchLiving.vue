<template>
    <el-row style="margin-left: 20%;margin-right: 20%;">
        <el-col :span="6">
            <el-row style="background-color: rgb(255,196,137); width: 260px;">
                
                    <div style="background-color: rgb(254,187,2); width: 90%; height: 40px; margin-left: 5%; margin-top: 5px;">
                        <p style="font-size: 20px; text-align:center; margin-top: 5px;">境内外特价搜不停</p>          
                    </div>
                
                <el-label class="noteA">目的地/住宿名称</el-label><br/>
                <el-input v-model="destination" class="boxA"></el-input><br/>
                <el-label class="noteA">入住日期</el-label><br/>
                <el-date-picker v-model="inDate" style="height: 35px; width: 210px; margin-left: 20px;"></el-date-picker><br/>
                <el-label class="noteA">退房日期</el-label><br/>
                <el-date-picker v-model="outDate" style="height: 35px; width: 210px; margin-left: 20px;"></el-date-picker><br/>
                <el-label class="noteA">入住一晚</el-label><br/>
                <el-select class="boxA" :placeholder="CheckInInfo" collapse-tags=selTag multiple=true>
                    <el-option v-for="(option, index) in options" :key="index" :label="option.label" :value="option.value">
                        <div class="option-content">
                            <span>{{ option.label }}</span>
                            <div class="button-group">
                                <el-button class="minus" @click="decrement(index)">-</el-button>
                                <div class="value">{{ option.value }}</div>
                                <el-button class="plus" @click="increment(index)">+</el-button>
                            </div>
                        </div>
                    </el-option>
                </el-select>
               
                <el-button type="success" class="boxA" style="height: 40px; margin-top: 15px; margin-bottom: 15px; background-color: rgb(0,113,194);">搜特价</el-button>

            </el-row>

            <div style="border: 1px solid rgb(231,231,231); margin-top: 15px; width: 260px; height: 40px;">
                <el-row>
                    <b>缩小搜索范围</b>
                </el-row>
            </div>


        </el-col>
        <el-col :span="18" >
           
        </el-col>
    </el-row>
</template>
  
<script>


export default{

    data(){
        return{
            destination:'',
            inDate:'',
            outDate:'',
            selTag: false,
            options: [
                { value: 1, label: '成人' },
                { value: 0, label: '儿童' },
                { value: 1, label: '客房' }
            ]
        }
    },
    computed:{
        CheckInInfo(){
            return this.options[0].value.toString() + "位成人·" + this.options[1].value.toString() + "位儿童·" + this.options[2].value.toString() + "间客房"
        }
    },
    methods: {
    increment(idx) {
        ++this.options[idx].value
    },
    decrement(idx) {
        if((idx == 0 || idx == 2) && this.options[idx].value > 1) --this.options[idx].value;
        if(idx == 1 && this.options[idx].value > 0) --this.options[idx].value;
    },
  },
}

</script>
  
<style>

.center {
  text-align: center;
  line-height: 2;
}

.noteA{
    margin-top: 15px;
    font-size: 10px;
    margin-left: 20px;
}

.boxA{
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

</style>
