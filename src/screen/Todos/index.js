
import React from "react";
import { useState } from "react";
import { addItem } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import "./todo.css";

function AllItem() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);

  const createItem = () => {
    addItem({ title, description, price, images });
    // navigate('/');
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  return (
    // <div>
    //   <div className="container-fluid w-100 body-todos">
    //     <div className="Todos-form bg-white">
    //       <div className="row">
    //         <div className="col-6 img-size">
    //           <img
    //             src="https://brooksgroup.com/wp-content/uploads/2020/08/sales_team_meeting_agenda.jpg"
    //             alt="item"
    //           />
    //         </div>
    //         <div className="col-6 todo-form">
    //           <h2>Add Items</h2>
    //           <input
    //             placeholder="Title"
    //             value={title}
    //             onChange={(e) => setTitle(e.target.value)}
    //           />
    //           <br />
    //           <input
    //             placeholder="Description"
    //             value={description}
    //             onChange={(e) => setDescription(e.target.value)}
    //           />
    //           <br />
    //           <input
    //             placeholder="Price"
    //             value={price}
    //             onChange={(e) => setPrice(e.target.value)}
    //           />
    //           <div>
    //             <label htmlFor="file" className="custom-button">
    //               Choose Images
    //             </label>
    //             <input
    //               type="file"
    //               id="file"
    //               name="file"
    //               accept="image/*"
    //               multiple
    //               onChange={handleImageChange}
    //             />
    //           </div>
    //           <button onClick={createItem}>Post</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container-fluid w-100 body-todos">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="todo-form ">
            <h2>Add Items</h2>
            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control mb-4"
            />
            <input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control mb-4" 
            />
            <input
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-control mb-3" 
            />
            <div>
              <label htmlFor="file" className="custom-button">
                Choose Images
              </label>
              <input
                type="file"
                id="file"
                name="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="form-control-file mb-2" 
              />
            </div>
            <button onClick={createItem} className="btn btn-danger w-25">
              Post
            </button>{" "}

          </div>
        </div>
      </div>
    </div>
  );
}

export default AllItem;
