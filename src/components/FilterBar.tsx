import {Stack} from "@mui/material";
import SourceFilter from "./SourceFilter";
import SearchBar from "./SearchBar";

type FilterBarProps = {
    sources: string[],
    selectedSource: string,
    onSourceSelect: (source: string) => void,
    search: string,
    onSearchChange: (value: string) => void,
}

const FilterBar = ({sources, selectedSource, onSourceSelect, search, onSearchChange}: FilterBarProps) => {
    return (
        <Stack spacing={2}>
            <SourceFilter sources={sources} selected={selectedSource} onSelect={onSourceSelect}/>
            <SearchBar value={search} onChange={onSearchChange}/>
        </Stack>
    );
};

export default FilterBar;