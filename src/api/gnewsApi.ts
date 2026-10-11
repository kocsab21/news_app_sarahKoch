import axios from "axios";
import type {GNewsResponse} from "../types/gnews";
import type {News} from "../types/news";
import type {Category, Language} from "../types/types";

const API_BASE_URL = "https://gnews.io/api/v4/";
const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

export const getTopHeadlines = async (language: Language, category: Category, max: number) => {
    const response = await axios.get<GNewsResponse>(`${API_BASE_URL}top-headlines`, {
        params: {
            category: category,
            lang: language,
            max: max,
            apikey: API_KEY,
        },
        headers: {
            Accept: "application/json"
        }
    });
    console.log("getTopHeadlines", response.data.articles);

    return response.data.articles.map((article): News => ({
        id: article.id,
        title: article.title,
        author: article.source.name,
        date: article.publishedAt,
        description: article.description,
        content: article.content,
        url: article.url,
        image: article.image,
        source: article.source.name,
    }));
}