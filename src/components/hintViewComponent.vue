<template>
    <div class="hint-view-warp" v-show="hashint">
        <div class="hint-view-main">
            <div class="hint-view-header">
                <i class="hint-icon-close" v-on:click="closeFn()"></i>
            </div>
            <div class="hint-view-content">
                {{message}}
            </div>
            <div class="hint-view-actions">
                <div class="hint-btn-basics" v-on:click="closeFn()">确定</div>
            </div>
        </div>
    </div>
</template>

<style lang="less" src="../style/hintView.less"></style>