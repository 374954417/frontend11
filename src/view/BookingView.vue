<template>
    <div class="container padding-16">
        <!-- 步骤图 -->
        <div class="flex-box align-center">
            <div class="blue-dot flex-box align-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 128 128">
                    <path
                        d="M56.33 102a6 6 0 0 1-4.24-1.75L19.27 67.54A6.014 6.014 0 1 1 27.74 59l27.94 27.88 44-58.49a6 6 0 1 1 9.58 7.22l-48.17 64a5.998 5.998 0 0 1-4.34 2.39z">
                    </path>
                </svg>
            </div>
            <div class="weight-700">已选住宿</div>
            <div class="line"></div>
            <div class="blue-dot flex-box align-center justify-center">
                <span class="weight-700 color-white">2</span>
            </div>
            <div class="weight-700">个人信息</div>
            <div class="line"></div>
            <div class="grey-dot flex-box align-center justify-center">
                <span class="weight-700 grey-text">3</span>
            </div>
            <div class="weight-700">最后一步</div>
        </div>

        <div class="flex-box">
            <div class="aside">
                <div class="border-box padding-16">
                    <div class="aside-title mg-bottom-16">订单详情</div>
                    <div class="flex-box">
                        <div class="aside-label">入住时间</div>
                        <div class="aside-label">退房时间</div>
                    </div>
                    <div class="flex-box">
                        <div>
                            <div class="aside-title">2023年6月4日周日</div>
                            <div class="sub-title grey-text">14:00起</div>
                        </div>
                        <div>
                            <div class="aside-title">2023年6月5日周一</div>
                            <div class="sub-title grey-text">14:00起</div>
                        </div>
                    </div>
                    <div class="aside-label">入住总天数：</div>
                    <div class="sub-content">1晚</div>

                    <el-divider />

                    <div class="sub-content">已选择：</div>
                    <div>行政复式单间公寓</div>
                    <div style="margin-top: 8px;">重新选择</div>
                </div>
                <div class="border-box padding-16 mg-top-16">
                    <div class="aside-title">价格汇总</div>
                    <div class="flex-box justify-between">
                        <div>原票价</div>
                        <div>563.12元</div>
                    </div>
                    <div class="flex-box justify-between">
                        <div>Genius会员折扣</div>
                        <div>-56.31元</div>
                    </div>
                    <div>你是Genuis会员,现可享受优惠价格。</div>
                    <div class="discount-box flex-box justify-between align-center padding-16 mg-top-16">
                        <div class="price-text">价格</div>
                        <div>
                            <div class="red-text text-right"><span
                                    style="text-decoration: line-through;font-weight: 400; margin-right: 5px;">563元</span>优惠10%
                            </div>
                            <div class="price-text text-right">506.81元</div>
                            <div class="grey-text">+84元税费及其他费用</div>
                        </div>
                    </div>
                    <div>
                        <div class="aside-title">价格信息</div>
                        <div class="flex-box">
                            <div></div>
                            <div>
                                <div class="flex-box align-center mg-top-16">
                                    <svg class="bk-icon -streamline-accounting_bills" height="20" width="20"
                                        viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                                        <path
                                            d="M4.125 8.25a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm12.75 5.25a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm2.625-3V15a.75.75 0 0 1-.75.75H2.25A.75.75 0 0 1 1.5 15V6a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 .75.75v4.5zm1.5 0V6a2.25 2.25 0 0 0-2.25-2.25H2.25A2.25 2.25 0 0 0 0 6v9a2.25 2.25 0 0 0 2.25 2.25h16.5A2.25 2.25 0 0 0 21 15v-4.5zm-8.25 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM22.5 9v9a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 0 0 1.5h16.5A2.25 2.25 0 0 0 24 18V9a.75.75 0 0 0-1.5 0z">
                                        </path>
                                    </svg>
                                    <span style="margin-left: 15px;">不含84.13元税费和其他费用</span>
                                </div>
                                <div class="flex-box justify-between grey-text mg-top-8">
                                    <div class="">6%增值税</div>
                                    <div>33.45元</div>
                                </div>
                                <div class="flex-box justify-between grey-text mg-top-8">
                                    <div>10%住宿方服务费</div>
                                    <div>50.68元</div>
                                </div>
                            </div>
                        </div>
                        <div class="mg-top-16">收起详情</div>
                    </div>
                </div>

                <div class="border-box padding-16 mg-top-16">
                    <div class="aside-title">付款安排</div>
                    <div class="green-text mg-top-16">今日无需付款，到店付款即可。
                    </div>
                </div>
                <div class="border-box padding-16 mg-top-16">
                    <div class="aside-title">取消费用是多少？</div>
                    <div class="green-text mg-top-16">6月2日下午11:59前可以免费取消</div>
                    <div class="flex-box justify-between">
                        <div>6月3日上午12:00起</div>
                        <div>506.81元</div>
                    </div>
                </div>
            </div>
            <div class="main">
                <div class="flex-box border-box padding-16 mg-bottom-16">
                    <div class="mg-right-16">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/324247624.jpg?k=c64ca60cb16a66aed36453927c0138c02f7bec6733d05a0e1ccdad57a196e31a&o="
                            width="160" height="160" alt="">
                    </div>
                    <div class="font-size-12">
                        <div class="flex-box align-center">
                            <div style="margin-right: 10px">公寓式酒店</div>
                            <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 3px" fill="#febb00" width="12"
                                height="12" viewBox="0 0 24 24">
                                <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 3px" fill="#febb00" width="12"
                                height="12" viewBox="0 0 24 24">
                                <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 3px" fill="#febb00" width="12"
                                height="12" viewBox="0 0 24 24">
                                <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 10px" fill="#febb00" width="12"
                                height="12" viewBox="0 0 24 24">
                                <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128">
                                <path fill="#FEBB02"
                                    d="M112 8H16a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8V16a8 8 0 0 0-8-8zM48 96H24V58h24zm56-25a8.697 8.697 0 0 1-2 6 8.903 8.903 0 0 1 1 4 6.9 6.9 0 0 1-5 7c-.5 4-4.8 8-9 8H56V58l10.3-23.3a5.4 5.4 0 0 1 10.1 2.7c-.078.923-.28 1.831-.6 2.7L72 52h23c4.5 0 9 3.5 9 8a9.2 9.2 0 0 1-2 5.3 7.5 7.5 0 0 1 2 5.7z">
                                </path>
                            </svg>
                        </div>
                        <div class="header-title">Modena by Fraser Putuo Shanghai</div>
                        <div class="font-size-14 mg-top-16">上海, 普陀区, 铜川路58弄1号</div>
                        <div class="green-text">位置很赞 — 9.0</div>
                        <div class="flex-box align-center mg-top-16">
                            <span class="degree flex-box align-center justify-center">9.0</span>
                            <span style="margin-left: 10px">好极了</span>
                            <span class="grey-text">
                                · 79条点评
                            </span>
                        </div>
                        <div class="flex-box align-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24">
                                <path
                                    d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5zm1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3zm-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z">
                                </path>
                            </svg>
                            <span style="margin-left:5px;margin-right:10px;">停车场</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox=" 0 0 24 24">
                                <path
                                    d="M5.999.75v22.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm3 0V7.5a2.259 2.259 0 0 1-2.252 2.25 2.258 2.258 0 0 1-2.248-2.252V.75a.75.75 0 0 0-1.5 0V7.5a3.76 3.76 0 0 0 3.748 3.75 3.76 3.76 0 0 0 3.752-3.748V.75a.75.75 0 0 0-1.5 0zm6.75 15.75h3c1.183.046 2.203-.9 2.25-2.111a2.22 2.22 0 0 0 0-.168c-.25-6.672-.828-9.78-3.231-13.533a1.508 1.508 0 0 0-2.77.81V23.25a.75.75 0 0 0 1.5 0V1.503c0 .003.001 0 .003 0a.006.006 0 0 1 .008.002c2.21 3.45 2.75 6.354 2.99 12.773v.053a.696.696 0 0 1-.721.67L15.749 15a.75.75 0 0 0 0 1.5z">
                                </path>
                            </svg>
                            <span style="margin-left:5px;">餐厅</span>
                        </div>
                    </div>
                </div>
                <div class="border-box padding-16 mg-bottom-16">
                    <div class="header-title">温馨提示：</div>
                    <div class="flex-box align-center mg-top-16">
                        <svg class="bk-icon -streamline-checkmark_selected" fill="#008009" height="16" role="presentation"
                            width="16" viewBox="0 0 128 128" aria-hidden="true" focusable="false">
                            <path
                                d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z">
                            </path>
                        </svg>
                        <span style="margin-left: 15px">保持灵活：2023年6月3日前（含）可免费取消，所以今天就锁定该好价吧!</span>

                    </div>
                    <div class="flex-box align-center mg-top-8">
                        <svg class="bk-icon -streamline-checkmark_selected" fill="#008009" height="16" role="presentation"
                            width="16" viewBox="0 0 128 128" aria-hidden="true" focusable="false">
                            <path
                                d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z">
                            </path>
                        </svg>
                        <span style="margin-left: 15px">尽情独享整租套房！!</span>

                    </div>
                    <div class="flex-box align-center mg-top-8">
                        <svg class="bk-icon -streamline-checkmark_selected" fill="#008009" height="16" role="presentation"
                            width="16" viewBox="0 0 128 128" aria-hidden="true" focusable="false">
                            <path
                                d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z">
                            </path>
                        </svg>
                        <span style="margin-left: 15px">现在无需支付任何费用。到店付款即可。!</span>
                    </div>
                </div>
                <div class="border-box flex-box padding-16 mg-bottom-16">
                    <div class="user-tag flex-box align-center justify-center">
                        <svg class="bk-icon -streamline-account_user" fill="#fff" height="32" width="32" viewBox="0 0 24 24"
                            role="presentation" aria-hidden="true" focusable="false">
                            <path
                                d="M16.5 9.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zm1.5 0a6 6 0 1 0-12 0 6 6 0 0 0 12 0zm1.445 10.597c-4.086-4.111-10.732-4.132-14.844-.046l-.046.046a.75.75 0 0 0 1.064 1.058l.04-.04a8.996 8.996 0 0 1 12.722.04.75.75 0 0 0 1.064-1.058zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z">
                            </path>
                        </svg>
                    </div>
                    <div class="aside-title" style="margin-left: 15px">您已登录</div>
                </div>
                <div class="user-box border-box padding-16 mg-bottom-16">
                    <div class="header-title">输入个人信息</div>
                    <div class="tips">快完成啦！将带*的必填项填写完整即可</div>
                    <div class="mg-top-16 weight-700">出行类别：</div>
                    <div>
                        <el-radio-group v-model="radio1" class="ml-4">
                            <el-radio label="1" size="large">出差</el-radio>
                            <el-radio label="2" size="large">自由行</el-radio>
                        </el-radio-group>
                    </div>
                    <div class="flex-box mg-top-16">
                        <div style="margin-right: 16px">
                            <div class="weight-700">姓（拼音或英语）</div>
                            <div>
                                <el-input v-model="firstName" placeholder="例：Zhang" />
                            </div>
                        </div>
                        <div>
                            <div class="weight-700">名（拼音或英语）</div>
                            <div>
                                <el-input v-model="lastName" placeholder="例：Xiaoming" />
                            </div>
                        </div>
                    </div>
                    <div class="mg-top-16">
                        <div class="weight-700">电子邮箱地址</div>
                        <div style="width: 400px">
                            <el-input v-model="email" placeholder="温馨提示：填写后检查一下，避免拼写错误" />
                        </div>
                        <div class="grey-text">确认邮件将发送至该邮箱</div>
                    </div>
                    <div class="mg-top-16 weight-700">您是为谁预订？</div>
                    <div>
                        <el-radio-group v-model="radio2">
                            <el-radio label="1" size="large">本人即住客（之一）</el-radio>
                            <el-radio label="2" size="large">本人不会入住</el-radio>
                        </el-radio-group>
                    </div>
                </div>

                <div class="book-box border-box padding-16 mg-bottom-16">
                    <div class="header-title">行政复式单间公寓</div>
                    <div class="flex-box align-center mg-top-16">
                        <svg class="bk-icon -streamline-checkmark_fill" fill="#008009" height="20" width="20"
                            viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false">
                            <path
                                d="M56.33 102a6 6 0 0 1-4.24-1.75L19.27 67.54A6.014 6.014 0 1 1 27.74 59l27.94 27.88 44-58.49a6 6 0 1 1 9.58 7.22l-48.17 64a5.998 5.998 0 0 1-4.34 2.39z">
                            </path>
                        </svg>
                        <span class="weight-700" style="margin-left: 15px; color: #008009">2023年6月2日下午11:59前可免费取消</span>
                    </div>
                    <div class="flex-box align-center mg-top-16">
                        <svg class="bk-icon -streamline-no_smoking" fill="#333333" height="16" width="16"
                            viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                            <path
                                d="M19.5 9h2.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 0 0 1.5h7.5A2.25 2.25 0 0 0 24 12.75v-3a2.25 2.25 0 0 0-2.25-2.25H19.5a.75.75 0 0 0 0 1.5zM5.25 13.5h-1.5l.75.75v-6L3.75 9h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5zM15 12v2.25a.75.75 0 0 0 1.5 0V12a.75.75 0 0 0-1.5 0zM0 8.25v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0zm1.28 15.53l22.5-22.5A.75.75 0 0 0 22.72.22L.22 22.72a.75.75 0 1 0 1.06 1.06zM4.5.75A2.25 2.25 0 0 1 2.25 3 2.25 2.25 0 0 0 0 5.25a.75.75 0 0 0 1.5 0 .75.75 0 0 1 .75-.75A3.75 3.75 0 0 0 6 .75a.75.75 0 0 0-1.5 0z">
                            </path>
                        </svg>
                        <span style="margin-left: 15px" class="grey-text">禁止吸烟</span>
                    </div>
                    <div class="type-list flex-box mg-top-16">
                        <div class="item flex-box align-center">
                            <svg class="bk-icon -streamline-house-chimney-alt" fill="#008009" height="16" width="16"
                                viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                                <path
                                    d="M3.004 13.923v8.25c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v6c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75v-8.25a.75.75 0 0 0-1.5 0v8.25l.75-.75h-6l.75.75v-6a2.25 2.25 0 0 0-2.25-2.25h-1.5a2.25 2.25 0 0 0-2.25 2.25v6l.75-.75h-6l.75.75v-8.25a.75.75 0 0 0-1.5 0zm-1.72-.97l10.19-10.189a.75.75 0 0 1 1.06 0l10.19 10.19a.75.75 0 1 0 1.06-1.061L13.595 1.703a2.25 2.25 0 0 0-3.181 0L.224 11.894a.75.75 0 0 0 1.06 1.06zm15.97-7.28v-1.5l-.75.75h3.75l-.75-.75v5.25a.75.75 0 0 0 1.5 0v-5.25a.75.75 0 0 0-.75-.75h-3.75a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0z">
                                </path>
                            </svg>
                            <span>私人套房</span>
                        </div>
                        <div class="item flex-box align-center">
                            <svg class="bk-icon -streamline-room_size" fill="#008009" height="16" width="16"
                                viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                                <path
                                    d="M3.75 23.25V7.5a.75.75 0 0 0-1.5 0v15.75a.75.75 0 0 0 1.5 0zM.22 21.53l2.25 2.25a.75.75 0 0 0 1.06 0l2.25-2.25a.75.75 0 1 0-1.06-1.06l-2.25 2.25h1.06l-2.25-2.25a.75.75 0 0 0-1.06 1.06zM5.78 9.22L3.53 6.97a.75.75 0 0 0-1.06 0L.22 9.22a.75.75 0 1 0 1.06 1.06l2.25-2.25H2.47l2.25 2.25a.75.75 0 1 0 1.06-1.06zM7.5 3.75h15.75a.75.75 0 0 0 0-1.5H7.5a.75.75 0 0 0 0 1.5zM9.22.22L6.97 2.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.03 2.47v1.06l2.25-2.25A.75.75 0 1 0 9.22.22zm12.31 5.56l2.25-2.25a.75.75 0 0 0 0-1.06L21.53.22a.75.75 0 1 0-1.06 1.06l2.25 2.25V2.47l-2.25 2.25a.75.75 0 0 0 1.06 1.06zM10.5 13.05v7.2a2.25 2.25 0 0 0 2.25 2.25h6A2.25 2.25 0 0 0 21 20.25v-7.2a.75.75 0 0 0-1.5 0v7.2a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-7.2a.75.75 0 0 0-1.5 0zm13.252 2.143l-6.497-5.85a2.25 2.25 0 0 0-3.01 0l-6.497 5.85a.75.75 0 0 0 1.004 1.114l6.497-5.85a.75.75 0 0 1 1.002 0l6.497 5.85a.75.75 0 0 0 1.004-1.114z">
                                </path>
                            </svg>
                            <span>38 m²</span>
                        </div>
                        <div class="item flex-box align-center">
                            <svg class="bk-icon -streamline-resort" fill="#008009" height="16" width="16"
                                viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                                <path
                                    d="M.768 11.413l1.5 6.75a.75.75 0 0 0 1.464-.326l-1.5-6.75a.75.75 0 0 0-1.464.326zM2.22 23.456l1.5-5.25L3 18.75h3a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 0 1.5 0V19.5A2.25 2.25 0 0 0 6 17.25H3a.75.75 0 0 0-.721.544l-1.5 5.25a.75.75 0 1 0 1.442.412zm19.547-12.369l-1.5 6.75a.75.75 0 1 0 1.464.326l1.5-6.75a.75.75 0 1 0-1.464-.326zm1.453 11.957l-1.5-5.25A.75.75 0 0 0 21 17.25h-3a2.25 2.25 0 0 0-2.25 2.25v3.75a.75.75 0 0 0 1.5 0V19.5a.75.75 0 0 1 .75-.75h3l-.721-.544 1.5 5.25a.75.75 0 1 0 1.442-.412zM11.25 6.75v16.5a.75.75 0 0 0 1.5 0V6.75a.75.75 0 0 0-1.5 0zm-4.5 7.5h10.5a.75.75 0 0 0 0-1.5H6.75a.75.75 0 0 0 0 1.5zM1.5 6l10.064-4.37c.297-.161.575-.161.803-.033l10.178 4.425L22.5 6H1.5zm0 1.5h21a1.5 1.5 0 0 0 .689-2.832L13.034.255c-.616-.35-1.452-.35-2.136.034L.858 4.646c-.544.28-.856.792-.857 1.352A1.5 1.5 0 0 0 1.499 7.5z">
                                </path>
                            </svg>
                            <span>阳台</span>
                        </div>
                        <div class="item flex-box align-center">
                            <svg class="bk-icon -streamline-weather_snowflake" fill="#008009" height="16" width="16"
                                viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                                <path
                                    d="M11.25.75v7.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm4.031.914l-3.75 3h.938l-3.75-3a.75.75 0 1 0-.938 1.172l3.75 3a.75.75 0 0 0 .938 0l3.75-3a.75.75 0 1 0-.938-1.172zM1.883 7.024l6.495 3.75a.75.75 0 0 0 .75-1.299l-6.495-3.75a.75.75 0 1 0-.75 1.3zM4.69 3.99l.723 4.748.468-.812-4.473 1.748a.75.75 0 0 0 .546 1.398l4.473-1.748a.75.75 0 0 0 .468-.812l-.723-4.748a.75.75 0 1 0-1.482.226zM2.632 18.274l6.495-3.75a.75.75 0 1 0-.75-1.298l-6.495 3.75a.75.75 0 1 0 .75 1.299zm-1.224-3.948l4.473 1.748-.468-.812-.723 4.748a.75.75 0 0 0 1.482.226l.723-4.748a.75.75 0 0 0-.468-.812l-4.473-1.748a.75.75 0 0 0-.546 1.398zM12.75 23.25v-7.5a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zm-4.031-.914l3.75-3h-.938l3.75 3a.75.75 0 0 0 .937-1.172l-3.75-3a.75.75 0 0 0-.937 0l-3.75 3a.75.75 0 0 0 .938 1.172zm13.399-5.36l-6.495-3.75a.75.75 0 0 0-.75 1.298l6.495 3.75a.75.75 0 0 0 .75-1.299zm-2.807 3.034l-.724-4.748-.468.812 4.473-1.748a.75.75 0 0 0-.546-1.398l-4.473 1.748a.75.75 0 0 0-.468.812l.723 4.748a.75.75 0 0 0 1.483-.226zm2.057-14.285l-6.495 3.75a.75.75 0 0 0 .75 1.3l6.495-3.75a.75.75 0 0 0-.75-1.3zm1.224 3.95l-4.473-1.749.468.812.724-4.748a.75.75 0 0 0-1.483-.226l-.723 4.748a.75.75 0 0 0 .468.812l4.473 1.748a.75.75 0 0 0 .546-1.398zM11.625 7.6L8.377 9.475a.75.75 0 0 0-.375.65v3.75a.75.75 0 0 0 .375.65l3.248 1.874a.75.75 0 0 0 .75 0l3.248-1.875a.75.75 0 0 0 .375-.649v-3.75a.75.75 0 0 0-.375-.65L12.375 7.6a.75.75 0 0 0-.75 0zm.75 1.3h-.75l3.248 1.874-.375-.649v3.75l.375-.65-3.248 1.876h.75l-3.248-1.876.375.65v-3.75l-.375.65L12.375 8.9z">
                                </path>
                            </svg>
                            <span>空调</span>
                        </div>
                        <div class="item flex-box align-center">
                            <svg class="bk-icon -streamline-shower" fill="#008009" height="16" width="16"
                                viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                                <path
                                    d="M15.375 10.875a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm.375 12.375V18.7l-.667.745C20.748 18.98 24 15.925 24 10.5a2.25 2.25 0 0 0-4.5 0c0 1.945-.609 3.154-1.64 3.848a3.973 3.973 0 0 1-2.132.652H9a3.75 3.75 0 1 0 0 7.5h3a2.25 2.25 0 0 0 0-4.5H9a.75.75 0 0 0 0 1.5h3a.75.75 0 0 1 0 1.5H9a2.25 2.25 0 0 1 0-4.5h6.74a5.426 5.426 0 0 0 2.957-.908C20.154 14.613 21 12.932 21 10.5a.75.75 0 0 1 1.5 0c0 4.6-2.628 7.069-6.083 7.455a.75.75 0 0 0-.667.745v4.55a.75.75 0 0 0 1.5 0zm-7.5-1.5v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM.75 1.5h1.5l-.53-.22 1.402 1.402a.75.75 0 0 0 1.06-1.06L2.78.22A.75.75 0 0 0 2.25 0H.75a.75.75 0 1 0 0 1.5zm2.983 3.754a.01.01 0 0 1 .016.002c-.542-1.072-.1-2.426 1.008-2.988a2.25 2.25 0 0 1 2.037 0c-.041-.022-.043-.029-.04-.034l.002-.002-3.013 3.012zm1.07 1.05l3.002-3A1.489 1.489 0 0 0 7.51.951 3.766 3.766 0 0 0 4.079.929 3.75 3.75 0 0 0 2.43 5.971a1.49 1.49 0 0 0 2.382.323zm3.408-.968l1.116.62a.75.75 0 1 0 .728-1.312l-1.116-.62a.75.75 0 1 0-.728 1.312zm1.964-2.233l1.615.44a.75.75 0 1 0 .394-1.448l-1.615-.44a.75.75 0 1 0-.394 1.448zm4.217 1.15l1.615.44a.75.75 0 0 0 .396-1.447l-1.615-.44a.75.75 0 0 0-.396 1.447zM5.697 7.388l.577 1.038a.75.75 0 1 0 1.312-.728L7.009 6.66a.75.75 0 1 0-1.312.728zM3.284 8.94l.44 1.615a.75.75 0 1 0 1.448-.394l-.44-1.615a.75.75 0 1 0-1.448.394zm1.15 4.219l.246.896a.75.75 0 1 0 1.446-.396l-.245-.896a.75.75 0 1 0-1.446.396z">
                                </path>
                            </svg>
                            <span>私人浴室</span>
                        </div>
                        <div class="item flex-box align-center">
                            <svg class="bk-icon -streamline-food_and_drink" fill="#008009" height="16" width="16"
                                viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false">
                                <path
                                    d="M48.25 4v36a20.13 20.13 0 0 1-16 19.59V124a4 4 0 0 1-8 0V59.58A20.09 20.09 0 0 1 8.25 40V4a4 4 0 0 1 8 0v36a12 12 0 0 0 8 11.28V4a4 4 0 0 1 8 0v47.29a12.1 12.1 0 0 0 8-11.3V4a4 4 0 0 1 8 0zm65 120a4 4 0 0 1-4 4H77.28a4 4 0 0 1 0-8h12V95.7c-14.139-2.16-24.023-15.135-22.35-29.34l6-59.17a8 8 0 0 1 8-7.19h24.67a8 8 0 0 1 8 7.19l6 59.23c1.633 14.181-8.24 27.115-22.35 29.28V120h12a4 4 0 0 1 3.96 4zM80.89 8l-2.43 24H108l-2.4-24zM83 84.88A18.49 18.49 0 0 0 93.17 88h.15a18.48 18.48 0 0 0 10.17-3.12 18.48 18.48 0 0 0 8.12-17.59L108.85 40H77.64l-2.76 27.23A18.49 18.49 0 0 0 83 84.88z">
                                </path>
                            </svg>
                            <span>迷你吧</span>
                        </div>
                    </div>
                    <el-divider />
                    <div class="weight-700">你的Genius会员礼遇</div>
                    <div class="mg-top-16">
                        <div class="flex-box">
                            <svg class="bk-icon -streamline-checkmark_selected_fill" fill="#FEBB02" height="16"
                                role="presentation" width="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path
                                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C23.992 5.376 18.624.008 12 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 0 1-1.43.188l-4.888-3.908a1 1 0 0 1 1.25-1.562l4.076 3.261 6.227-8.451a1 1 0 1 1 1.61 1.183z">
                                </path>
                            </svg>
                            <div style="margin-left: 15px">10%折扣</div>
                        </div>
                        <div style="margin-left: 31px" class="grey-text font-size-12">此选项价格（不含税费和其他费用）可享10%优惠
                        </div>
                    </div>
                    <el-divider />
                    <div class="flex-box weight-700">
                        <span>住客：</span>
                        <svg class="bk-icon -streamline-person_half" height="16" width="16" viewBox="0 0 24 24"
                            role="presentation" aria-hidden="true" focusable="false">
                            <path
                                d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z">
                            </path>
                        </svg>
                        <svg class="bk-icon -streamline-person_half" height="16" width="16" viewBox="0 0 24 24"
                            role="presentation" aria-hidden="true" focusable="false">
                            <path
                                d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z">
                            </path>
                        </svg>
                    </div>
                    <div class="weight-700 mg-top-16">住客全名</div>
                    <div>
                        <el-input v-model="fullname" placeholder="姓（拼音或英文）名（拼音或英文）" />
                    </div>
                </div>
                <div class="car-box border-box padding-16 mg-bottom-16">
                    <div class="header-title">添加至住宿订单</div>
                    <div><el-checkbox v-model="checked1" label="我打算租车自驾" size="large" /></div>
                    <div class="grey-text font-size-12">让你的旅行更尽兴，在订单确认信中查看租车选择</div>
                </div>
                <div class="car-box border-box padding-16 mg-bottom-16">
                    <div class="header-title">您还有什么特别要求？</div>
                    <div class="mg-top-16">特殊要求无法保证满足，但住宿将尽力为你提供所需。你始终可以在预订完成后提出特殊要求.</div>
                    <div class="mg-top-16 weight-700">请使用英语或中文填写您的请求。 （可选）</div>
                    <div>
                        <el-input v-model="textarea" :rows="2" type="textarea" />
                    </div>
                </div>

                <div class="car-box border-box padding-16 mg-bottom-16">
                    <div class="header-title">到店时间</div>
                    <div class="flex-box align-center mg-top-16">
                        <svg class="bk-icon -streamline-checkmark_selected" fill="#008009" height="24" width="24"
                            viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false">
                            <path
                                d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z">
                            </path>
                        </svg>
                        <span style="margin-left: 15px">客房14:00可办理入住</span>
                    </div>
                    <div class="flex-box align-center mg-top-16">
                        <svg class="bk-icon -streamline-front_desk" fill="#008009" height="24" width="24"
                            viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                            <path
                                d="M14.244 14.156a6.75 6.75 0 0 0-6.75-5.906A6.747 6.747 0 0 0 .73 14.397a.75.75 0 0 0 1.494.134 5.25 5.25 0 0 1 5.27-4.781 5.253 5.253 0 0 1 5.262 4.594.75.75 0 1 0 1.488-.188zM10.125 4.125a2.625 2.625 0 1 1-5.25 0V1.5h5.25v2.625zm1.5 0V1.5a1.5 1.5 0 0 0-1.5-1.5h-5.25a1.5 1.5 0 0 0-1.5 1.5v2.625a4.125 4.125 0 0 0 8.25 0zM23.25 22.5H.75l.75.75v-7.5a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v7.5l.75-.75zm0 1.5a.75.75 0 0 0 .75-.75v-7.5a2.25 2.25 0 0 0-2.25-2.25H2.25A2.25 2.25 0 0 0 0 15.75v7.5c0 .414.336.75.75.75h22.5zM4.376 5.017a9.42 9.42 0 0 1 3.12-.517 9.428 9.428 0 0 1 3.133.519.75.75 0 0 0 .49-1.418A10.917 10.917 0 0 0 7.498 3a10.91 10.91 0 0 0-3.611.6.75.75 0 0 0 .49 1.417zM15.75 14.27a3.001 3.001 0 0 1 6 .16.75.75 0 1 0 1.5.04 4.501 4.501 0 1 0-9-.24.75.75 0 1 0 1.5.04zm3.75-3.77V8.25a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0zM17.25 9h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5z">
                            </path>
                        </svg>
                        <span style="margin-left: 15px">24小时前台 - 随时提供帮助!</span>
                    </div>
                    <div class="weight-700 mg-top-16">添加预计到店时间 （可选）</div>
                    <div>
                        <el-select v-model="arrival" class="m-2" size="large">
                            <el-option v-for="(item, inds) in options" :key="inds" :label="item" :value="item" />
                        </el-select>
                    </div>
                    <div class="grey-text">该时间为上海时间</div>
                </div>

                <div class="car-box border-box padding-16 mg-bottom-16">
                    <div class="header-title">查看住宿规定</div>
                    <div class="mg-bottom-16">房东希望您同意以下住宿规定：</div>
                    <ul>
                        <li>不准吸烟</li>
                        <li>不准携带宠物</li>
                    </ul>
                    <!-- <div class="mg-bottom-16">不准吸烟</div>
                    <div class="mg-bottom-16">不准携带宠物</div> -->
                    <div class="mg-bottom-16 weight-700">继续下一步则意味着您同意以上住宿规定。</div>
                </div>
                <div class="flex-box justify-end mg-bottom-16">
                    <!-- <el-button icon="search">价格更放心</el-button> -->
                    <div class="price-button flex-box align-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#0071c2" width="16" height="16" viewBox="0 0 24 24">
                            <path
                                d="M.311 2.56v6.257a3.75 3.75 0 0 0 1.098 2.651l11.56 11.562a2.25 2.25 0 0 0 3.182 0l6.88-6.88a2.25 2.25 0 0 0 0-3.181L11.468 1.408A3.75 3.75 0 0 0 8.818.31H2.56a2.25 2.25 0 0 0-2.25 2.25zm1.5 0a.75.75 0 0 1 .75-.75h6.257a2.25 2.25 0 0 1 1.59.659l11.562 11.56a.75.75 0 0 1 0 1.06l-6.88 6.88a.75.75 0 0 1-1.06 0L2.47 10.409a2.25 2.25 0 0 1-.659-1.59V2.56zm5.25 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0z">
                            </path>
                        </svg>
                        <span>价格更放心</span>
                    </div>

                    <!-- <el-button class="next-button" type="primary">下一步：最终信息<el-icon class="el-icon--right">
                            <ArrowRight />
                        </el-icon></el-button> -->
                    <div class="next-button flex-box align-center">
                        <span @click="confirmOrder">下一步：最终信息</span>
                        <svg class="bk-icon -streamline-arrow_nav_right" fill="#fff" height="24" role="presentation"
                            width="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path
                                d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z">
                            </path>
                        </svg>
                    </div>
                </div>

                <div class="flex-box justify-end">
                    <el-link>订单条款是什么？</el-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookingView',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            fullname: '',
            radio1: '2',
            radio2: '',
            checked1: '',
            textarea: '',
            arrival: '',
            options: ['不确定', '0:00 - 1:00', '1:00 - 2:00', '2:00 - 3:00'],
        }
    },
    mounted() {
      this.oid=Math.ceil(Math.random()*10000)
      this.hid=this.$route.query.hid
      this.uid=this.$store.state.uname
      this.rid=this.$route.query.rid
      this.checkinvar=this.$route.query.checkin
      this.checkoutvar=this.$route.query.checkout
      this.price=this.$route.query.price

    },
  methods: {
      confirmOrder()
      {
        let chinaStandard= this.checkinvar
        let date = new Date(chinaStandard);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let time1 = y + '-' + m + '-' + d;

        chinaStandard= this.checkoutvar
        date = new Date(chinaStandard);
        y = date.getFullYear();
        m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let time2 = y + '-' + m + '-' + d;



        this.$http.post('/living/room/confirm', {
          "oid": this.oid,
          "hid": this.hid,
          "uid": this.uid,
          "rid": this.rid,
          "begin_date": time1,
          "end_date":time2,
          "total_price":this.price
        })
            .then((response)=> {
              console.log(response);
              if(response.data.code===405)
              {
                this.$toast.success("预订成功！",{position:"top"});

                this.$router.push('/living')
              }
            })
            .catch(function (error) {
              console.log(error);
            });
      },

    }
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 1140px;
    margin: 0 auto;
    color: #262626;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
}

