import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Box, CssBaseline} from "@mui/material";
import Header from "./components/Header";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ScrollToTopButton from "./components/ScrollToTopButton";
import NewsScreen from "./screens/news/NewsScreen";
import CategoriesScreen from "./screens/categories/CategoriesScreen";
import {useScrollToTop} from "./hooks/useScrollToTop";

export default function App() {

  const {topRef, visible, scrollToTop} = useScrollToTop(300);

  return (
      <BrowserRouter>
        <CssBaseline/>
        <div ref={topRef}/>
        <Header/>

        <Routes>
          <Route path="/" element={<Navigate to="/news" replace/>}/>
          <Route path="/news" element={<NewsScreen/>}/>
          <Route path="/categories" element={<CategoriesScreen/>}/>
        </Routes>

        <Box sx={{display: "flex", justifyContent: "center", pb: 4}}>
          <LanguageSwitcher/>
        </Box>

        <ScrollToTopButton visible={visible} onClick={scrollToTop}/>
      </BrowserRouter>
  );
}