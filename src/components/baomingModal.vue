<template>
    <div class="modal-warp" v-if="modalShow">
        <div class="modal-view">
            <div class="modal-header">
                <span class="modal-header-title">活动报名</span>
                <span class="header-name">袁晓峰－如何开展亲子阅读（微课堂）</span>
                <i class="close-icon" v-on:click="cancel()"></i>
            </div>
            <div class="modal-body" v-show="step == 1">
                <form class="modal-form">
                    <div class="modal-input">
                        <label>微信号：</label>
                        <input type="text" placeholder="请输入微信号"/>
                    </div>
                    <div class="modal-input">
                        <label>手机号码：</label>
                        <input type="tel" placeholder="请输入手机号码" maxlength="11"/>
                    </div>
                </form>
            </div>
            <div class="action-view" v-show="step == 1">
                <div class="next-btn" @click="step = 2">下一步</div>
            </div>

            <!--第二步-->
            <div class="modal-body" v-show="step == 2">
                <div class="modal-price">本次活动报名费用为<span>2</span>元</div>
            </div>
            <div class="action-view" v-show="step == 2">
                <div class="pay-btn" >确定支付</div>
                <div class="cancel-btn" v-on:click="cancel()">取消</div>
            </div>
            <!---->
        </div>
    </div>
</template>

<style lang="less" src="../style/wechatCourse.less"></style>