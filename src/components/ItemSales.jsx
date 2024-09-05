// src/components/ItemSales.js
import React, { useState } from 'react';

// Mock Initial Items in Stock
const initialItems = [
  {
    id: 'ITM001',
    name: 'Laptop',
    price: 1200,
    quantity: 10,
  },
  {
    id: 'ITM002',
    name: 'Smartphone',
    price: 800,
    quantity: 5,
  },
  {
    id: 'ITM003',
    name: 'Headphones',
    price: 150,
    quantity: 0, // Out of stock
  },
];

// Initial Sales History
const initialSales = [];

const ItemSales = () => {
  const [items, setItems] = useState(initialItems); // Items in stock
  const [sales, setSales] = useState(initialSales); // Sales history
  const [newSale, setNewSale] = useState({
    itemId: '',
    quantity: '',
    date: '',
  });

  const [showForm, setShowForm] = useState(false);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSale({
      ...newSale,
      [name]: value,
    });
  };

  // Handle sale submission
  const handleSaleSubmit = (e) => {
    e.preventDefault();

    const selectedItem = items.find((item) => item.id === newSale.itemId);

    if (selectedItem && newSale.quantity && newSale.date) {
      const saleQuantity = parseInt(newSale.quantity, 10);

      // Check if there is enough stock for the sale
      if (selectedItem.quantity >= saleQuantity) {
        // Update the item's stock
        const updatedItems = items.map((item) =>
          item.id === newSale.itemId
            ? { ...item, quantity: item.quantity - saleQuantity }
            : item
        );
        setItems(updatedItems);

        // Record the sale
        const newSaleRecord = {
          itemId: selectedItem.id,
          itemName: selectedItem.name,
          quantity: saleQuantity,
          date: newSale.date,
        };
        setSales([...sales, newSaleRecord]);

        // Reset sale form
        setNewSale({
          itemId: '',
          quantity: '',
          date: '',
        });
      } else {
        alert(`Not enough stock. Only ${selectedItem.quantity} left.`);
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Sell Items</h2>

      {/* Toggle Button */}
      <button
        onClick={toggleForm}
        className="mb-6 bg-blue-500 text-white py-2 px-4 rounded"
      >
        {showForm ? 'Hide Sale Form' : 'Show Sale Form'}
      </button>

      {/* Add New Sale Form */}
      {showForm && (
        <div className="mb-6 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl mb-4">Sell Item</h3>
          <form onSubmit={handleSaleSubmit} className="grid grid-cols-2 gap-4">
            {/* Item Selector */}
            <select
              name="itemId"
              value={newSale.itemId}
              onChange={handleInputChange}
              className="p-2 border rounded"
            >
              <option value="">Select Item</option>
              {items.map((item) => (
                <option key={item.id} value={item.id} disabled={item.quantity === 0}>
                  {item.name} (Stock: {item.quantity})
                </option>
              ))}
            </select>

            {/* Sale Quantity */}
            <input
              type="number"
              name="quantity"
              placeholder="Sale Quantity"
              value={newSale.quantity}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />

            {/* Sale Date */}
            <input
              type="date"
              name="date"
              value={newSale.date}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />

            <button
              type="submit"
              className="col-span-2 bg-green-500 text-white py-2 px-4 rounded mt-2"
            >
              Complete Sale
            </button>
          </form>
        </div>
      )}

      {/* Sales Records List */}
      <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
        <h3 className="text-xl font-bold mb-4">Sales History</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-2 px-4">Item ID</th>
              <th className="text-left py-2 px-4">Item Name</th>
              <th className="text-left py-2 px-4">Quantity Sold</th>
              <th className="text-left py-2 px-4">Sale Date</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{sale.itemId}</td>
                <td className="py-2 px-4">{sale.itemName}</td>
                <td className="py-2 px-4">{sale.quantity}</td>
                <td className="py-2 px-4">{sale.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemSales;
