import type {BlogArticle} from "~/types/blog";

export const usePost = () => {
    const route = useRoute();
    const { data: article, status } = useFetch<BlogArticle | null>(`/api/posts/${route.params.id}`);

    return {
        article,
        status,
    };
}
