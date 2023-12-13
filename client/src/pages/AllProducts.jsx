import React, { useState } from 'react';


const Filters = () => {
 const [status, setStatus] = useState('');
 const [price, setPrice] = useState('');
 const [collections, setCollections] = useState('');
 const [chains, setChains] = useState('');
 const [categories, setCategories] = useState('');
 const [onSaleIn, setOnSaleIn] = useState('');

 const handleFilterChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'status':
        setStatus(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'collections':
        setCollections(value);
        break;
      case 'chains':
        setChains(value);
        break;
      case 'categories':
        setCategories(value);
        break;
      case 'onSaleIn':
        setOnSaleIn(value);
        break;
      default:
        break;
    }
 };

 const handleSubmit = (event) => {
    event.preventDefault();

   
 };

 return (
    <div className="bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4 " >
      <h2 className="text-center mb-4">Filters</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 bg-transparent" >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
            Status
          </label>
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="status" value={status} onChange={handleFilterChange}>
            <option value="">Select Status</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
        </div>
        <div className="mb-4 bg-transparent" >
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="price" value={price} onChange={handleFilterChange}>
            <option value="">Select Price</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100+">$100+</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="collections">
            Collections
          </label>
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="collections" value={collections} onChange={handleFilterChange}>
            <option value="">Select Collection</option>
            <option value="collection1">Collection 1</option>
            <option value="collection2">Collection 2</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="chains">
            Chains
          </label>
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="chains" value={chains} onChange={handleFilterChange}>
            <option value="">Select Chain</option>
            <option value="chain1">Chain 1</option>
            <option value="chain2">Chain 2</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categories">
            Categories
          </label>
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="categories" value={categories} onChange={handleFilterChange}>
            <option className="bg-transparent" value="">Select Category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="onSaleIn">
            On Sale In
          </label>
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="onSaleIn" value={onSaleIn} onChange={handleFilterChange}>
            <option value="">Select Store</option>
            <option value="store1">Store 1</option>
            <option value="store2">Store 2</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Apply Filters
          </button>
        </div>
      </form>
    </div>
 );
};

export default Filters