export type GNewsArticle = {
    id: string,
    title: string,
    description: string,
    content: string,
    url: string,
    image: string | null,
    publishedAt: string,
    source: {
        name: string,
        url: string,
    },
}

export type GNewsResponse = {
    totalArticles: number,
    articles: GNewsArticle[],
}