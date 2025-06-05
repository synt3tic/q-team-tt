export interface BlogArticle {
    id: string
    createdAt: string // можно оставить string, т.к. приходит ISO-строка
    title: string
    preview: string
    image: string
    description: string
}
