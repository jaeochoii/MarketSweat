import MainPage from "./component/Page/MainPage";
import LogInPage from "./component/Page/LogInPage";
import IntroPage from "./component/Page/IntroPage";
import SignUpPage from "./component/Page/SignUpPage";
import SearchPage from "./component/Page/SearchPage";
import HeartPage from "./component/Page/HeartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="MainPage" element={<MainPage />} />
        <Route path="LogInPage" element={<LogInPage />} />
        <Route path="SignUpPage" element={<SignUpPage />} />
        <Route path="SearchPage" element={<SearchPage />} />
        <Route path="HeartPage" element={<HeartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
