import React from "react";
function Navbar() {
    return (
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <h1 className="text-xl font-bold">My App</h1>
        <ul className="flex gap-4">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    );
  }

  export default Navbar