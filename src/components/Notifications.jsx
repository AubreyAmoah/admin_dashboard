// src/components/Notifications.js
import React from "react";

const notifications = [
  {
    id: 1,
    title: "Payment Received",
    description: "Your payment for Invoice #1234 has been received.",
    time: "5 mins ago",
  },
  {
    id: 2,
    title: "New Order",
    description: "You have a new order for 2 items.",
    time: "15 mins ago",
  },
  {
    id: 3,
    title: "Shipment Update",
    description: "Your order #5678 has been shipped.",
    time: "30 mins ago",
  },
  {
    id: 4,
    title: "Subscription Expiring",
    description: "Your subscription will expire in 3 days.",
    time: "1 hour ago",
  },
  {
    id: 5,
    title: "New Message",
    description: "You have received a new message from support.",
    time: "2 hours ago",
  },
];

const Notifications = () => {
  return (
    <div className="p-10 max-[650px]:w-full max-[600px]:px-0 ">
      <h2 className="text-2xl font-bold mb-4 max-[520px]:text-lg">Notifications</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} className="mb-6">
              <div className="flex justify-between max-[520px]:text-sm">
                <div>
                  <h3 className="text-lg font-semibold max-[520px]:text-base">
                    {notification.title}
                  </h3>
                  <p className="text-gray-500">{notification.description}</p>
                </div>
                <span className="text-gray-400">{notification.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
