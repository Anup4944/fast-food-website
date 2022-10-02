import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Profile = () => {
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="profile">
      <main>
        <motion.img
          src="https://images.livemint.com/img/2022/09/27/600x338/Mark_Zuckerberg_1656695417873_1664288821291_1664288821291.jpg"
          alt="user"
          {...options}
        />
        <motion.h5 {...options} transition={{ delay: 0.3 }}>
          Mark Zuke
        </motion.h5>

        <motion.div {...options} transition={{ delay: 0.5 }}>
          <Link to="/admin/dashboard">Dashboard</Link>
        </motion.div>

        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/orders">Orders</Link>
        </motion.div>
        <motion.button
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Logout
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
