import MainPage from "./component/Page/MainPage";
import LogInPage from "./component/Page/LogInPage";
import IntroPage from "./component/Page/IntroPage";
import SignUpPage from "./component/Page/SignUpPage";
import SearchPage from "./component/Page/SearchPage";
import HeartPage from "./component/Page/HeartPage";
import MyPage from "./component/Page/MyPage";
import MenuPage from "./component/Page/MenuPage";
import ProductDetailPage from "./component/Page/ProductDetailPage";
import KnottedDetailPage from "./component/Page/KnottedDetailPage";
import PostPage from "./component/Page/PostPage";
import ManagerPage from "./component/Page/ManagerPage";
import UserManage from "./component/Page/UserManage";
import ProductManage from "./component/Page/ProductManage";
import PostManage from "./component/Page/PostManage";
import NoneHeartPage from "./component/Page/NoneHeartPage";
import PurchasePage from "./component/Page/PurchasePage";
import MakePostPage from "./component/Page/MakePostPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="MainPage" element={<MainPage />} />
        <Route path="MenuPage" element={<MenuPage />} />
        <Route path="MyPage" element={<MyPage />} />
        <Route path="LogInPage" element={<LogInPage />} />
        <Route path="SignUpPage" element={<SignUpPage />} />
        <Route path="SearchPage" element={<SearchPage />} />
        <Route path="NoneHeartPage" element={<NoneHeartPage />} />
        <Route path="HeartPage" element={<HeartPage />} />
        <Route path="ProductDetailPage" element={<ProductDetailPage />} />
        <Route path="KnottedDetailPage" element={<KnottedDetailPage />} />
        <Route path="PostPage" element={<PostPage />} />
        <Route path="ManagerPage" element={<ManagerPage />} />
        <Route path="UserManage" element={<UserManage />} />
        <Route path="ProductManage" element={<ProductManage />} />
        <Route path="PostManage" element={<PostManage />} />
        <Route path="PurchasePage" element={<PurchasePage />} />
        <Route path="MakePostPage" element={<MakePostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
