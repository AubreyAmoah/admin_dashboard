import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import RevenueChart from "./components/RevenueChart";
import SalesWidget from "./components/SalesWidget";
import InsightsWidget from "./components/InsightsWidget";
import ConversionRate from "./components/ConversionRate";
import NewsWidget from "./components/NewsWidget";
import Notifications from "./components/Notifications";
import Payments from "./components/Payment";
import Items from "./components/Items";
import ItemSales from "./components/ItemSales";

const App = () => {
  return (
    <div className="flex">
      <BrowserRouter>
        <Sidebar />
        <div className="flex-1 p-10">
          <Routes>
            <Route
              path="/"
              element={
                <div className="grid grid-cols-3 gap-6">
                  <RevenueChart />
                  <InsightsWidget />
                  <SalesWidget />
                  <NewsWidget />
                  <ConversionRate />
                </div>
              }
            />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/items" element={<Items />} />
            <Route path="/sales" element={<ItemSales />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
