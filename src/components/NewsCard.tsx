import {Card, CardContent, CardMedia, Link, Typography} from "@mui/material";
import type {News} from "../types/news";
import {useLanguageStore} from "../stores/languageStore";
import {texts} from "../i18n/texts";

type NewsCardProps = {
    news: News,
}

const NewsCard = ({news}: NewsCardProps) => {

    const language = useLanguageStore((state) => state.language);
    const t = texts[language];

    const date = new Date(news.date)
        .toLocaleDateString(language === "de" ? "de-AT" : "en-GB");

    return (
        <Card sx={{textAlign: "center"}}>
            <CardContent>
                <Typography variant="h6" color="primary">
                    {news.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {news.author} - {date}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{mt: 1}}>
                    {news.description}
                </Typography>
                <Typography variant="body2" sx={{my: 1}}>
                    {news.content}
                </Typography>
                <Link href={news.url} target="_blank" rel="noopener">
                    {t.readMore}
                </Link>
            </CardContent>
            {news.image && (
                <CardMedia component="img" height="200" image={news.image} alt={news.title}/>
            )}
        </Card>
    );
};

export default NewsCard;