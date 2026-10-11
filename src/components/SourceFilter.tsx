import {Chip, Stack} from "@mui/material";
import {useLanguageStore} from "../stores/languageStore";
import {texts} from "../i18n/texts";

type SourceFilterProps = {
    sources: string[],
    selected: string,
    onSelect: (source: string) => void,
}

const SourceFilter = ({sources, selected, onSelect}: SourceFilterProps) => {

    const language = useLanguageStore((state) => state.language);
    const t = texts[language];

    return (
        <Stack direction="row" spacing={1} useFlexGap sx={{flexWrap: "wrap"}}>
            <Chip
                label={t.all}
                color={selected === "" ? "primary" : "default"}
                onClick={() => onSelect("")}
            />
            {sources.map((source) => (
                <Chip
                    key={source}
                    label={source}
                    color={selected === source ? "primary" : "default"}
                    onClick={() => onSelect(source)}
                />
            ))}
        </Stack>
    );
};

export default SourceFilter;