import React from "react";

import { motion } from "framer-motion";
function Button({ text, onClick }) {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={onClick}
      >
        click here
        {text}
      </motion.button>
    );
  }

  export default Button