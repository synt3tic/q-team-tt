import type { BlogArticle } from '~/types/blog'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')

    return await $fetch<BlogArticle>(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`)
})
