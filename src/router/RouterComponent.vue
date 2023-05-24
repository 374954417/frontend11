
<template>
    <el-row class="WholeLayout">
        <div class="WholeLayout_Left"></div>
        <div class="WholeLayout_Center">
            <el-row class="FirstRow">
                <b class="Title">Booking.com</b>

                <div v-if="!this.$store.state.is_login" class="ButtonPosition">
<!--                    <el-button class="RegisterButton">-->
<!--                        注册/登录-->
<!--                    </el-button>-->
                    <el-button class="LoginButton" @click="navigatorToLogin">
                        注册/登录
                    </el-button>
                </div>
                <div v-else class="ButtonPosition">
                  <el-button class="userInfo" @click="displayUserInfo">
                    用户中心
                  </el-button>
                </div>
            </el-row>
            <el-row class="SecondRow">
                <el-button class="LivingButton" @click="navigateToLiving">
                    住宿
                </el-button>
            </el-row>
        </div>
        <div class="WholeLayout_Right"></div>
    </el-row>
    <!--路由占位标签-->
    <router-view></router-view>


  <div class="emk_footer_update emk_footer_centered emk_footer_update_space">
    <div class="footerconstraint-inner">
      <div class="cs_contact_footer">
        <!-- <div class="cs_contact_footer_icon">
            <i class="cs_contact_footer_phone_icon"></i>
        </div> -->
        <div class="cs_contact_footer_title">
          <h3 class="cs_contact_footer_title_header">24小时客服助您安心出行</h3>
          <p class="cs_contact_footer_title_subheader">订单有问题？我们来帮您！</p>
        </div>
        <div class="cs_contact_footer_numbers">
          <div class="cs_contact_footer_numbers_section domestic_international_line">
            <p class="number_title">
              中文客服热线</p>
            <p class="number_content">
              <a href="https://secure.booking.com/content/cs.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182&amp;show_contact_form=1"
                 class="number_content" target="_blank">
                点击了解更多客服帮助
              </a>
            </p>
          </div>
          <div class="cs_contact_footer_numbers_section help_center">
            <p class="number_title">
              常见问题</p>
            <p class="number_content">去<a
                href="https://secure.booking.com/content/cs.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                target="_blank" class="number_content">帮助中心</a>看看</p>
          </div>
        </div>


      </div>
      <div class="emk_footer_wrapper">
        <div class="emk_footer_banner_block">
          <h2>方便又省钱！</h2>
        </div>
        <div class="emk_footer_subbanner_block">
          立即注册，获取优惠好价！
        </div>
        <div class="clearfix"></div>
        <div class="emk_footer_form_layout">
          <label for="newsletter_to" class="invisible_spoken">
            输入你的电子邮箱，我们将向你发送最佳优惠折扣
          </label>
          <div class="subscription_form_wrap">
            <input type="email" name="to" autocapitalize="off" required="true" id="newsletter_to"
                   class="input_newsletter_subscription_to" placeholder="您的电邮地址" title="" value=""
                   data-ajax-submit="">
            <el-button style="height: 30px; width: 80px; margin-left: 10px;" type="success"
                       class="SearchInfo_OkButton">订阅</el-button>
          </div>
          <div data-et-view="dLYHMRFeRQcDaIPaMNfQCcbNXGDJae:1"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="footerconstraint-inner">
    <div id="footer" class="footer-navigation-links-wrapper clearfix" role="navigation">
      <div id="footer_links" class="footer-navigation-links">
        <div class="footer-navigation-links-column footer-seo-links-to-html-sitemaps">
          <ul class="footer-navigation-links-list">
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/country.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 data-ga="seoindexlinks" rel="nofollow">
                国家/地区
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/region.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 data-ga="seoindexlinks" rel="nofollow">
                区域
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/city.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 data-ga="seoindexlinks" rel="nofollow">
                城市
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/district.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 data-ga="seoindexlinks" rel="nofollow">
                区
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/airport.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 data-ga="seoindexlinks" rel="nofollow">
                机场
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/hotel/index.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 data-ga="seoindexlinks" rel="nofollow">
                酒店
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/landmark.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 data-ga="seoindexlinks" rel="nofollow">
                周边地标/景点
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-navigation-links-column">
          <ul class="footer-navigation-links-list footer-seo-links-to-index">
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/booking-home/index.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 data-ga="booking-home">
                民宿短租
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/apartments/index.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 data-ga="apartments">
                公寓
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/resorts/index.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 data-ga="resorts">
                度假村
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/villas/index.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 data-ga="villas">
                别墅
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/hostels/index.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 data-ga="hostels">
                青旅
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/bed-and-breakfast/index.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 data-ga="bed_and_breakfast">
                住宿加早餐旅馆
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/guest-house/index.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 data-ga="guest_house">
                旅馆
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-navigation-links-column">
          <ul class="footer-navigation-links-list">
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/accommodations.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 data-ga="accommodations">
                全球独特住宿
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/reviews
.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182
" data-ga="seoindexlinks" class="js-reviews-footer-link">
                客人点评
              </a>
            </li>
            <div data-et-view="  BHDTJdReLLCBLZBeMbFMOFIbeDUHYKe:1 BHDTJdReLLCBLZBeMbFMOFIbeDUHYKe:3 ">
            </div>
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/extended-stays/index.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 data-ga="extended-stays">
                探索月租
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://booking.com/articles.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 type="nav" location="main-site-footer" category="articles-link">
                游记攻略
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/deals/index.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182"
                 title="季节和假日优惠">
                季节和假日优惠
              </a>
            </li>
            <li class="footer-navigation-link">
              <a
                  href="https://www.booking.com/traveller-awards/index.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182">
                Traveller Review Awards
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-navigation-links-column">
          <ul class="footer-navigation-links-list">
            <li class="footer-navigation-link">
              <a rel="nofollow"
                 href="http://cars.booking.com/Home.do?affiliateCode=booking-com&amp;adplat=footer&amp;preflang=zh-cn"
                 target="_blank"
                 data-google-track="Click/Rental cars footer link click (loy_footer_rentalcars_copy: 0)/mytrips"
                 data-ga-track="click|pageview:/outgoinglink/traveljigsaw/zh">
                租车服务
              </a>
            </li>
            <li class="footer-navigation-link">
              <a rel="nofollow"
                 href="https://booking.com/pxgo?lang=zh&amp;token=UmFuZG9tSVYkc2RlIyh9Yek6N0IyIDltEfkJo-mEZo_i6j5_4WSmKDTElZo2GzaHJ15tKqxikGr2dbfwEHaxuOoZvhkSNXtfoeAgvYgLnCFWQGiXEz-GLKHHZ0jKE0kY5HoBVQrg1VmzjDPIFXCqBTQ-T1G9Zqkkyh-uFIySh8Z76gEKcUCfXe5Q37ccTu01xN7Cm7vR2cq4nzjPATGYoTC_40AS1dZAqjgFSNP5XbP_DH6YKXOweEavM87tORFclfTlI8was3OnH554m0zm20A24Qu28FrhUiEcU9y3Kkj6_iIO11mBuFMfdoOWwKn_mn8u6FJSfhMsF4TQLO5rfA&amp;aid=304142&amp;url=https%3A%2F%2Fbooking.kayak.com%2Fin%3Fa%3Dbdc%252Ffooter_link%26mc%3DCNY%26bdclc%3Dzh-cn%26sid%3D49d0a7bbf33b7848a413fb098219e182%26p%3Dfooter_link"
                 target="_blank" data-google-track="Click/Kayak footer link/mytrips"
                 data-ga-track="click|pageview:/outgoinglink/kayaklink">
                订机票
              </a>
            </li>
            <li class="footer-navigation-link">
              <a rel="nofollow" href="http://www.opentable.com?ref=16087" target="_blank"
                 data-google-track="Click/Opentable footer link/mytrips"
                 data-ga-track="click|pageview:/outgoinglink/opentablelink">
                餐厅订位
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="
https://www.booking.com/affiliate-program/v2/index.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182&amp;utm_medium=referral&amp;utm_source=booking.com&amp;utm_campaign=booking-footer&amp;utm_content=travel-agents-link
" title="Booking.com for Travel Advisers"
                 data-ga-track="click|pageview:/internallink/partner/footer/adviserslink/mytrips/zh-cn">
                Booking.com旅行代理机构中心
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-navigation-links-column">
          <ul class="footer-navigation-links-list">
            <li class="footer-navigation-link">
              <a
                  href="https://www.booking.com/covid-19-booking-faqs.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182">
                新冠肺炎（COVID-19）疫情常见问题及解答
              </a>
            </li>
            <li class="footer-navigation-link">
              <a
                  href="https://www.booking.com/content/about.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182">关于Booking.com</a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://secure.booking.com/help.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182&amp;source=footer_navigation#/?source=footer_navigation"
                 data-ga-track="click|Click|Action: mytrips|hc_entrypoint_footer_navigation">
                客服帮助
              </a>
            </li>
            <li class="footer-navigation-link">
              <a
                  href="https://partner.booking.com/en-gb?utm_campaign=footer_list&amp;utm_medium=frontend_footer&amp;utm_source=booking.com">
                酒店自助平台
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://careers.booking.com/?utm_source=corporate&amp;utm_medium=footer"
                 data-ga-track="click|pageview:/outgoinglink/footer/careerlink/zh-cn">
                Careers
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://sustainability.booking.com/"
                 data-ga-track="click|pageview:/outgoinglink/footer/sustainabilitylink/zh-cn">
                可持续发展项目
              </a>
            </li>
            <li class="footer-navigation-link">
              <a class="tracked" data-google-track="Click/Action: about_us/press"
                 href="https://news.booking.com/zh-hk/">
                新闻中心
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://www.booking.com/trust-and-safety.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182&amp;utm_source=footer_menu&amp;utm_medium=web_frontend"
                 class="tracked">
                安全旅行信息中心
              </a>
            </li>
            <li class="footer-navigation-link">
              <a class="tracked" data-google-track="Click/Action: about_us/investor_relations"
                 href="https://www.bookingholdings.com/">
                投资者关系
              </a>
            </li>
            <li class="footer-navigation-link">
              <a
                  href="https://www.booking.com/content/terms.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182">
                条款与条件
              </a>
            </li>
            <li class="footer-navigation-link">
              <a
                  href="https://secure.booking.com/content/complaints.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182">
                合作伙伴申诉
              </a>
            </li>
            <li class="footer-navigation-link">
              <a
                  href="https://www.booking.com/content/how_we_work.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182">
                我们如何运作
              </a>
            </li>
            <li class="footer-navigation-link">
              <a
                  href="https://www.booking.com/content/privacy.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182">
                隐私和Cookie声明
              </a>
            </li>
            <li class="footer-navigation-link">
              <a href="https://www.bookingholdings.com/about/compliance-and-ethics/">
                MSA声明
              </a>
            </li>
            <li class="footer-navigation-link" data-ga-track="click|CSIR|CS|footer_link_contact_us">
              <a
                  href="https://www.booking.com/content/contact-us.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182">
                其他问题查询
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>


// import router from "@/router/index";

export default {
  // mounted() {
  //   this.$router.push('/living')
  // },
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

        displayUserInfo()
        {
          this.$router.push('/user/order');
          // console.log(typeof this.$store.state.is_login);
          // console.log(typeof 0);
          // console.log(this.$store.is_login === 0);
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