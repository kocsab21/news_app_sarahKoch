import {Button} from "@mui/material";
import {useLanguageStore} from "../stores/languageStore";
import {texts} from "../i18n/texts";

const LanguageSwitcher = () => {

    const language = useLanguageStore((state) => state.language);
    const toggleLanguage = useLanguageStore((state) => state.toggleLanguage);
    const t = texts[language];

    return (
        <Button variant="outlined" onClick={toggleLanguage}>
            {t.switchLanguage}
        </Button>
    );
};

export default LanguageSwitcher;