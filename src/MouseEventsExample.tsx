import React from "react";

export default function MouseEventsExample() {
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("mouse enter ", e.clientX, e.clientY);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("mouse leave ", e);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button was clicked ", e);
  };
  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      Click me
    </button>
  );
}
