<script setup lang="ts">

import TheHeader from "~/components/layout/TheHeader.vue";
import TheFooter from "~/components/layout/TheFooter.vue";
</script>

<template>
    <div class="layout-default">
        <TheHeader />

        <div class="main">
            <slot />
        </div>

        <TheFooter />
    </div>
</template>

<style scoped>
.layout-default {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    height: 100%;
}

.main {
    position: relative;
    flex: 1;
}
</style>
