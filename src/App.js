import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BodyList from "./components/BodyList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div style={{ backgroundColor: "#FFFEF9" }}>
      <Navbar onSearch={handleSearch} />
      <BodyList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
