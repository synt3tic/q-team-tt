<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';

const props = defineProps<{
    currentPage: number;
    totalPages: number;
}>();

const emit = defineEmits<{
    (e: 'update:currentPage', page: number): void;
}>();

const pages = computed(() => {
    return Array.from({ length: props.totalPages }, (_, i) => i + 1);
});

const isLastPage = computed(() => props.currentPage >= props.totalPages);
const isFirstPage = computed(() => props.currentPage <= 1);

function goToPage(page: number) {
    if (page >= 1 && page <= props.totalPages) {
        emit('update:currentPage', page);
    }
}

function nextPage() {
    if (!isLastPage.value) {
        goToPage(props.currentPage + 1);
    }
}

function prevPage() {
    if (!isFirstPage.value) {
        goToPage(props.currentPage - 1);
    }
}
</script>

<template>
    <div class="pagination">
        <button
            class="pagination__nav"
            :disabled="isFirstPage"
            @click="prevPage"
        >
            ‹
        </button>

        <button
            v-for="page in pages"
            :key="page"
            class="pagination__page"
            :class="{ 'pagination__page--active': page === currentPage }"
            @click="goToPage(page)"
        >
            {{ page }}
        </button>

        <button
            class="pagination__nav"
            :disabled="isLastPage"
            @click="nextPage"
        >
            ›
        </button>
    </div>
</template>

<style scoped lang="scss">
.pagination {
    display: flex;
    gap: 0.5rem;

    &__page,
    &__nav {
        width: 40px;
        height: 40px;
        border: none;
        background: #f5f5f5;
        border-radius: 12px;
        font-size: 16px;
        cursor: pointer;
        color: #101010;
        transition: background 0.2s;

        &:hover:not(:disabled) {
            background: #e0e0e0;
        }

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }

    &__page--active {
        background: #101010;
        color: #ffffff;
    }

    &__nav {
        border: 1px solid #ccc;
        background: transparent;
        color: #101010;
    }
}
</style>
