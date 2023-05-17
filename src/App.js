import MainPage from "./component/Page/MainPage";
import LogInPage from "./component/Page/LogInPage";
import IntroPage from "./component/Page/IntroPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="MainPage" element={<MainPage />} />
        <Route path="LogInPage" element={<LogInPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
