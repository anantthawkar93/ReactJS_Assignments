import React, { useState } from "react";

export const Ecommerce = () => {

    const [products, setProducts] = useState([]);

  //input field states
  const [addProduct, setAddProduct] = useState({
    name: "",
    description: "",
    price: "",
    color: "",
    expiry_date: ""
  });

  //form handling change event
  const handleAddProductchange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newAddProduct = { ...addProduct };
    newAddProduct[fieldName] = fieldValue;
    setAddProduct(newAddProduct);
  };

    //form handling submit event
  const handleAddProductSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: addProduct.name,
      description: addProduct.description,
      price: addProduct.price,
      color: addProduct.color,
      expiry_date: addProduct.expiry_date
    };
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
    console.log(newProducts);
  };
  
  //Clear function
  const clearProducts = () => {
    setProducts([]);
  };

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Color</th>
            <th>Expiry_date</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.color}</td>
              <td>{product.expiry_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>
        <i>Add New Product</i>
      </h2>
      <button onClick={clearProducts}>Clear All</button>
      <form onSubmit={handleAddProductSubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter a product name"
          onChange={handleAddProductchange}
        />
        &nbsp;&nbsp;
        <input
          type="text"
          name="description"
          required="required"
          placeholder="Enter a product description"
          onChange={handleAddProductchange}
        />
        &nbsp;&nbsp;
        <input
          type="number"
          name="price"
          required="required"
          placeholder="Enter a product price"
          onChange={handleAddProductchange}
        />
        &nbsp;&nbsp;
        <input
          type="color"
          name="color"
          required="required"
          placeholder="Enter a product color"
          onChange={handleAddProductchange}
        />
        &nbsp;&nbsp;
        <input
          type="date"
          name="expiry_date"
          required="required"
          placeholder="Enter product's expiry date"
          onChange={handleAddProductchange}
        />
        &nbsp;&nbsp;
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default Ecommerce;
