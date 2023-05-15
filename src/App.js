import MainPage from "./component/Page/MainPage";
import IntroPage from "./component/Page/IntroPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="MainPage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
