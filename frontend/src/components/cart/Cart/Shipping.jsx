import React from "react";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping details</h1>
        <form>
          <div>
            <label>Unit/House Number</label>
            <input type="text" placeholder="Enter your unit/house number" />
          </div>
          <div>
            <label>Street Name</label>
            <input type="text" placeholder="Enter your street name" />
          </div>
          <div>
            <label>Suburb</label>
            <input type="text" placeholder="Enter your suburb name" />
          </div>
          <div>
            <label>State</label>
            <select>
              <option value=""></option>
            </select>
          </div>
          <div>
            <label>Post code</label>
            <input type="number" placeholder="Enter your post code" />
          </div>
          <div>
            <label>Contact Number</label>
            <input type="number" placeholder="Enter your contact number" />
          </div>
          <button type="submit">Place Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
