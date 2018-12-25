import React, { useState } from "react";
import posed from "react-pose";
import "./style.css";

const Sidebar = posed.ul({
  open: {
    x: "0%",
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: "-200px", delay: 300 }
});

const Item = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

const Example2 = () => {
  const [flag, setFlag] = useState(false);
  return (
    <div>
      <Sidebar className="sidebar" pose={flag ? "open" : "closed"}>
        <Item onClick={() => setFlag(false)}>menu1</Item>
        <Item>menu2</Item>
        <Item>menu3</Item>
      </Sidebar>
      <div>
        <section>header</section>
        <ul>
          <li>content1</li>
          <li>content2</li>
          <li>content3</li>
        </ul>
        <button type="button" onClick={() => setFlag(!flag)}>
          open modal
        </button>
      </div>
    </div>
  );
};

export default Example2;
