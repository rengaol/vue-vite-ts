<template>
    <div>
        <!-- 实现鼠标追踪案例 -->
       X:{{x}} Y:{{y}}
    </div>
</template>

<script setup lang="ts">
import  { ref, computed, reactive, toRefs, watch, onErrorCaptured} from 'vue'
import useMousePosition from '../components/demo';

const x = useMousePosition().refData1.x
const y= useMousePosition().refData1.y

console.log(x,y)
</script>

<style lang="scss" scoped>

</style>