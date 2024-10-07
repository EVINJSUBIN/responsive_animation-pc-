"use client";
import React from "react";
function page() {
  const handleFClick = () => {
    window.location.href = "https://www.google.com";
  };
  return (
    <nav>
      <button onClick={handleFClick}>F</button>
      <button onClick={handleFClick}>U</button>
      <button onClick={handleFClick}>C</button>
      <button onClick={handleFClick}>K</button>
    </nav>
  );
}

export default page;
