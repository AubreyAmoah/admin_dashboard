// src/components/Sidebar.js
import {
  faBasketShopping,
  faBell,
  faHome,
  faMoneyBill,
  faShop,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 min-h-screen p-5">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul className="mt-10">
        <li className="mb-6">
          <FontAwesomeIcon className="mr-2" icon={faHome} />
          <Link to="/">Home</Link>
        </li>
        <li className="mb-6">
          <FontAwesomeIcon className="mr-2" icon={faBell} />
          <Link to="/notifications">Notifications</Link>
        </li>
        <li className="mb-6">
          <FontAwesomeIcon className="mr-2" icon={faBasketShopping} />
          <Link to="/items">Items</Link>
        </li>
        <li className="mb-6">
          <FontAwesomeIcon className="mr-2" icon={faShop} />
          <Link to="/sales">Item Sales</Link>
        </li>
        <li className="mb-6">
          <FontAwesomeIcon className="mr-2" icon={faMoneyBill} />
          <Link to="/payments">Payments</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
