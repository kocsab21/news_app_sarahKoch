import {Fab} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

type ScrollToTopButtonProps = {
    visible: boolean,
    onClick: () => void,
}

const ScrollToTopButton = ({visible, onClick}: ScrollToTopButtonProps) => {

    if (!visible) {
        return null;
    }

    return (
        <Fab
            color="primary"
            size="small"
            onClick={onClick}
            sx={{position: "fixed", bottom: 24, right: 24}}
        >
            <ArrowUpwardIcon/>
        </Fab>
    );
};

export default ScrollToTopButton;