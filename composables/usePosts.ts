import type {BlogArticle} from "~/types/blog";

export const usePosts = () => {
    const { data } = useFetch<BlogArticle[] | null>('/api/posts');

    const posts = computed(() => {
        if (!Array.isArray(data.value)) {
            return {};
        }

        return data.value.reduce((acc: Record<string, BlogArticle[]>, article: BlogArticle, index: number) => {
            const page = Math.floor(index / 10) + 1;

            if (!acc[page]) {
                acc[page] = [];
            }

            acc[page].push(article);

            return acc;
        }, {});
    });
    const totalPages = computed(() => Object.keys(posts.value).length);
    const currentPage = ref(1);

    const currentPageList = computed(() => {
        if (!Object.prototype.hasOwnProperty.call(posts.value, currentPage.value)) {
            return [];
        }

        return posts.value[currentPage.value];
    });

    return {
        posts,
        totalPages,
        currentPage,
        currentPageList,
    };
}
