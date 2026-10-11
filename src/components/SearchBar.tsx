import {Box, InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useLanguageStore} from "../stores/languageStore";
import {texts} from "../i18n/texts";

type SearchBarProps = {
    value: string,
    onChange: (value: string) => void,
}

const SearchBar = ({value, onChange}: SearchBarProps) => {

    const language = useLanguageStore((state) => state.language);
    const t = texts[language];

    return (
        <Box component="form" onSubmit={(e) => e.preventDefault()}>
            <TextField
                fullWidth
                size="small"
                label={t.search}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    },
                }}
            />
        </Box>
    );
};

export default SearchBar;