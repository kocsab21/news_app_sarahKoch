import {useState} from "react";
import {Alert, CircularProgress, Container, Stack, Typography} from "@mui/material";
import {useNewsData} from "../../hooks/useNewsData";
import {useLanguageStore} from "../../stores/languageStore";
import {texts} from "../../i18n/texts";
import ArticleList from "../../components/ArticleList";
import FilterBar from "../../components/FilterBar";

const NewsScreen = () => {

    const language = useLanguageStore((state) => state.language);
    const t = texts[language];

    const {articles, loading, error} = useNewsData("general", 10);

    const [search, setSearch] = useState<string>("");
    const [selectedSource, setSelectedSource] = useState<string>("");

    const sources = [...new Set(articles.map((a) => a.source))];
    const activeSource = sources.includes(selectedSource) ? selectedSource : "";
    const query = search.trim().toLowerCase();

    const filtered = articles.filter((a) =>
        (activeSource === "" || a.source === activeSource) &&
        (a.title.toLowerCase().includes(query) || a.content.toLowerCase().includes(query))
    );

    return (
        <Container maxWidth="sm" sx={{py: 3}}>
            <Stack spacing={2}>
                <FilterBar
                    sources={sources}
                    selectedSource={activeSource}
                    onSourceSelect={setSelectedSource}
                    search={search}
                    onSearchChange={setSearch}
                />
                <Typography align="center" sx={{fontWeight: "bold"}}>
                    {t.articleCount}: {filtered.length}
                </Typography>

                {loading && <CircularProgress sx={{alignSelf: "center"}}/>}
                {error && <Alert severity="error">{t.error}</Alert>}

                {!loading && <ArticleList articles={filtered}/>}
            </Stack>
        </Container>
    );
};

export default NewsScreen;