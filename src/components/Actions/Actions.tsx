import { useState } from "react";

export default function Actions() {
  const [iSOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!iSOpen);
  }

  return (
    <div>
      <button onClick={handleClick}>menu</button>

      <h2>{iSOpen ? "open" : " closed"}</h2>
    </div>
  );
}
