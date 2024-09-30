import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Navbar />
      <Toaster />
    </div>
  );
}

export default App;
