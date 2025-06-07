<script setup lang="ts">
import {usePosts} from "~/composables/usePosts";

const { currentPage, totalPages, currentPageList } = usePosts();
const router = useRouter();

const onCardClick = (id: string) => {
    router.push(`/posts/${id}`);
};
</script>

<template>
    <div class="articles">
        <h1>Articles</h1>

        <Transition name="fade" mode="out-in">
            <CommonList :key="currentPage" :list="currentPageList">
                <template #default="{ item }">
                    <CommonCard @click="onCardClick(item.id)">
                        <template #image>
                            <NuxtImg
                                :src="item.image"
                                alt="image"
                                width="280"
                                height="280"
                            />
                        </template>

                        <template #title>
                            {{ item.title }}
                        </template>

                        <template #add-text>
                            Read more
                        </template>
                    </CommonCard>
                </template>
            </CommonList>
        </Transition>

        <CommonPagination
            v-model:currentPage="currentPage"
            :totalPages="totalPages"
        />
    </div>
</template>

<style scoped>
.articles {
    display: flex;
    flex-direction: column;
    padding: 120px 112px 140px;

    h1 {
        font-size: 84px;
        margin-bottom: 40px;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
