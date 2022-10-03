import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Order Placed By</th>
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
              <td>User</td>
              <td>Processing</td>
              <td>2</td>
              <td>$45</td>
              <td>Online</td>
              <td>
                <Link to={`/orders/1234`}>
                  {" "}
                  <AiOutlineEye />
                </Link>
                <button>
                  <GiArmoredBoomerang />
                </button>
              </td>
            </tr>
            <tr>
              <td>123455</td>
              <td>User</td>
              <td>Processing</td>
              <td>2</td>
              <td>$45</td>
              <td>Online</td>
              <td>
                <Link to={`/orders/1234`}>
                  {" "}
                  <AiOutlineEye />
                </Link>
                <button>
                  <GiArmoredBoomerang />
                </button>
              </td>
            </tr>
            <tr>
              <td>123455</td>
              <td>User</td>
              <td>Processing</td>
              <td>2</td>
              <td>$45</td>
              <td>Online</td>
              <td>
                <Link to={`/orders/1234`}>
                  {" "}
                  <AiOutlineEye />
                </Link>
                <button>
                  <GiArmoredBoomerang />
                </button>
              </td>
            </tr>
            <tr>
              <td>123455</td>
              <td>User</td>
              <td>Processing</td>
              <td>2</td>
              <td>$45</td>
              <td>Online</td>
              <td>
                <Link to={`/orders/1234`}>
                  {" "}
                  <AiOutlineEye />
                </Link>
                <button>
                  <GiArmoredBoomerang />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Orders;
