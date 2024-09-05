// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen p-5">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul className="mt-10">
        <li className="mb-6">
          <Link to="/">Home</Link>
        </li>
        <li className="mb-6">
          <Link to="/notifications">Notifications</Link>
        </li>
        <li className="mb-6">
          <Link to="/items">Items</Link>
        </li>
        <li className="mb-6">
          <Link to="/sales">Item Sales</Link>
        </li>
        <li className="mb-6">
          <Link to="/payments">Payments</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
