<template>
    <div class="skeleton-grid">
        <div
            v-for="n in 8"
            :key="n"
            class="skeleton-grid__item"
        />
    </div>
</template>

<style scoped lang="scss">
.skeleton-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;

    &__item {
        height: 260px;
        border-radius: 16px;
        background: linear-gradient(90deg, #f3f3f3 25%, #e0e0e0 37%, #f3f3f3 63%);
        background-size: 400% 100%;
        animation: pulse 1.4s ease-in-out infinite;
    }
}

@keyframes pulse {
    0% {
        background-position: 100% 0;
    }
    100% {
        background-position: 0 0;
    }
}
</style>
