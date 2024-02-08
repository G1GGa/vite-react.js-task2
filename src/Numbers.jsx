import { useState } from "react";

const Numbers = ({ active, setActive }) => {
  const [nums] = useState([1, 2, 3, 4, 5]);

  return (
    <ul className="dots">
      {nums.map((n) => (
        <li
          onClick={() => setActive(n)}
          className={`singleDot ${n === active ? "activeDot" : ""}`}
          key={n}
        >
          {n}
        </li>
      ))}
    </ul>
  );
};

export default Numbers;
