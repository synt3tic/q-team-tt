<script setup lang="ts" generic="T">
defineProps<{
    list: T[];
}>()
</script>

<template>
    <ul class="list">
        <li v-for="item in list">
            <slot :item="item"></slot>
        </li>
    </ul>
</template>

<style scoped>
.list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
}
</style>
