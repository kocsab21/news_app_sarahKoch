import {useEffect, useRef, useState} from "react";

export const useScrollToTop = (offset: number = 300) => {

    const topRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > offset);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [offset]);

    const scrollToTop = () => {
        topRef.current?.scrollIntoView({behavior: "smooth"});
    };

    return {topRef, visible, scrollToTop};
}