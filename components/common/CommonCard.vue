<script setup lang="ts">

</script>

<template>
    <div class="card">
        <slot name="image"></slot>

        <p class="card__title">
            <slot name="title"></slot>
        </p>

        <span v-if="$slots['add-text']" class="card__add-text">
            <slot name="add-text"></slot>
        </span>
    </div>
</template>

<style scoped lang="scss">
.card {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 32px;
    overflow: hidden;
    cursor: pointer;

    &__title {
        font-size: 20px;
        line-height: 1.2;
    }

    &__add-text {
        opacity: 0;
        transform: translateY(100%);
        color: $purple-100;
        transition: transform .3s ease-in-out, opacity .3s ease-in-out;
    }

    &:hover {
        .card__add-text {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
</style>
