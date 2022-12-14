import React from "react";
import { Link } from "react-router-dom";
import Box from "./Box";
import { Doughnut } from "react-chartjs-2";
import Loader from "../layout/Loading";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";

ChartJS.register(Tooltip, ArcElement, Legend);

const Dashboard = () => {
  const isLoading = true;
  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: [2, 3, 4],
        backgroundColor: [
          "rgba(159,63,176,0.1)",
          "rgba(78,63,176,0.2)",
          "rgba(156,0,60,0.3)",
        ],
        borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <section className="dashboard">
      {isLoading === false ? (
        <main>
          <article>
            <Box title="Users" value={213} />
            <Box title="Orders" value={213} />
            <Box title="Income" value={213} />
          </article>

          <section>
            <div>
              <Link to="/admin/orders">View Orders</Link>
              <Link to="/admin/users">View Users</Link>
            </div>
            <aside>
              <Doughnut data={data} />
            </aside>
          </section>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Dashboard;
