// src/components/Items.js
import React, { useState } from "react";

const initialItems = [
  {
    id: "ITM001",
    name: "Laptop",
    price: "$1200",
    quantity: 10,
    status: "In Stock",
  },
  {
    id: "ITM002",
    name: "Smartphone",
    price: "$800",
    quantity: 5,
    status: "In Stock",
  },
  {
    id: "ITM003",
    name: "Headphones",
    price: "$150",
    quantity: 0,
    status: "Out of Stock",
  },
  {
    id: "ITM004",
    name: "Gaming Console",
    price: "$500",
    quantity: 7,
    status: "In Stock",
  },
];

const Items = () => {
  const [items, setItems] = useState(initialItems); // Items state
  const [newItem, setNewItem] = useState({
    id: "",
    name: "",
    price: "",
    quantity: "",
    status: "In Stock", // Default to "In Stock"
  });
  const [showForm, setShowForm] = useState(false); // Toggle form state
  const [isEditing, setIsEditing] = useState(false); // Edit mode
  const [editItemId, setEditItemId] = useState(null); // Item being edited

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  // Handle form submission to add or update item
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem.id && newItem.name && newItem.price && newItem.quantity) {
      if (isEditing) {
        // Update item
        const updatedItems = items.map((item) =>
          item.id === editItemId ? { ...newItem } : item
        );
        setItems(updatedItems);
        setIsEditing(false); // End edit mode
        setEditItemId(null); // Clear item being edited
      } else {
        // Add new item
        setItems([...items, newItem]);
      }

      // Reset form
      setNewItem({
        id: "",
        name: "",
        price: "",
        quantity: "",
        status: "In Stock", // Reset to default after submission
      });
    }
  };

  // Toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
    if (!showForm) {
      // Reset form on toggle
      setIsEditing(false);
      setEditItemId(null);
      setNewItem({
        id: "",
        name: "",
        price: "",
        quantity: "",
        status: "In Stock",
      });
    }
  };

  // Delete an item
  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  // Edit an item
  const handleEdit = (item) => {
    setNewItem(item); // Pre-fill form with item details
    setIsEditing(true); // Enable edit mode
    setEditItemId(item.id); // Set the current item to be edited
    setShowForm(true); // Show the form
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Items</h2>

      {/* Toggle Button */}
      <button
        onClick={toggleForm}
        className="mb-6 bg-blue-500 text-white py-2 px-4 rounded"
      >
        {showForm ? "Hide Form" : "Show Add Item Form"}
      </button>

      {/* Add New Item or Update Form */}
      {showForm && (
        <div className="mb-6 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl mb-4">
            {isEditing ? "Update Item" : "Add New Item"}
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="id"
              placeholder="Item ID"
              value={newItem.id}
              onChange={handleInputChange}
              className="p-2 border rounded"
              disabled={isEditing} // Disable ID field when editing
            />
            <input
              type="text"
              name="name"
              placeholder="Item Name"
              value={newItem.name}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={newItem.price}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={newItem.quantity}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <select
              name="status"
              value={newItem.status}
              onChange={handleInputChange}
              className="p-2 border rounded"
            >
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>

            <button
              type="submit"
              className="col-span-2 bg-green-500 text-white py-2 px-4 rounded mt-2"
            >
              {isEditing ? "Update Item" : "Add Item"}
            </button>
          </form>
        </div>
      )}

      {/* Item List */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-2 px-4">Item ID</th>
              <th className="text-left py-2 px-4">Item Name</th>
              <th className="text-left py-2 px-4">Price</th>
              <th className="text-left py-2 px-4">Quantity</th>
              <th className="text-left py-2 px-4">Status</th>
              <th className="text-left py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.price}</td>
                <td className="py-2 px-4">{item.quantity}</td>
                <td
                  className={`py-2 px-4 font-semibold ${
                    item.status === "In Stock"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {item.status}
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Items;
