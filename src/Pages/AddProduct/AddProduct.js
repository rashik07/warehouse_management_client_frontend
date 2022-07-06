import React from "react";

const AddProduct = () => {
  return (
    <div>
      <h1>this is add product</h1>
      <form>
        <input type="text" name="name" placeholder="name" required />
        
        <input type="number" name="quantity" placeholder="quantity" required />
        <input type="text" name="img" placeholder="img" required />

        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddProduct;
