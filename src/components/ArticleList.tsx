import {Stack} from "@mui/material";
import type {News} from "../types/news";
import NewsCard from "./NewsCard";

type ArticleListProps = {
    articles: News[],
}

const ArticleList = ({articles}: ArticleListProps) => {
    return (
        <Stack spacing={2}>
            {articles.map((news) => (
                <NewsCard key={news.id} news={news}/>
            ))}
        </Stack>
    );
};

export default ArticleList;