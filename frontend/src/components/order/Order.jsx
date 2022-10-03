import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const Order = () => {
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>123455</td>
              <td>Processing</td>
              <td>2</td>
              <td>$45</td>
              <td>Online</td>
              <td>
                <Link to={`/orders/${12344}`}>
                  <AiOutlineEye />
                </Link>
              </td>
            </tr>
            <tr>
              <td>123455</td>
              <td>Processing</td>
              <td>2</td>
              <td>$45</td>
              <td>Online</td>
              <td>
                <Link to={`/orders/${12344}`}>
                  <AiOutlineEye />
                </Link>
              </td>
            </tr>
            <tr>
              <td>123455</td>
              <td>Processing</td>
              <td>2</td>
              <td>$45</td>
              <td>Online</td>
              <td>
                <Link to={`/orders/${12344}`}>
                  <AiOutlineEye />
                </Link>
              </td>
            </tr>
            <tr>
              <td>123455</td>
              <td>Processing</td>
              <td>2</td>
              <td>$45</td>
              <td>Online</td>
              <td>
                <Link to={`/orders/${12344}`}>
                  <AiOutlineEye />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Order;
