import {useEffect, useState} from "react";
import {getTopHeadlines} from "../api/gnewsApi";
import type {News} from "../types/news";
import type {Category} from "../types/types";
import {useLanguageStore} from "../stores/languageStore";

export const useNewsData = (category: Category, max: number) => {

    const language = useLanguageStore((state) => state.language);

    const [articles, setArticles] = useState<News[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        let cancelled = false;

        async function loadData() {
            setLoading(true);
            setError(false);
            try {
                const response = await getTopHeadlines(language, category, max);
                if (!cancelled) {
                    setArticles(response);
                }
            } catch (e) {
                console.log("Error: ", e);
                if (!cancelled) {
                    setError(true);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        const timer = setTimeout(loadData, 400);

        return () => {
            cancelled = true;
            clearTimeout(timer);
        };
    }, [language, category, max]);

    return {articles, loading, error};
}