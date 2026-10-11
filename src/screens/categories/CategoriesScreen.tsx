import {useState} from "react";
import {Alert, CircularProgress, Container, Stack, Typography} from "@mui/material";
import {useNewsData} from "../../hooks/useNewsData";
import {useLanguageStore} from "../../stores/languageStore";
import {texts} from "../../i18n/texts";
import type {Category} from "../../types/types";
import CategorieCard from "../../components/CategorieCard";
import ArticleList from "../../components/ArticleList";

const CategoriesScreen = () => {

    const language = useLanguageStore((state) => state.language);
    const t = texts[language];

    const [category, setCategory] = useState<Category>("sports");
    const [max, setMax] = useState<number>(10);

    const {articles, loading, error} = useNewsData(category, max);

    return (
        <Container maxWidth="sm" sx={{py: 3}}>
            <Stack spacing={2}>
                <CategorieCard
                    category={category}
                    max={max}
                    onCategoryChange={setCategory}
                    onMaxChange={setMax}
                />
                <Typography align="center" sx={{fontWeight: "bold"}}>
                    {t.articleCount}: {articles.length}
                </Typography>

                {loading && <CircularProgress sx={{alignSelf: "center"}}/>}
                {error && <Alert severity="error">{t.error}</Alert>}

                {!loading && <ArticleList articles={articles}/>}
            </Stack>
        </Container>
    );
};

export default CategoriesScreen;