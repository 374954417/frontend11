<template>

  <el-tabs :tab-position="'left'" style="height: 800px" class="demo-tabs">
    <el-tab-pane label="修改密码">
      <div class="change-password" style="margin-top: 30px">
        <el-form ref="changePasswordForm" :model="changePasswordForm" label-width="100px" size="small">
          <el-form-item label="旧密码" prop="oldPassword">
            <el-input v-model="changePasswordForm.oldPassword" show-password></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input v-model="changePasswordForm.newPassword" show-password></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input v-model="changePasswordForm.confirmPassword" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="changePassword" :loading="isChangingPassword">确认修改</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-tab-pane>
    <el-tab-pane label="订单信息">
      <div class="order-list" style="margin-top: 30px">
        <div v-for="(order, index) in orders" :key="order.id" class="order-item">
          <div class="order-image">
            <img :src="order.image" alt="酒店图片" style="height: 120px;width: 180px">
          </div>
          <div class="order-details">
            <span class="order-number">{{ index + 1 }}</span>
            <span class="order-hotel">酒店名称: {{ order.hotel }}</span>
            <span class="order-date">开始日期: {{ order.startDate }}</span>
            <span class="order-date">结束日期: {{ order.endDate }}</span>
            <span class="order-location">地点: {{ order.location }}</span>
            <span class="order-amount">金额: {{ order.amount }} 元</span>
          </div>

          <el-popconfirm title="确认要取消吗?"
                         confirm-button-text="是"
                         cancel-button-text="否"
                         @confirm="this.cancelOrder(index)">
            <template #reference>
              <el-button type="danger" size="small">取消订单</el-button>
            </template>
          </el-popconfirm>

        </div>
      </div>

    </el-tab-pane>
  </el-tabs>



</template>
  
<script>

export default {
    data() {
        return {
          changePasswordForm: {
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
          },
            orders: [
                {
                    id: 1,
                    image: 'https://r-xx.bstatic.com/xdata/images/xphoto/2880x868/215293417.jpeg?k=562182ee69e27456f94592bee6e4b113125234897dde51ef8a12ffd4ed3e00a3&o=',
                    hotel: 'ABC Hotel',
                    startDate: '2023-05-21',
                    endDate: '2023-05-23',
                    location: 'City A',
                    amount: '100'
                },
                {
                    id: 2,
                    image: 'https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o=',
                    hotel: 'XYZ Hotel',
                    startDate: '2023-05-22',
                    endDate: '2023-05-24',
                    location: 'City B',
                    amount: '150'
                },
                {
                    id: 3,
                    image: 'https://cf.bstatic.com/xdata/images/city/600x600/613105.jpg?k=1e85cf4dec7b0d5a6327be91c38cf9c1711f9da1a31c4cba736f9cb751443ff1&o=',
                    hotel: '123 Hotel',
                    startDate: '2023-05-23',
                    endDate: '2023-05-25',
                    location: 'City C',
                    amount: '200'
                }
            ]
        };
    },
    mounted() {
      this.$http.post('/user/order',{
        "uid": 0,
        "uname": this.$store.state.uname,
        "sex": "string",
        "age": 0,
        "phone_number": "string",
        "pwd": "string"
      }).then((response)=>{
        console.log(response)
        this.orders=response.data.data;
      }).catch((error)=>{
        console.log(error);
      })
    },
    methods: {
          changePassword(){
            this.$http.post('/user/changepwd',{
              "uid": 0,
              "uname": this.$store.state.uname,
              "sex": "string",
              "age": 0,
              "phone_number": this.changePasswordForm.oldPassword,
              "pwd": this.changePasswordForm.newPassword
            }).then((response)=>{
              console.log(response)
              if(response.data.code === '107') {this.$toast.warning("原密码错误！",{position:"top"})}
              else {
                this.$toast.success("密码修改成功！",{position:"top"});
                this.$router.push("/living");
              }
            }).catch((error)=>{
              console.log(error);
            })
          },
          cancelOrder(index) {
            this.$http.post('/user/deleteorder',{
              "oid": this.orders[index].id,
              "hid": "string",
              "uid": "string",
              "rid": "string",
              "begindate": "2023-05-24",
              "enddate": "2023-05-24",
              "totalprice": "string"
            }).then((response)=>{
              console.log(response)
              if(response.data.code===409)
              {
                this.$toast.success("删除成功！",{position:"top"})
                this.$http.post('/user/order',{
                  "uid": 0,
                  "uname": this.$store.state.uname,
                  "sex": "string",
                  "age": 0,
                  "phone_number": "string",
                  "pwd": "string"
                }).then((response)=>{
                  console.log(response)
                  this.orders=response.data.data;
                }).catch((error)=>{
                  console.log(error);
                })
              }
            }).catch((error)=>{
              console.log(error);
            })
              // 在这里添加取消订单的逻辑
              // console.log('取消订单', orderId);

          }
      }
};
</script>
  
<style>
.order-list {
    max-width: 600px;
    margin: 0 auto;
}

.order-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f7f7f7;
}

.order-image {
    width: 180px;
    height: 120px;
    margin-right: 10px;
}

.order-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.order-details {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.order-number {
    font-weight: bold;
}

.order-hotel {
    margin-bottom: 5px;
}

.order-date {
    color: #888;
}

.order-location {
  margin-top: 5px;
}

.order-amount {
  margin-top: 5px;
  font-weight: bold;
}

.el-button--danger {
  margin-left: 10px;
}



/*.el-tabs__item{*/
/*  font-size:20px !important;*/
/*}*/
</style>
