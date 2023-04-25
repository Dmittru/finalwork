import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./Components/pages/LandingPage/LandingPage";
import NavHeader from "./Components/UI/NavHeader/NavHeader";
import NavFooter from "./Components/UI/NavFooter/NavFooter";
import BookPage from "./Components/pages/BookPage/BookPage";
import Page404 from "./Components/pages/Page404/Page404";
import LessonPage from "./Components/pages/LessonPage/LessonPage";
import AboutPage from "./Components/pages/AboutPage/AboutPage";

function App() {
  return (
    <BrowserRouter>
        <NavHeader/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/book/:type" element={<BookPage/>} />
        <Route path="/lesson/:type" element={<LessonPage/>} />
        <Route path="*" element={<Page404/>} />
      </Routes>
        <NavFooter/>
    </BrowserRouter>
  );
}

export default App;