.blue-dot{
    background-color: #0071c2;
    border-radius: 50%;
    height: 24px;
    width: 24px;
    margin-right: 8px;
}

.grey-dot{
    border-radius: 50%;
    border: 2px solid #949494;
    height: 24px;
    width: 24px;
    margin-right: 8px;
}

.line{
    background-color: #949494;
    height: 1px;
    margin: 0 8px;
    min-width: 16px;
    flex: 1;
}

.aside,
.main {
    padding: 24px 12px 24px 12px;
}

.aside {
    width: 33.33%;
}

.main {
    width: 66.66%;
}

.discount-box {
    background-color: #ebf3ff;
    padding-top: 16px;
    padding-bottom: 16px;
    margin-left: -16px;
    margin-right: -16px;

    .red-text {
        color: #c00;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
    }

    .price-text {
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif
    }
}

.aside-title {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
}

.aside-label {
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
}

.sub-content {
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
}

.sub-title {
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
}

.green-text {
    color: #008009;
}

.user-tag {
    border: 2px solid #febb02;
    background-color: #494949;
    height: 48px;
    width: 48px;
    border-radius: 50%;
}

.user-box {
    background-color: #ebf3ff;

    .tips {
        font-weight: normal;
        padding: 0.4em 0.8em;
        border-radius: 4px;
        background: #d2edd5;
        margin: auto;
        display: inline-block;
        color: #006607;
        text-align: left;
    }
}

.book-box {
    background-color: #ebf3ff;
}

.car-box {
    background-color: #ebf3ff;
}

.header-title {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
}

.degree {
    border-radius: 4.36px 4.36px 4.36px 0;
    height: 24px;
    width: 24px;
    background-color: #003580;
    color: #fff;
}

.type-list {

    .item {
        margin: 4px 0 0 4px;
        background-color: #e7fde9;
        border: 1px solid #97e59c;
        color: #006607;
        font-size: 12px;
        padding: 1px 5px;

        span {
            margin-left: 5px;
        }
    }
}

.price-button {
    color: #0071c2;
    font-weight: 600;
    cursor: pointer;
    padding: 2px 10px;

    span {
        margin-left: 15px;
    }

    &:hover {
        background-color: #f2f6fc;
    }
}

.next-button {
    padding: 10px 25px;
    background-color: #0071c2;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;

    &:hover {
        background-color: #00497a;
    }
}</style>