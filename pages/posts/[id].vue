<script setup lang="ts">
const { article, status } = usePost();
</script>

<template>
    <div v-if="article && status === 'success'" class="article">
        <h1>{{ article.title }}</h1>

        <NuxtImg
            :src="article.image"
            alt="image"
            width="1200"
            height="700"
        />

        <span class="article__about">About</span>

        <p class="article__description">{{ article.description }}</p>
    </div>

    <div v-else>LOADING..</div>
</template>

<style scoped>
.article {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 120px;

    h1 {
        font-size: 84px;
    }

    &__about {
        font-size: 16px;
    }

    &__description {
        font-size: 36px;
    }
}
</style>
