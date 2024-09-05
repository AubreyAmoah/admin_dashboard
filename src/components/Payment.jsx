// src/components/Payments.js
import React from 'react';

const payments = [
  {
    id: 'INV1234',
    amount: '$250.00',
    method: 'Credit Card',
    status: 'Completed',
    date: '2024-09-01',
  },
  {
    id: 'INV5678',
    amount: '$530.00',
    method: 'PayPal',
    status: 'Pending',
    date: '2024-09-02',
  },
  {
    id: 'INV9101',
    amount: '$300.00',
    method: 'Bank Transfer',
    status: 'Failed',
    date: '2024-08-29',
  },
  {
    id: 'INV1213',
    amount: '$150.00',
    method: 'Credit Card',
    status: 'Completed',
    date: '2024-08-30',
  },
];

const Payments = () => {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Payments</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-2 px-4">Transaction ID</th>
              <th className="text-left py-2 px-4">Amount</th>
              <th className="text-left py-2 px-4">Payment Method</th>
              <th className="text-left py-2 px-4">Status</th>
              <th className="text-left py-2 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-t">
                <td className="py-2 px-4">{payment.id}</td>
                <td className="py-2 px-4">{payment.amount}</td>
                <td className="py-2 px-4">{payment.method}</td>
                <td className={`py-2 px-4 font-semibold ${
                  payment.status === 'Completed'
                    ? 'text-green-500'
                    : payment.status === 'Pending'
                    ? 'text-yellow-500'
                    : 'text-red-500'
                }`}>
                  {payment.status}
                </td>
                <td className="py-2 px-4">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
