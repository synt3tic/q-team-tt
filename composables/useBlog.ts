export function useBlog() {
    const getPosts = () => useFetch('/api/posts')
    const getPostById = (id: string) => useFetch(`/api/posts/${id}`)

    return { getPosts, getPostById }
}
