import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useLanguageStore} from "../stores/languageStore";
import {texts} from "../i18n/texts";

const navStyle = {
    borderRadius: 0,
    "&.active": {
        borderBottom: "2px solid white",
    },
};

const Header = () => {

    const language = useLanguageStore((state) => state.language);
    const t = texts[language];

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    {t.appTitle}
                </Typography>
                <Button color="inherit" component={NavLink} to="/news" sx={navStyle}>
                    {t.news}
                </Button>
                <Button color="inherit" component={NavLink} to="/categories" sx={navStyle}>
                    {t.categories}
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;