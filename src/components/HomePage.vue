
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

    <div id="booking-footer" class="footer-wrapper">
        <div id="footer_top_menu" class="footer-top-menu">
            <div class="footer-top-partners clearfix js-footer-top-menu">
                <div class="footerconstraint-inner clearfix">
                    <div id="footertopnav-partners" role="navigation">
                        <p class="footer-top-partner-text footer-top-partner-buttons">
                            <a ref="nofollow"
                                href="https://join.booking.com/?lang=zh-cn&amp;aid=304142&amp;utm_source=footer_menu&amp;utm_medium=frontend&amp;contact_details=UmFuZG9tSVYkc2RlIyh9Yb0onTJoWKrgOHVeiBVJUfWzcY24nLgi3g-LG2t_Dlrh&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB"
                                target="_blank"
                                data-ga-track="click|pageview:/internallink/partner/footer/hotellink/mytrips/zh-cn"
                                data-et-click="customGoal:cCHObTRVDEZRdPQBcGCfTKYCcZeKe:4 "
                                data-et-view="HCZEZUaNZIUONSFTUQODZEYTYeYINXGET:1" class="footer-top-button" color="white"
                                data-qa="joinapp_ep">
                                上线我的住宿
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <!-- <div class="footerconstraint-inner clearfix">
                <div id="footertopnav" role="navigation">
                    <ul class="footer-top-links-list">
                        <li class="footer-top-link">
                            <a rel="nofollow"
                                href="https://secure.booking.com/mytrips.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182&amp;prefer_site_type=mdot">手机版视图</a>
                        </li>
                        <li class="footer-top-link">
                            <a class="manage"
                                href="https://secure.booking.com/myreservations.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182&amp;tmpl=profile/myreservations">
                                管理您的预订
                            </a>
                        </li>
                        <li class="footer-top-link" data-ga-track="click|CSIR|CS|footer_top_customer_service_help">
                            <a class="cuca"
                                href="https://secure.booking.com/help.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182&amp;source=blue_footer#/?source=blue_footer"
                                data-ga-track="click|Click|Action: mytrips|hc_entrypoint_blue_footer"
                                data-bui-component="Tooltip" data-tooltip-text="您的参考编号是 “49D0A7B”">
                                客服帮助
                            </a>
                        </li>
                        <li class="footer-top-link">
                            <a href="
https://www.booking.com/affiliate-program/v2/index.zh-cn.html?aid=304142&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;sid=49d0a7bbf33b7848a413fb098219e182&amp;utm_campaign=booking-footer&amp;utm_content=become-an-affiliate-link&amp;utm_medium=referral&amp;utm_source=booking.com
" data-bui-component="Tooltip" class="footer_become_affiliate"
                                data-ga-track="click|pageview:/internallink/partner/footer/affiliatelink/mytrips/zh-cn"
                                data-tooltip-text="成为分销合作伙伴">
                                成为分销合作伙伴
                            </a>
                        </li>
                        <li class="footer-top-link">
                            <a href="https://business.booking.com/?lang=zh-cn&amp;label=gen173bo-1DCA4oggI46AdIK1gDaGKIAQGYASu4ARfIAQzYAQPoAQH4AQSIAgGYAiGoAgO4Ape1sqMGwAIB0gIkZTMyYjI3MjctOTQ2OS00MDA3LThjNzMtMmYwY2QxOGI2ZGNh2AIE4AIB&amp;aid=304142"
                                class="tracked"
                                data-google-track="Click/Action: mytrips/BBTool Footer BBZ">Booking.com商旅服务</a>
                        </li>
                        <li class="footer-top-link footer-top-link--last china_gtw_footer_menu">
                            <a href="#" class="jq_tooltip" data-title="关注Booking.com官方微信号"
                                data-node_tt_id="china_gtw_header_hover" data-tooltip-class="gtw_header_tooltip"
                                id="china_gtw_header_cta" aria-describedby="materialized_tooltip_69ns1">
                                关注Booking.com官方微信号<img width="25px"
                                    src="https://cf.bstatic.com/static/img/wechat2/38ee5959c79a230731f7b5191e92c4bf7c051069.png"
                                    alt="关注Booking.com官方微信号">
                            </a>
                            <div id="china_gtw_header_hover" style="display:none">
                                <div style="text-align: center; width: 180px;padding: 10px;">
                                    <span>关注Booking.com官方微信号</span>
                                    <br>
                                    <img width="150px"
                                        src="https://cf.bstatic.com/static/img/desktop_footer_WOA/da4aea624f2026b3e6826d56e4a2555f67e8df89.jpg"
                                        alt="关注Booking.com官方微信号">
                                    <br>
                                    <span>全球特价酒店应有尽有！</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> -->
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
        <div role="region" aria-label="即刻下载Booking.com免费应用程序" class="local_info_bot footerconstraint-inner">
            <div class="local_info_bot_inner">
                <div class="extranet_link_container">
                    <a class="extranet_link"
                        href="https://admin.booking.com/?lang=zh&amp;utm_source=extranet_login_footer&amp;utm_medium=frontend&amp;utm_campaign=login_footer_v0"
                        data-ga-track="click|Footer|Click - Extranet login|mytrips">
                        登录后台
                    </a>
                </div>
                <div class="footercopyright ">
                    <div class="whitebar">
                        <div class="copyright_text">
                            版权 © 1996–2023
                            Booking.com™. 版权所有.
                        </div>
                    </div>
                </div>
            </div>
            <div style="clear:both;">&nbsp;</div>
        </div>
        <div class="footer-logos footerconstraint-inner">
            <div class="footer__priceline">
                <p class="footer__priceline__title"> Booking.com隶属于Booking Holdings Inc.，该集团是深受全球用户好评的在线旅行及周边服务供应商。</p>
                <div class="footer__priceline__list">
                    <ul>
                        <li>
                            <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png"
                                title="Booking.com" alt="Booking.com" height="26" width="91">

                        </li>
                        <li>
                            <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png"
                                title="Priceline" alt="Priceline" height="26" width="91">
                        </li>
                        <li>
                            <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png"
                                title="Kayak" alt="Kayak" height="26" width="79">
                        </li>
                        <li>
                            <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png"
                                title="Agoda" alt="Agoda" height="26" width="70">
                        </li>
                        <li>
                            <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png"
                                title="Rentalcars" alt="Rentalcars" height="26" width="109">
                        </li>
                        <li>
                            <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png"
                                title="OpenTable" alt="OpenTable" height="26" width="95">
                        </li>
                    </ul>
                </div>
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