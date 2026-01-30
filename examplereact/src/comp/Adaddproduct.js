import AddToCart from "./AddToCart";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Adaddproduct.css';

function Adaddproduct() {

    return (
        <div className="Addproduct">
            <h2>Add Product</h2>
            <form className="productform">
                <div className="form-group">
                    <label htmlFor="productName">Product Name:</label>  
                    <input type="text" className="form-control" id="productName" placeholder="Enter product name" />
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Product Price:</label>
                    <input type="number" className="form-control" id="productPrice" placeholder="Enter product price" />
                </div>
                <div className="form-group">
                    <label htmlFor="productCategory">Product Category:</label>
                    <input type="text" className="form-control" id="productCategory" placeholder="Enter product category" />
                </div>
                <div className="form-group">
                    <label htmlFor="productImage">Product Image URL:</label>
                    <input type="text" className="form-control" id="productImage" placeholder="Enter product image URL" />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );

}
export default Adaddproduct;