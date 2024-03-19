import { useState } from "react";

function ChangeText() {
  const [count, setCount] = useState<string | number>(0);
  const [newCount, setNewCount] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCount(e.target.value);
  };

  const handleClick = () => {
    setCount(newCount);
  };
  return (
    <>
      <div>
        <input type='text' value={newCount} onChange={handleChange} />
        <button onClick={handleClick}>Change</button>
        <p>{count}</p>
      </div>
    </>
  );
}
export default ChangeText;
