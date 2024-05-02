

import React, { useState } from "react";
import { addItem } from "../../config/firebase";

function ProductForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");


  const handleSubmit = async () => {
    try {
      const url = await addItem({ image });
      console.log(url, "url fetch");
      const data = {
        title: title,
        description: description,
        price: price,
        Image: url,
      };
      console.log(data, "data");
      // Send fetch request

      await fetch("http://localhost:3001/product/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
      alert("item add successfully ");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="container-fluid w-50 body-todos mt-4">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
      </div>
      <div>
        <label htmlFor="file" className="custom-button">
          Choose Images
        </label>
        <input
          type="file"
          id="file"
          name="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="form-control-file mb-2"
        />
      </div>
      <button className="btn btn-danger w-25" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
export default ProductForm;
