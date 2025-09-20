import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";

// Page imports

const CustomerLoginRegister = lazy(() => import("pages/customer-login-register"));
const MenuBrowseSearch = lazy(() => import("pages/menu-browse-search"));
const ItemDetailCustomization = lazy(() => import("pages/item-detail-customization"));
const ShoppingCartCheckout = lazy(() => import("pages/shopping-cart-checkout"));
const OrderTrackingStatus = lazy(() => import("pages/order-tracking-status"));
const RestaurantAdminDashboard = lazy(() => import("pages/restaurant-admin-dashboard"));
const KitchenDisplaySystem = lazy(() => import("pages/kitchen-display-system"));
const CustomerAccountOrderHistory = lazy(() => import("pages/customer-account-order-history"));
const NotFound = lazy(() => import("pages/NotFound"));

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <RouterRoutes>
            <Route path="/customer-login-register" element={<CustomerLoginRegister />} />
            <Route path="/menu-browse-search" element={<MenuBrowseSearch />} />
            <Route path="/item-detail-customization" element={<ItemDetailCustomization />} />
            <Route path="/shopping-cart-checkout" element={<ShoppingCartCheckout />} />
            <Route path="/order-tracking-status" element={<OrderTrackingStatus />} />
            <Route path="/restaurant-admin-dashboard" element={<RestaurantAdminDashboard />} />
            <Route path="/kitchen-display-system" element={<KitchenDisplaySystem />} />
            <Route path="/customer-account-order-history" element={<CustomerAccountOrderHistory />} />
            <Route path="/" element={<MenuBrowseSearch />} />
            <Route path="*" element={<NotFound />} />
          </RouterRoutes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;