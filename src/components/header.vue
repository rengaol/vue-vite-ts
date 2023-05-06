<!--header组件 -->
<template>
    <div id="header">
        <ul>
            <li>首页</li>
            <li>我的订单</li>
            <li>帮助</li>
        </ul>
    </div>
</template>

<script setup  lang="ts">
</script>

<style lang="less" scoped>
#header {
    margin: 0;
    height: 90px;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    font-size: 18px;
}
ul {
    width: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 35px;
    li {
        flex: 1;
        margin-right: 20px;
    }
}
</style>