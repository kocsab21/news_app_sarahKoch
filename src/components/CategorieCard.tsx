import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import type {SelectChangeEvent} from "@mui/material";
import type {Category} from "../types/types";
import {useLanguageStore} from "../stores/languageStore";
import {texts} from "../i18n/texts";

const CATEGORIES: Category[] = ["nation", "business", "sports", "technology"];
const COUNTS: number[] = [1, 2, 5, 10];

type CategorieCardProps = {
    category: Category,
    max: number,
    onCategoryChange: (category: Category) => void,
    onMaxChange: (max: number) => void,
}

const CategorieCard = ({category, max, onCategoryChange, onMaxChange}: CategorieCardProps) => {

    const language = useLanguageStore((state) => state.language);
    const t = texts[language];

    return (
        <Box sx={{display: "flex", gap: 2}}>
            <FormControl fullWidth>
                <InputLabel id="category-label">{t.category}</InputLabel>
                <Select
                    labelId="category-label"
                    label={t.category}
                    value={category}
                    onChange={(e: SelectChangeEvent<Category>) => onCategoryChange(e.target.value as Category)}
                >
                    {CATEGORIES.map((c) => (
                        <MenuItem key={c} value={c}>{t[c]}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="count-label">{t.count}</InputLabel>
                <Select
                    labelId="count-label"
                    label={t.count}
                    value={max}
                    onChange={(e: SelectChangeEvent<number>) => onMaxChange(Number(e.target.value))}
                >
                    {COUNTS.map((c) => (
                        <MenuItem key={c} value={c}>{c}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default CategorieCard;