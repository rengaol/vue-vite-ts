<template>
    <div>
<heaDer></heaDer>

    </div>
</template>

<script setup lang="ts">
import heaDer from '../components/header.vue'
import {computed } from 'vue'
import { useStore } from 'vuex';
const store = useStore()
const count = computed(()=>store.state.count)
</script>

<style lang="less" scoped>

</style>