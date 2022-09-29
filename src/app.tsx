import * as React from 'react';
import {
  Routes,
  Route,
  BrowserRouter as HashRouters,
} from 'react-router-dom';
import NotFoundPage from 'pages/global/not-found-page';
import GlobalLayout from 'pages/global/components/global-layout';
import ShopPage from 'pages/global/shop-page';
import AuthLayout from 'pages/auth/components/auth-layout';
import LoginPage from 'pages/auth/login-page';
import RegisterPage from 'pages/auth/register-page';
import CartPage from 'pages/auth/cart-page';
import FavoritesPage from './pages/auth/favorites-page';
import GiftPage from './pages/global/components/filtered-pages/gift-page';
import ClothingPage from './pages/global/components/filtered-pages/clothing-page';
import FurniturePage from './pages/global/components/filtered-pages/furniture-page';
import HomeDecorPage from './pages/global/components/filtered-pages/home-decor-page';
import JewelryPage from './pages/global/components/filtered-pages/jewelry-page';
import ItemPage from './pages/global/item-page/index';

const App: React.FC = () => (
  <HashRouters>
    <Routes>

      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<ShopPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="gifts" element={<GiftPage />} />
        <Route path="clothing" element={<ClothingPage />} />
        <Route path="furniture" element={<FurniturePage />} />
        <Route path="home-decor" element={<HomeDecorPage />} />
        <Route path="jewelry" element={<JewelryPage />} />
        <Route path="cup/:id" element={<ItemPage />} />
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>

    </Routes>
  </HashRouters>
);

export default App;
